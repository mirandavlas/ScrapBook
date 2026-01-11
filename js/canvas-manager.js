/**
 * CanvasManager - Manages all Fabric.js canvas operations
 */
class CanvasManager {
    constructor(canvasId, width = 1200, height = 675) {
        this.canvas = new fabric.Canvas(canvasId, {
            width: width,
            height: height,
            preserveObjectStacking: true,
            backgroundColor: null
        });

        this.textObject = null; // Keep for backward compatibility with main textarea
        this.textObjects = []; // Array for multiple text blocks
        this.currentTheme = 'scrapbook';
        this.doodleObjects = [];
        this.photoObjects = [];
        this.width = width;
        this.height = height;

        // Enable object selection and editing
        this.setupCanvasEvents();
    }

    /**
     * Setup canvas events for interactive editing
     */
    setupCanvasEvents() {
        let clickTimeout = null;
        let lastClickTime = 0;
        let lastClickTarget = null;

        // Enable double-click to edit text (using mouse:down event)
        this.canvas.on('mouse:down', (e) => {
            const currentTime = new Date().getTime();
            const timeDiff = currentTime - lastClickTime;

            // Check if it's a double click (within 300ms) on the same target
            if (timeDiff < 300 && e.target === lastClickTarget && e.target) {
                // Check if target is text (fabric.Text or fabric.IText)
                if (e.target.type === 'text' || e.target.type === 'i-text') {
                    // It's a double click on text
                    e.target.enterEditing();
                    e.target.selectAll();
                }
            }

            lastClickTime = currentTime;
            lastClickTarget = e.target;
        });
    }

    /**
     * Set background using CSS gradient
     */
    setBackground(gradient) {
        // Create a temporary canvas to render the gradient
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = this.width;
        tempCanvas.height = this.height;
        const ctx = tempCanvas.getContext('2d');

        // Parse and apply gradient
        const grad = ctx.createLinearGradient(0, 0, this.width, this.height);

        // Simple gradient parsing (works for our predefined gradients)
        if (gradient.includes('linear-gradient')) {
            // Extract colors from gradient string
            const colors = gradient.match(/#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/g);
            if (colors && colors.length >= 2) {
                grad.addColorStop(0, colors[0]);
                grad.addColorStop(1, colors[1]);
            }
        } else if (gradient.includes('radial-gradient')) {
            // For radial gradients, use center point
            const colors = gradient.match(/#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/g);
            const centerX = this.width / 2;
            const centerY = this.height / 2;
            const radius = Math.max(this.width, this.height) / 2;
            const radGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);

            if (colors && colors.length >= 2) {
                radGrad.addColorStop(0, colors[0]);
                radGrad.addColorStop(1, colors[1]);
            }
            ctx.fillStyle = radGrad;
            ctx.fillRect(0, 0, this.width, this.height);
        } else {
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, this.width, this.height);
            return;
        }

        if (!gradient.includes('radial-gradient')) {
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, this.width, this.height);
        }

        // Convert to image and set as background
        const dataURL = tempCanvas.toDataURL();
        fabric.Image.fromURL(dataURL, (img) => {
            this.canvas.setBackgroundImage(img, this.canvas.renderAll.bind(this.canvas), {
                scaleX: this.canvas.width / img.width,
                scaleY: this.canvas.height / img.height
            });
        });
    }

    /**
     * Update or create text on canvas
     */
    updateText(text, options = {}) {
        if (!text || text.trim() === '') {
            if (this.textObject) {
                this.canvas.remove(this.textObject);
                this.textObject = null;
            }
            this.canvas.renderAll();
            return;
        }

        const theme = THEMES[this.currentTheme];
        const {
            fontFamily = theme.fonts[0],
            fontSize = this.calculateFontSize(text),
            fill = theme.defaultTextColor,
            textAlign = 'center'
        } = options;

        const shadowConfig = theme.textShadow;

        if (this.textObject) {
            this.textObject.set({
                text,
                fontFamily,
                fontSize,
                fill,
                textAlign
            });
        } else {
            this.textObject = new fabric.Text(text, {
                fontFamily,
                fontSize,
                fill,
                textAlign,
                left: this.canvas.width / 2,
                top: this.canvas.height / 2,
                originX: 'center',
                originY: 'center',
                shadow: new fabric.Shadow({
                    color: shadowConfig.color,
                    blur: shadowConfig.blur,
                    offsetX: shadowConfig.offsetX,
                    offsetY: shadowConfig.offsetY
                })
            });
            this.canvas.add(this.textObject);
        }

        this.canvas.renderAll();
    }

    /**
     * Add a new text block to the canvas (for multiple texts)
     */
    addTextBlock(text = 'Novo Texto', options = {}) {
        const theme = THEMES[this.currentTheme];
        const {
            fontFamily = theme.fonts[0],
            fontSize = 60,
            fill = theme.defaultTextColor,
            textAlign = 'center'
        } = options;

        const shadowConfig = theme.textShadow;

        // Create new IText object (editable text)
        const newText = new fabric.IText(text, {
            fontFamily,
            fontSize,
            fill,
            textAlign,
            left: this.canvas.width / 2 + (Math.random() * 100 - 50),
            top: this.canvas.height / 2 + (Math.random() * 100 - 50),
            originX: 'center',
            originY: 'center',
            shadow: new fabric.Shadow({
                color: shadowConfig.color,
                blur: shadowConfig.blur,
                offsetX: shadowConfig.offsetX,
                offsetY: shadowConfig.offsetY
            })
        });

        this.canvas.add(newText);
        this.textObjects.push(newText);
        this.canvas.setActiveObject(newText);
        this.canvas.renderAll();

        return newText;
    }

    /**
     * Calculate responsive font size based on text length
     */
    calculateFontSize(text) {
        const length = text.length;
        if (length < 30) return 80;
        if (length < 60) return 60;
        if (length < 100) return 45;
        return 35;
    }

    /**
     * Add a doodle SVG to the canvas
     */
    addDoodle(svgDataURL) {
        return new Promise((resolve, reject) => {
            fabric.loadSVGFromURL(svgDataURL, (objects, options) => {
                const doodle = fabric.util.groupSVGElements(objects, options);

                // Find a non-overlapping position
                const position = this.findNonOverlappingPosition(100, 100);

                doodle.set({
                    left: position.x,
                    top: position.y,
                    scaleX: 0.8 + Math.random() * 0.4,
                    scaleY: 0.8 + Math.random() * 0.4,
                    angle: Math.random() * 30 - 15,
                    opacity: 0.7 + Math.random() * 0.25,
                    originX: 'center',
                    originY: 'center'
                });

                this.canvas.add(doodle);
                this.doodleObjects.push(doodle);
                this.canvas.renderAll();
                resolve(doodle);
            });
        });
    }

    /**
     * Find a position that doesn't overlap with text
     */
    findNonOverlappingPosition(width, height) {
        const maxAttempts = 5;
        const margin = 50;

        for (let i = 0; i < maxAttempts; i++) {
            const x = margin + Math.random() * (this.width - width - margin * 2);
            const y = margin + Math.random() * (this.height - height - margin * 2);

            // Check if overlaps with text
            if (this.textObject) {
                const textBounds = this.textObject.getBoundingRect();
                const doodleBounds = {
                    left: x - width / 2,
                    top: y - height / 2,
                    width: width,
                    height: height
                };

                const overlaps = !(
                    doodleBounds.left > textBounds.left + textBounds.width ||
                    doodleBounds.left + doodleBounds.width < textBounds.left ||
                    doodleBounds.top > textBounds.top + textBounds.height ||
                    doodleBounds.top + doodleBounds.height < textBounds.top
                );

                if (!overlaps) {
                    return { x, y };
                }
            } else {
                return { x, y };
            }
        }

        // If all attempts fail, use corner positions
        const corners = [
            { x: 100, y: 100 },
            { x: this.width - 100, y: 100 },
            { x: 100, y: this.height - 100 },
            { x: this.width - 100, y: this.height - 100 }
        ];
        return corners[Math.floor(Math.random() * corners.length)];
    }

    /**
     * Add a photo to the canvas
     */
    addPhoto(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                fabric.Image.fromURL(e.target.result, (img) => {
                    // Scale to max 400px while maintaining aspect ratio
                    const maxSize = 400;
                    const scale = Math.min(maxSize / img.width, maxSize / img.height);

                    img.set({
                        left: this.canvas.width / 2,
                        top: this.canvas.height / 2,
                        originX: 'center',
                        originY: 'center',
                        scaleX: scale,
                        scaleY: scale,
                        shadow: new fabric.Shadow({
                            color: 'rgba(0, 0, 0, 0.5)',
                            blur: 10,
                            offsetX: 3,
                            offsetY: 3
                        })
                    });

                    this.canvas.add(img);
                    this.photoObjects.push(img);

                    // Add tape effect if theme supports it
                    const theme = THEMES[this.currentTheme];
                    if (theme.useTape) {
                        this.addTape(img);
                    }

                    this.canvas.renderAll();
                    resolve(img);
                });
            };

            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    /**
     * Add tape effect over a photo
     */
    addTape(photoObject) {
        const theme = THEMES[this.currentTheme];
        const tapeKeys = theme.tapeKeys;

        if (!tapeKeys || tapeKeys.length === 0) return;

        const randomTape = tapeKeys[Math.floor(Math.random() * tapeKeys.length)];
        const tapeSVG = getTapeSVG(randomTape);

        fabric.loadSVGFromURL(tapeSVG, (objects, options) => {
            const tape = fabric.util.groupSVGElements(objects, options);

            // Position tape at the top of the photo
            const photoHeight = photoObject.height * photoObject.scaleY;

            tape.set({
                left: photoObject.left,
                top: photoObject.top - photoHeight / 2 - 15,
                originX: 'center',
                originY: 'center',
                angle: Math.random() * 10 - 5,
                scaleX: 0.8,
                scaleY: 0.8
            });

            this.canvas.add(tape);
            this.canvas.bringToFront(tape);
            this.canvas.renderAll();
        });
    }

    /**
     * Delete the currently selected object
     */
    deleteSelected() {
        const activeObject = this.canvas.getActiveObject();

        if (activeObject) {
            // Remove from tracking arrays
            if (activeObject.type === 'text' || activeObject.type === 'i-text') {
                const index = this.textObjects.indexOf(activeObject);
                if (index > -1) {
                    this.textObjects.splice(index, 1);
                }
                if (activeObject === this.textObject) {
                    this.textObject = null;
                }
            } else if (this.doodleObjects.includes(activeObject)) {
                const index = this.doodleObjects.indexOf(activeObject);
                if (index > -1) {
                    this.doodleObjects.splice(index, 1);
                }
            } else if (this.photoObjects.includes(activeObject)) {
                const index = this.photoObjects.indexOf(activeObject);
                if (index > -1) {
                    this.photoObjects.splice(index, 1);
                }
            }

            // Remove from canvas
            this.canvas.remove(activeObject);
            this.canvas.discardActiveObject();
            this.canvas.renderAll();

            return true;
        }

        return false;
    }

    /**
     * Get the currently selected object
     */
    getSelectedObject() {
        return this.canvas.getActiveObject();
    }

    /**
     * Clear all objects from canvas (except background)
     */
    clear() {
        this.canvas.getObjects().forEach((obj) => {
            if (obj !== this.canvas.backgroundImage) {
                this.canvas.remove(obj);
            }
        });

        this.textObject = null;
        this.textObjects = [];
        this.doodleObjects = [];
        this.photoObjects = [];
        this.canvas.renderAll();
    }

    /**
     * Get the Fabric.js canvas instance
     */
    getCanvas() {
        return this.canvas;
    }
}
