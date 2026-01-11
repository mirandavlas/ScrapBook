// SVG Data URIs for Doodles and Tapes
const SVG_ASSETS = {
    // Scrapbook Doodles (colorful, hand-drawn style)
    scrapbook: {
        heart: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,85 C50,85 20,60 15,45 C10,30 15,15 30,15 C40,15 45,25 50,30 C55,25 60,15 70,15 C85,15 90,30 85,45 C80,60 50,85 50,85 Z"
                      fill="none" stroke="#ff69b4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `),
        star: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,15 L58,40 L85,43 L65,60 L72,85 L50,70 L28,85 L35,60 L15,43 L42,40 Z"
                      fill="#ffd700" stroke="#f0c800" stroke-width="2" stroke-linejoin="round"/>
            </svg>
        `),
        flower: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="8" fill="#ffa500"/>
                <circle cx="50" cy="30" r="10" fill="#ff6347" opacity="0.8"/>
                <circle cx="68" cy="40" r="10" fill="#ff6347" opacity="0.8"/>
                <circle cx="68" cy="60" r="10" fill="#ff6347" opacity="0.8"/>
                <circle cx="50" cy="70" r="10" fill="#ff6347" opacity="0.8"/>
                <circle cx="32" cy="60" r="10" fill="#ff6347" opacity="0.8"/>
                <circle cx="32" cy="40" r="10" fill="#ff6347" opacity="0.8"/>
            </svg>
        `),
        arrow: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="120" height="80" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,40 Q40,20 80,40" fill="none" stroke="#8b4513" stroke-width="3" stroke-linecap="round"/>
                <path d="M80,40 L70,33 M80,40 L73,48" fill="none" stroke="#8b4513" stroke-width="3" stroke-linecap="round"/>
            </svg>
        `),
        swirl: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,50 Q60,30 70,40 T80,60 T70,75 T50,80 T30,75 T20,60 T30,40 T50,30"
                      fill="none" stroke="#4169e1" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
        `)
    },

    // Chalkboard Doodles (white, chalk texture style)
    chalkboard: {
        heart: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,85 C50,85 20,60 15,45 C10,30 15,15 30,15 C40,15 45,25 50,30 C55,25 60,15 70,15 C85,15 90,30 85,45 C80,60 50,85 50,85 Z"
                      fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
            </svg>
        `),
        star: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,15 L58,40 L85,43 L65,60 L72,85 L50,70 L28,85 L35,60 L15,43 L42,40 Z"
                      fill="none" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" opacity="0.9"/>
            </svg>
        `),
        check: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,50 L40,70 L80,25" fill="none" stroke="#ffffff" stroke-width="5"
                      stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
            </svg>
        `),
        underline: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="150" height="30" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,15 Q40,10 75,15 T140,15" fill="none" stroke="#ffffff"
                      stroke-width="3" stroke-linecap="round" opacity="0.85"/>
            </svg>
        `),
        corner: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,70 L10,10 L70,10" fill="none" stroke="#ffffff" stroke-width="4"
                      stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
                <circle cx="10" cy="10" r="3" fill="#ffffff" opacity="0.9"/>
            </svg>
        `)
    },

    // Whiteboard Doodles (colorful, marker style)
    whiteboard: {
        circle: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="45" fill="none" stroke="#0066cc" stroke-width="4"
                        stroke-linecap="round" opacity="0.7"/>
            </svg>
        `),
        arrow: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="140" height="80" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,40 L110,40" stroke="#000000" stroke-width="4" stroke-linecap="round"/>
                <path d="M110,40 L95,30 M110,40 L95,50" fill="none" stroke="#000000"
                      stroke-width="4" stroke-linecap="round"/>
            </svg>
        `),
        star: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,15 L58,40 L85,43 L65,60 L72,85 L50,70 L28,85 L35,60 L15,43 L42,40 Z"
                      fill="#cc0000" stroke="#990000" stroke-width="2" stroke-linejoin="round"/>
            </svg>
        `),
        check: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,50 L40,70 L80,25" fill="none" stroke="#00aa00" stroke-width="5"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `),
        underline: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="150" height="20" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="10" x2="140" y2="10" stroke="#000000" stroke-width="3"
                      stroke-linecap="round"/>
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
        doodleKeys: ['heart', 'star', 'flower', 'arrow', 'swirl'],
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
        doodleKeys: ['heart', 'star', 'check', 'underline', 'corner'],
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
        doodleKeys: ['circle', 'arrow', 'star', 'check', 'underline'],
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
