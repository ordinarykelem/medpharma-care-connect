const fs = require('fs');
let c = fs.readFileSync('src/lib/contentPlans.ts', 'utf8');

// Separate the two blocks based on MEDPHARMA_PLAN export
let exportIdx = c.indexOf('export const MEDPHARMA_PLAN');
let flBlock = c.substring(0, exportIdx);
let mpBlock = c.substring(exportIdx);

function cleanOldMonths(text) {
    let lines = text.split('\n');
    let out = [];
    let skipping = false;
    let openBraces = 0;
    
    for(let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        if (!skipping && line.trim() === '{') {
            let isOld = false;
            for(let j = i + 1; j < i + 5 && j < lines.length; j++) {
                if (lines[j].includes('id: "fl-may') || lines[j].includes('id: "fl-jun') ||
                    lines[j].includes('id: "mp-may') || lines[j].includes('id: "mp-jun')) {
                    isOld = true;
                    break;
                }
            }
            if (isOld) {
                skipping = true;
                openBraces = 1;
                continue;
            }
        }
        
        if (skipping) {
            if (line.includes('{')) openBraces += (line.match(/\{/g) || []).length;
            if (line.includes('}')) openBraces -= (line.match(/\}/g) || []).length;
            if (openBraces <= 0) {
                skipping = false;
            }
            continue;
        }
        
        if (line.includes('WEEK OF MAY') || line.includes('WEEK OF JUN')) {
            continue;
        }
        
        out.push(line);
    }
    return out.join('\n');
}

// First clean both blocks
flBlock = cleanOldMonths(flBlock);
mpBlock = cleanOldMonths(mpBlock);

// Find MedPharma August (mp-aug) in FulLife block
let mpAugStart = flBlock.indexOf('    // ============ AUGUST WEEK 1');
if (mpAugStart === -1) {
    let idIdx = flBlock.indexOf('id: "mp-aug-w1a"');
    if (idIdx !== -1) {
        mpAugStart = flBlock.lastIndexOf('    {', idIdx);
    }
}

let mpAugContent = '';
if (mpAugStart !== -1) {
    // Extract everything from mpAugStart to the end of the briefs array (which is right before '  ],\n};')
    let flBriefsEnd = flBlock.indexOf('  ],\n};\n\n//');
    if (flBriefsEnd === -1) flBriefsEnd = flBlock.indexOf('  ],\r\n};\r\n\r\n//');
    if (flBriefsEnd === -1) flBriefsEnd = flBlock.indexOf('  ],\n};');
    
    if (flBriefsEnd !== -1 && flBriefsEnd > mpAugStart) {
        mpAugContent = flBlock.substring(mpAugStart, flBriefsEnd);
        flBlock = flBlock.substring(0, mpAugStart) + flBlock.substring(flBriefsEnd);
    }
}

// Append MedPharma August to MedPharma block
if (mpAugContent) {
    let mpBriefsEnd = mpBlock.indexOf('  ],\n};\n\nimport');
    if (mpBriefsEnd === -1) mpBriefsEnd = mpBlock.indexOf('  ],\r\n};\r\n\r\nimport');
    if (mpBriefsEnd !== -1) {
        mpBlock = mpBlock.substring(0, mpBriefsEnd) + '\n' + mpAugContent + mpBlock.substring(mpBriefsEnd);
    }
}

fs.writeFileSync('src/lib/contentPlans.ts', flBlock + mpBlock, 'utf8');
console.log('Cleaned and fixed contentPlans.ts');
