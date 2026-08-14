const fs = require('fs');

// 1. Extract SMS Campaigns
const smsContent = fs.readFileSync('src/pages/SmsPlan.tsx', 'utf8');
const smsMatch = smsContent.match(/const SMS_CAMPAIGNS = (\[[\s\S]*?\]);/);
let smsMd = '# MedPharma SMS Marketing Plan (Q3 & Q4 2026)\n\n';
if(smsMatch) {
    const data = eval(smsMatch[1]);
    data.forEach(c => {
        smsMd += `### ${c.date}: ${c.title}\n- **Target:** ${c.target}\n- **Message:** ${c.copy}\n- **Characters:** ${c.copy.length}\n\n`;
    });
}
fs.writeFileSync('C:\\Users\\hp\\.gemini\\antigravity\\brain\\a7b17a52-ca9b-4747-ba85-1793b13d884d\\sms_marketing_export.md', smsMd);

// 2. Extract Master Scripts
const scriptsContent = fs.readFileSync('src/pages/MarketingScripts.tsx', 'utf8');
const scriptsMatch = scriptsContent.match(/const SCRIPTS_DATA = (\[[\s\S]*?\]);/);
let scriptsMd = '# Master Video Scripts (Anti-Glitch Format)\n\n';
if(scriptsMatch) {
    // We need to mock the lucide icons so eval doesn't throw
    const Heart = "Heart", MessageSquare = "MessageSquare", HelpCircle = "HelpCircle", Zap = "Zap", Car = "Car", Check = "Check", Copy = "Copy", Droplets = "Droplets", Wind = "Wind", Brain = "Brain", Moon = "Moon", Apple = "Apple", Bone = "Bone", Flower2 = "Flower2", Smartphone = "Smartphone";
    const data = eval(scriptsMatch[1]);
    data.forEach(theme => {
        scriptsMd += `## Theme: ${theme.theme}\n\n`;
        theme.videos.forEach(v => {
            scriptsMd += `### ${v.title}\n`;
            scriptsMd += `**Scene 1 (Kikki):** ${v.s1}\n\n`;
            scriptsMd += `**Scene 2 (Frederick):** ${v.s2}\n\n`;
        });
        scriptsMd += `---\n\n`;
    });
}
fs.writeFileSync('C:\\Users\\hp\\.gemini\\antigravity\\brain\\a7b17a52-ca9b-4747-ba85-1793b13d884d\\master_video_scripts_export.md', scriptsMd);

console.log("Done extracting");
