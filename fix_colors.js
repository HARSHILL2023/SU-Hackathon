const fs = require('fs');
let content = fs.readFileSync('frontend/src/pages/Dashboard.js', 'utf8');

// Colors
content = content.replace(/#111827/gi, 'var(--text-main)');
content = content.replace(/#334155/gi, 'var(--border)');
content = content.replace(/#2dd4bf/gi, 'var(--accent)');
content = content.replace(/rgba\(15,\s*23,\s*42,\s*0\.8\)/gi, 'var(--bg-card)');
content = content.replace(/rgba\(30,\s*41,\s*59,\s*0\.8\)/gi, 'var(--bg-card)');
content = content.replace(/rgba\(30,\s*41,\s*59,\s*1\)/gi, 'var(--bg-card)');
content = content.replace(/linear-gradient.*?;/g, (match) => {
    if (match.includes('180deg') || match.includes('135deg') || match.includes('90deg')) {
        return "background: 'var(--card-gradient)'"; // Catch all the inline gradients
    }
    return match;
});

// Some hardcoded texts
content = content.replace(/color:\s*['"]#fff['"]/gi, "color: 'var(--text-main)'");
content = content.replace(/color:\s*['"]#ffffff['"]/gi, "color: 'var(--text-main)'");
content = content.replace(/color:\s*['"]white['"]/gi, "color: 'var(--text-main)'");
content = content.replace(/color:\s*['"]black['"]/gi, "color: 'white'"); // Buttons were black in light mode, now we want white text on green backgrounds
content = content.replace(/background:\s*['"]black['"]/gi, "background: 'var(--text-main)'");
content = content.replace(/background:\s*['"]#000['"]/gi, "background: 'var(--text-main)'");

fs.writeFileSync('frontend/src/pages/Dashboard.js', content, 'utf8');
