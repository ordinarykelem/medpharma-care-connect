const fs = require('fs');
let c = fs.readFileSync('src/lib/contentPlans.ts', 'utf8');

const regex = /id: "(.*?)"/g;
let match;
while ((match = regex.exec(c)) !== null) {
  console.log(match[1]);
}
