/**
 * Main Application Logic
 */

// Global state
let canvasManager;
let exportManager;
let currentTheme = 'scrapbook';
let textInputTimeout;

/**
 * Initialize application on DOM load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Wait for fonts to load
    document.fonts.ready.then(() => {
        initializeApp();
    });
});

/**
 * Main initialization function
 */
function initializeApp() {
    // Initialize canvas manager
    canvasManager = new CanvasManager('mainCanvas', 1200, 675);
    exportManager = new ExportManager(canvasManager);

    // Load initial theme
    loadTheme('scrapbook');

    // Setup event listeners
    setupEventListeners();

    // Populate font selector with initial theme fonts
    populateFontSelector();

    console.log('Twitter Image Generator initialized successfully!');
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Theme selector buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', handleThemeChange);
    });

    // Text input with debouncing
    const textInput = document.getElementById('textInput');
    textInput.addEventListener('input', handleTextInput);

    // Character counter
    textInput.addEventListener('input', updateCharacterCount);

    // Font selector
    document.getElementById('fontSelect').addEventListener('change', handleFontChange);

    // Color picker
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.addEventListener('input', handleColorChange);
    colorPicker.addEventListener('change', handleColorChange);

    // Add text button (NEW)
    document.getElementById('addTextBtn').addEventListener('click', handleAddText);

    // Add doodle button
    document.getElementById('addDoodleBtn').addEventListener('click', handleAddDoodle);

    // Add photo button
    document.getElementById('addPhotoBtn').addEventListener('click', () => {
        document.getElementById('photoInput').click();
    });

    // Photo file input
    document.getElementById('photoInput').addEventListener('change', handlePhotoUpload);

    // Delete selected button (NEW)
    document.getElementById('deleteSelectedBtn').addEventListener('click', handleDeleteSelected);

    // Clear button
    document.getElementById('clearBtn').addEventListener('click', handleClearAll);

    // Export button
    document.getElementById('exportBtn').addEventListener('click', handleExport);

    // Canvas selection events (NEW)
    setupCanvasSelectionEvents();
}

/**
 * Setup canvas selection events to enable/disable delete button
 */
function setupCanvasSelectionEvents() {
    const canvas = canvasManager.getCanvas();
    const deleteBtn = document.getElementById('deleteSelectedBtn');

    canvas.on('selection:created', () => {
        deleteBtn.disabled = false;
    });

    canvas.on('selection:updated', () => {
        deleteBtn.disabled = false;
    });

    canvas.on('selection:cleared', () => {
        deleteBtn.disabled = true;
    });
}

/**
 * Handle theme change
 */
function handleThemeChange(e) {
    const theme = e.currentTarget.dataset.theme;

    if (theme === currentTheme) return;

    // Update active button
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

    // Load new theme
    loadTheme(theme);
}

/**
 * Load a theme
 */
function loadTheme(themeName) {
    currentTheme = themeName;
    const theme = THEMES[themeName];

    // Update canvas background
    canvasManager.setBackground(theme.background);
    canvasManager.currentTheme = themeName;

    // Update font selector
    populateFontSelector();

    // Update color picker
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.value = theme.defaultTextColor;
    updateColorValue(theme.defaultTextColor);

    // Re-render text with new theme settings if exists
    const text = document.getElementById('textInput').value;
    if (text.trim()) {
        updateCanvasText(text);
    }
}

/**
 * Populate font selector dropdown
 */
function populateFontSelector() {
    const theme = THEMES[currentTheme];
    const fontSelect = document.getElementById('fontSelect');

    fontSelect.innerHTML = '';

    theme.fonts.forEach((font, index) => {
        const option = document.createElement('option');
        option.value = font;
        option.textContent = font;
        option.style.fontFamily = font;
        fontSelect.appendChild(option);
    });
}

/**
 * Handle text input with debouncing
 */
function handleTextInput(e) {
    clearTimeout(textInputTimeout);

    textInputTimeout = setTimeout(() => {
        updateCanvasText(e.target.value);
    }, 300);
}

/**
 * Update character count display
 */
function updateCharacterCount(e) {
    const count = e.target.value.length;
    document.getElementById('charCount').textContent = count;
}

/**
 * Handle font change
 */
function handleFontChange() {
    const text = document.getElementById('textInput').value;
    if (text.trim()) {
        updateCanvasText(text);
    }
}

/**
 * Handle color change
 */
function handleColorChange(e) {
    const color = e.target.value;
    updateColorValue(color);

    const text = document.getElementById('textInput').value;
    if (text.trim()) {
        updateCanvasText(text);
    }
}

/**
 * Update color value display
 */
function updateColorValue(color) {
    document.getElementById('colorValue').textContent = color.toUpperCase();
}

/**
 * Update canvas text
 */
function updateCanvasText(text) {
    const theme = THEMES[currentTheme];
    const fontFamily = document.getElementById('fontSelect').value || theme.fonts[0];
    const fill = document.getElementById('colorPicker').value || theme.defaultTextColor;

    canvasManager.updateText(text, {
        fontFamily,
        fill,
        textAlign: 'center'
    });
}

/**
 * Handle add text button (NEW)
 */
function handleAddText() {
    const theme = THEMES[currentTheme];
    const fontFamily = document.getElementById('fontSelect').value || theme.fonts[0];
    const fill = document.getElementById('colorPicker').value || theme.defaultTextColor;

    const newText = canvasManager.addTextBlock('Novo Texto', {
        fontFamily,
        fill,
        fontSize: 60
    });

    // Show success message
    showTemporaryMessage('✅ Texto adicionado! Clique duas vezes para editar.');
}

/**
 * Handle add doodle button
 */
function handleAddDoodle() {
    const theme = THEMES[currentTheme];
    const doodleKeys = theme.doodleKeys;

    if (!doodleKeys || doodleKeys.length === 0) {
        alert('Este tema não possui doodles disponíveis.');
        return;
    }

    // Get random doodle
    const randomKey = doodleKeys[Math.floor(Math.random() * doodleKeys.length)];
    const doodleSVG = getDoodleSVG(currentTheme, randomKey);

    if (doodleSVG) {
        canvasManager.addDoodle(doodleSVG).catch(error => {
            console.error('Failed to add doodle:', error);
            alert('Erro ao adicionar doodle. Por favor, tente novamente.');
        });
    }
}

/**
 * Handle photo upload
 */
function handlePhotoUpload(e) {
    const files = e.target.files;

    if (files.length === 0) return;

    const file = files[0];

    // Validate file type
    if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione um arquivo de imagem válido.');
        return;
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
        alert('A imagem é muito grande. Por favor, selecione uma imagem menor que 10MB.');
        return;
    }

    // Add photo to canvas
    canvasManager.addPhoto(file).catch(error => {
        console.error('Failed to add photo:', error);
        alert('Erro ao adicionar foto. Por favor, tente novamente.');
    });

    // Reset file input
    e.target.value = '';
}

/**
 * Handle delete selected button (NEW)
 */
function handleDeleteSelected() {
    const success = canvasManager.deleteSelected();

    if (success) {
        showTemporaryMessage('🗑️ Elemento deletado com sucesso!');
    }
}

/**
 * Handle clear all button
 */
function handleClearAll() {
    const confirmed = confirm('Tem certeza que deseja limpar tudo? Esta ação não pode ser desfeita.');

    if (confirmed) {
        // Clear canvas
        canvasManager.clear();

        // Reset text input
        document.getElementById('textInput').value = '';
        updateCharacterCount({ target: { value: '' } });

        // Reload theme to restore background
        loadTheme(currentTheme);
    }
}

/**
 * Handle export button
 */
function handleExport() {
    const success = exportManager.export();

    if (success) {
        // Optional: Show success message
        showTemporaryMessage('Imagem exportada com sucesso! 🎉');
    }
}

/**
 * Show temporary success message
 */
function showTemporaryMessage(message) {
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        font-weight: 600;
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        z-index: 10000;
        animation: slideInUp 0.3s ease;
    `;

    document.body.appendChild(messageEl);

    // Remove after 3 seconds
    setTimeout(() => {
        messageEl.style.animation = 'slideOutDown 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(messageEl);
        }, 300);
    }, 3000);
}

// Add animations for temporary message
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOutDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
`;
document.head.appendChild(style);
