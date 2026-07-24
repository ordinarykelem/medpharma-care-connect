const fs = require('fs');
let c = fs.readFileSync('src/lib/contentPlans.ts', 'utf8');

function removeOldBriefs(text) {
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
        
        out.push(line);
    }
    return out.join('\n');
}

c = removeOldBriefs(c);

let mpIdx = c.indexOf('export const MEDPHARMA_PLAN');
let flBlock = c.substring(0, mpIdx);
let mpBlock = c.substring(mpIdx);

let tempFlLines = flBlock.split('\n');
let newFl = [];
let skipMp = false;
let braceMp = 0;
for(let i=0; i<tempFlLines.length; i++){
    let line = tempFlLines[i];
    if(!skipMp && line.trim() === '{'){
        let isMp = false;
        for(let j=i+1; j<i+5 && j<tempFlLines.length; j++){
            if(tempFlLines[j].includes('id: "mp-aug')){
                isMp = true; break;
            }
        }
        if(isMp){
            skipMp = true; braceMp = 1; continue;
        }
    }
    if(skipMp){
        if(line.includes('{')) braceMp += (line.match(/\{/g)||[]).length;
        if(line.includes('}')) braceMp -= (line.match(/\}/g)||[]).length;
        if(braceMp <= 0) skipMp = false;
        continue;
    }
    newFl.push(line);
}
flBlock = newFl.join('\n');

// Clean up comments
flBlock = flBlock.replace(/\/\/ ============ AUGUST WEEK [0-9] - Aug [0-9-]*? \(.*?\) ============\r?\n/g, '');
flBlock = flBlock.replace(/\/\/ ============ AUGUST WEEK [0-9] - Aug [0-9-]*? ============\r?\n/g, '');
flBlock = flBlock.replace(/\/\/ ============ WEEK OF MAY.*?\r?\n/g, '');
flBlock = flBlock.replace(/\/\/ ============ WEEK OF JUN.*?\r?\n/g, '');
mpBlock = mpBlock.replace(/\/\/ ============ WEEK OF MAY.*?\r?\n/g, '');
mpBlock = mpBlock.replace(/\/\/ ============ WEEK OF JUN.*?\r?\n/g, '');

fs.writeFileSync('src/lib/contentPlans.ts', flBlock + mpBlock, 'utf8');
console.log('Cleaned');
