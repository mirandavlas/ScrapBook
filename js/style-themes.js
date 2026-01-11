// SVG Data URIs for Doodles and Tapes
const SVG_ASSETS = {
    // Scrapbook Doodles (colorful, hand-drawn style with imperfections)
    scrapbook: {
        heart: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="120" height="110" xmlns="http://www.w3.org/2000/svg">
                <path d="M60,95 Q58,90 55,85 Q52,78 48,70 Q42,60 35,52 Q28,45 22,40 Q18,35 16,28 Q15,22 17,18 Q20,12 26,10 Q32,9 38,12 Q43,15 48,22 Q51,26 55,32 Q57,28 60,24 Q64,18 69,14 Q75,10 82,9 Q88,9 93,12 Q98,16 100,22 Q101,28 99,35 Q96,42 90,48 Q83,55 75,62 Q68,69 63,78 Q60,85 60,95 Z"
                      fill="none" stroke="#ff69b4" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
            </svg>
        `),
        star: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
                <path d="M60,18 L66,45 Q67,48 68,50 L92,52 Q95,53 93,55 L75,70 Q73,72 74,75 L80,99 Q81,102 78,100 L58,86 Q56,85 54,86 L34,100 Q31,102 32,99 L38,75 Q39,72 37,70 L19,55 Q17,53 20,52 L44,50 Q46,48 47,45 L53,18 Q54,15 57,15 Q60,15 60,18 Z"
                      fill="#ffd700" stroke="#f0c800" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.95"/>
            </svg>
        `),
        flower: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="110" height="110" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="55" cy="55" rx="9" ry="10" fill="#ffa500"/>
                <path d="M55,30 Q48,25 45,28 Q42,32 45,38 Q48,42 55,45" fill="#ff6b8a" opacity="0.85"/>
                <path d="M70,38 Q75,32 78,35 Q80,40 76,45 Q72,48 65,48" fill="#ff6b8a" opacity="0.85"/>
                <path d="M72,62 Q76,68 73,72 Q68,75 62,70 Q58,66 58,60" fill="#ff6b8a" opacity="0.85"/>
                <path d="M55,75 Q60,80 57,84 Q52,87 47,82 Q44,77 46,71" fill="#ff6b8a" opacity="0.85"/>
                <path d="M38,62 Q32,66 30,62 Q28,56 32,51 Q37,48 42,51" fill="#ff6b8a" opacity="0.85"/>
                <path d="M36,38 Q30,34 28,38 Q27,43 32,47 Q37,50 43,47" fill="#ff6b8a" opacity="0.85"/>
            </svg>
        `),
        arrow: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="140" height="90" xmlns="http://www.w3.org/2000/svg">
                <path d="M15,45 Q20,42 28,40 Q38,38 48,40 Q58,42 68,43 Q78,44 88,46 Q95,48 100,48"
                      fill="none" stroke="#8b4513" stroke-width="3.5" stroke-linecap="round"/>
                <path d="M100,48 Q97,42 92,38 M100,48 Q97,54 93,58"
                      fill="none" stroke="#8b4513" stroke-width="3.5" stroke-linecap="round"/>
            </svg>
        `),
        swirl: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
                <path d="M60,60 Q65,52 70,50 Q76,48 80,52 Q84,56 84,62 Q84,68 80,72 Q75,76 68,76 Q60,76 54,70 Q48,64 46,56 Q44,48 48,42 Q52,36 60,34"
                      fill="none" stroke="#6a5acd" stroke-width="3" stroke-linecap="round"/>
            </svg>
        `),
        sunburst: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="110" height="110" xmlns="http://www.w3.org/2000/svg">
                <circle cx="55" cy="55" r="18" fill="#ffdb58" opacity="0.9"/>
                <path d="M55,25 L57,15 M55,85 L57,95 M85,55 L95,57 M25,55 L15,57"
                      stroke="#ffdb58" stroke-width="3" stroke-linecap="round"/>
                <path d="M73,37 L81,29 M37,73 L29,81 M73,73 L81,81 M37,37 L29,29"
                      stroke="#ffdb58" stroke-width="3" stroke-linecap="round"/>
            </svg>
        `),
        cloud: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="130" height="80" xmlns="http://www.w3.org/2000/svg">
                <path d="M25,50 Q20,48 18,42 Q17,36 22,32 Q28,28 35,30 Q38,25 43,22 Q50,19 57,22 Q62,25 64,30 Q70,28 76,30 Q82,33 85,38 Q88,44 85,50 Q82,56 75,58 L35,58 Q28,56 25,50 Z"
                      fill="none" stroke="#87ceeb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
            </svg>
        `),
        music: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="100" height="120" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="28" cy="95" rx="12" ry="9" fill="#ff1493" opacity="0.9"/>
                <ellipse cx="68" cy="85" rx="12" ry="9" fill="#ff1493" opacity="0.9"/>
                <path d="M40,95 L40,30 Q42,25 70,30 L70,85"
                      stroke="#ff1493" stroke-width="3.5" stroke-linecap="round" fill="none"/>
                <path d="M40,30 L70,30" stroke="#ff1493" stroke-width="3.5" stroke-linecap="round"/>
            </svg>
        `),
        balloon: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="90" height="130" xmlns="http://www.w3.org/2000/svg">
                <path d="M45,25 Q30,30 25,45 Q22,60 28,72 Q35,82 45,85 Q55,82 62,72 Q68,60 65,45 Q60,30 45,25 Z"
                      fill="none" stroke="#ff6347" stroke-width="3" stroke-linecap="round" opacity="0.9"/>
                <path d="M45,85 Q47,95 45,105 L42,115"
                      stroke="#ff6347" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                <path d="M42,115 L38,118 L46,118 L42,115" fill="#ff6347" opacity="0.7"/>
            </svg>
        `),
        coffee: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="110" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M25,45 L25,70 Q25,78 32,82 Q40,85 50,85 Q60,85 68,82 Q75,78 75,70 L75,45 Z"
                      fill="none" stroke="#8b4513" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20,45 L80,45" stroke="#8b4513" stroke-width="3.2" stroke-linecap="round"/>
                <path d="M75,55 Q85,55 88,60 Q90,65 88,70 Q85,75 75,75"
                      fill="none" stroke="#8b4513" stroke-width="3" stroke-linecap="round"/>
                <path d="M35,25 Q38,20 40,25 M48,22 Q51,17 53,22 M61,25 Q64,20 66,25"
                      stroke="#8b4513" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
            </svg>
        `)
    },

    // Chalkboard Doodles (white, chalk texture style with rough edges)
    chalkboard: {
        heart: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="110" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M55,88 Q52,82 48,75 Q43,66 36,58 Q29,50 24,44 Q20,38 18,32 Q17,26 19,22 Q22,18 28,17 Q34,17 40,21 Q44,24 48,30 Q51,27 55,24 Q59,20 64,18 Q70,16 76,17 Q82,18 86,22 Q89,27 88,33 Q86,40 81,46 Q75,53 68,60 Q61,68 56,77 Q54,82 55,88 Z"
                      fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.88"/>
            </svg>
        `),
        star: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="110" height="110" xmlns="http://www.w3.org/2000/svg">
                <path d="M55,15 Q56,18 58,25 L62,42 Q63,45 65,47 L85,49 Q88,50 86,52 L70,65 Q68,67 69,70 L74,88 Q75,91 72,90 L56,79 Q54,78 52,79 L36,90 Q33,91 34,88 L39,70 Q40,67 38,65 L22,52 Q20,50 23,49 L43,47 Q45,45 46,42 L50,25 Q52,18 53,15 Q54,12 55,15 Z"
                      fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.88"/>
            </svg>
        `),
        check: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="110" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,52 Q22,54 28,60 Q34,66 40,72 Q42,74 44,72 Q50,65 58,55 Q66,45 74,35 Q80,27 85,22"
                      fill="none" stroke="#ffffff" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.88"/>
            </svg>
        `),
        underline: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="160" height="35" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,18 Q25,15 40,17 Q55,19 70,17 Q85,15 100,18 Q115,21 130,18 Q140,16 150,18"
                      fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.85"/>
            </svg>
        `),
        bracket: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="90" height="120" xmlns="http://www.w3.org/2000/svg">
                <path d="M70,15 Q50,15 45,20 Q40,25 40,35 L40,85 Q40,95 45,100 Q50,105 70,105"
                      fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" opacity="0.86"/>
            </svg>
        `),
        circle: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,15 Q35,16 24,27 Q13,38 12,53 Q11,68 22,79 Q33,90 48,91 Q63,92 74,81 Q85,70 86,55 Q87,40 76,29 Q65,18 50,15 Z"
                      fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" opacity="0.87"/>
            </svg>
        `),
        dots: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="120" height="40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="5" fill="#ffffff" opacity="0.9"/>
                <circle cx="50" cy="20" r="5" fill="#ffffff" opacity="0.9"/>
                <circle cx="80" cy="20" r="5" fill="#ffffff" opacity="0.9"/>
                <circle cx="110" cy="20" r="5" fill="#ffffff" opacity="0.9"/>
            </svg>
        `),
        exclamation: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="60" height="120" xmlns="http://www.w3.org/2000/svg">
                <path d="M30,20 Q32,22 32,30 L30,70 Q29,75 30,77" stroke="#ffffff" stroke-width="5.5" stroke-linecap="round" fill="none" opacity="0.88"/>
                <circle cx="30" cy="95" r="6" fill="#ffffff" opacity="0.9"/>
            </svg>
        `),
        question: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="90" height="120" xmlns="http://www.w3.org/2000/svg">
                <path d="M25,35 Q25,22 35,17 Q45,12 55,17 Q65,22 65,35 Q65,45 58,50 Q50,55 48,62 L48,70"
                      fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.88"/>
                <circle cx="48" cy="90" r="6" fill="#ffffff" opacity="0.9"/>
            </svg>
        `),
        lightbulb: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="100" height="130" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,25 Q38,27 31,37 Q24,47 26,59 Q28,68 35,74 Q38,77 40,82 L40,92 Q40,96 44,98 L56,98 Q60,96 60,92 L60,82 Q62,77 65,74 Q72,68 74,59 Q76,47 69,37 Q62,27 50,25 Z"
                      fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.87"/>
                <path d="M42,105 L58,105" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.85"/>
            </svg>
        `)
    },

    // Whiteboard Doodles (colorful, bold marker style)
    whiteboard: {
        circle: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="130" height="130" xmlns="http://www.w3.org/2000/svg">
                <path d="M65,18 Q48,19 35,32 Q22,45 21,62 Q20,79 33,92 Q46,105 63,106 Q80,107 93,94 Q106,81 107,64 Q108,47 95,34 Q82,21 65,18 Z"
                      fill="none" stroke="#0066cc" stroke-width="5" stroke-linecap="round" opacity="0.75"/>
            </svg>
        `),
        arrow: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="150" height="90" xmlns="http://www.w3.org/2000/svg">
                <path d="M15,45 Q20,43 30,44 Q45,45 60,45 Q75,45 90,44 Q105,43 115,45"
                      stroke="#1a1a1a" stroke-width="5" stroke-linecap="round" fill="none"/>
                <path d="M115,45 Q108,38 102,34 M115,45 Q108,52 102,56"
                      fill="none" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
            </svg>
        `),
        star: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="110" height="110" xmlns="http://www.w3.org/2000/svg">
                <path d="M55,15 L62,42 Q63,46 66,48 L88,50 Q92,51 90,54 L72,68 Q70,70 71,73 L77,96 Q78,100 74,98 L54,84 Q52,83 50,84 L30,98 Q26,100 27,96 L33,73 Q34,70 32,68 L14,54 Q12,51 16,50 L38,48 Q41,46 42,42 L49,15 Q50,11 52,11 Q54,11 55,15 Z"
                      fill="#e63946" stroke="#c1121f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
            </svg>
        `),
        check: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="120" height="110" xmlns="http://www.w3.org/2000/svg">
                <path d="M22,55 Q25,58 32,65 Q40,73 48,80 Q50,82 52,80 Q60,71 70,59 Q80,47 90,35 Q97,26 103,20"
                      fill="none" stroke="#06d6a0" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
            </svg>
        `),
        highlight: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="180" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="15" width="160" height="20" fill="#ffeb3b" opacity="0.4" rx="2"/>
            </svg>
        `),
        box: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="130" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M15,18 L112,18 Q118,18 118,24 L118,76 Q118,82 112,82 L15,82 Q9,82 9,76 L9,24 Q9,18 15,18 Z"
                      fill="none" stroke="#5a67d8" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
            </svg>
        `),
        hearts: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="140" height="60" xmlns="http://www.w3.org/2000/svg">
                <path d="M30,45 Q28,40 26,36 Q24,30 27,26 Q30,22 35,23 Q38,24 40,28 Q42,24 45,23 Q50,22 53,26 Q56,30 54,36 Q52,40 50,45 L40,52 L30,45 Z"
                      fill="#ff006e" opacity="0.85"/>
                <path d="M90,48 Q88,43 86,38 Q84,32 87,28 Q90,24 95,25 Q98,26 100,30 Q102,26 105,25 Q110,24 113,28 Q116,32 114,38 Q112,43 110,48 L100,55 L90,48 Z"
                      fill="#ff006e" opacity="0.85"/>
            </svg>
        `),
        burst: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
                <path d="M60,20 L65,45 L90,50 L70,65 L75,90 L60,75 L45,90 L50,65 L30,50 L55,45 Z"
                      fill="none" stroke="#f77f00" stroke-width="4.5" stroke-linejoin="round" opacity="0.8"/>
                <circle cx="60" cy="60" r="15" fill="none" stroke="#f77f00" stroke-width="3.5" opacity="0.75"/>
            </svg>
        `),
        thumbsup: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="100" height="110" xmlns="http://www.w3.org/2000/svg">
                <path d="M45,45 L45,35 Q45,25 50,20 Q55,15 60,20 Q63,23 63,28 L63,38 L75,38 Q82,38 85,43 Q88,48 85,53 L75,75 Q73,80 68,82 L35,82 Q28,82 25,77 L25,50 Q25,45 30,43 L45,45 Z"
                      fill="none" stroke="#06d6a0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
            </svg>
        `),
        lightning: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="80" height="130" xmlns="http://www.w3.org/2000/svg">
                <path d="M55,15 L25,60 L45,60 L35,115 L70,55 L50,55 L55,15 Z"
                      fill="#ffd60a" stroke="#faa307" stroke-width="3" stroke-linejoin="round" opacity="0.85"/>
            </svg>
        `)
    },

    // Tape SVGs (semi-transparent adhesive tape effects)
    tapes: {
        vintage: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="300" height="60" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
                    </filter>
                </defs>
                <rect x="5" y="5" width="290" height="50" rx="3" fill="#f5deb3"
                      opacity="0.75" filter="url(#shadow)"/>
                <line x1="5" y1="15" x2="295" y2="15" stroke="#daa520" stroke-width="0.5" opacity="0.3"/>
                <line x1="5" y1="45" x2="295" y2="45" stroke="#daa520" stroke-width="0.5" opacity="0.3"/>
            </svg>
        `),
        white: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="300" height="60" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="shadow2">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.25"/>
                    </filter>
                </defs>
                <rect x="5" y="5" width="290" height="50" rx="2" fill="#ffffff"
                      opacity="0.8" filter="url(#shadow2)"/>
                <rect x="5" y="5" width="290" height="50" rx="2" fill="none"
                      stroke="#e0e0e0" stroke-width="1" opacity="0.5"/>
            </svg>
        `),
        washi: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="300" height="60" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="shadow3">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
                    </filter>
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="2" fill="#ff69b4" opacity="0.4"/>
                    </pattern>
                </defs>
                <rect x="5" y="5" width="290" height="50" rx="3" fill="#ffb6c1"
                      opacity="0.7" filter="url(#shadow3)"/>
                <rect x="5" y="5" width="290" height="50" rx="3" fill="url(#dots)"/>
            </svg>
        `)
    }
};

// Theme Configurations
const THEMES = {
    scrapbook: {
        name: 'Scrapbook',
        background: 'linear-gradient(135deg, #f5f5dc 0%, #fffacd 100%)',
        fonts: ['Caveat', 'Pacifico', 'Dancing Script'],
        textColors: ['#4A3F35', '#2C3E50', '#8B4513'],
        defaultTextColor: '#4A3F35',
        doodleKeys: ['heart', 'star', 'flower', 'arrow', 'swirl', 'sunburst', 'cloud', 'music', 'balloon', 'coffee'],
        tapeKeys: ['vintage', 'washi'],
        useTape: true,
        textShadow: {
            color: 'rgba(0, 0, 0, 0.3)',
            blur: 5,
            offsetX: 2,
            offsetY: 2
        }
    },

    chalkboard: {
        name: 'Quadro Negro',
        background: 'radial-gradient(circle at center, #2c3e2e 0%, #1a1f1a 100%)',
        fonts: ['Permanent Marker', 'Indie Flower', 'Patrick Hand'],
        textColors: ['#FFFFFF', '#F4F4AA', '#AAFFAA'],
        defaultTextColor: '#FFFFFF',
        doodleKeys: ['heart', 'star', 'check', 'underline', 'bracket', 'circle', 'dots', 'exclamation', 'question', 'lightbulb'],
        tapeKeys: [],
        useTape: false,
        textShadow: {
            color: 'rgba(255, 255, 255, 0.5)',
            blur: 8,
            offsetX: 0,
            offsetY: 0
        }
    },

    whiteboard: {
        name: 'Quadro Branco',
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 100%)',
        fonts: ['Architects Daughter', 'Kalam', 'Shadows Into Light'],
        textColors: ['#1A1A1A', '#0066CC', '#CC0000'],
        defaultTextColor: '#1A1A1A',
        doodleKeys: ['circle', 'arrow', 'star', 'check', 'highlight', 'box', 'hearts', 'burst', 'thumbsup', 'lightning'],
        tapeKeys: ['white', 'washi'],
        useTape: true,
        textShadow: {
            color: 'rgba(0, 0, 0, 0.2)',
            blur: 3,
            offsetX: 1,
            offsetY: 1
        }
    }
};

// Helper function to get SVG data URI for a doodle
function getDoodleSVG(theme, doodleKey) {
    if (theme === 'scrapbook' || theme === 'chalkboard' || theme === 'whiteboard') {
        return SVG_ASSETS[theme][doodleKey];
    }
    return null;
}

// Helper function to get SVG data URI for a tape
function getTapeSVG(tapeKey) {
    return SVG_ASSETS.tapes[tapeKey];
}
