/**
 * ExportManager - Handles high-quality PNG export
 */
class ExportManager {
    constructor(canvasManager) {
        this.canvasManager = canvasManager;
        this.canvas = canvasManager.getCanvas();
    }

    /**
     * Export canvas as high-quality PNG (2x resolution)
     */
    export(filename = null) {
        // Deselect all objects to remove selection borders
        this.canvas.discardActiveObject();
        this.canvas.renderAll();

        // Generate filename with timestamp if not provided
        if (!filename) {
            const timestamp = this.getFormattedTimestamp();
            filename = `twitter-image-${timestamp}.png`;
        }

        try {
            // Export at 2x resolution for better quality
            const dataURL = this.canvas.toDataURL({
                format: 'png',
                quality: 1.0,
                multiplier: 2  // 1200x675 → 2400x1350
            });

            // Trigger download
            this.downloadImage(dataURL, filename);

            return true;
        } catch (error) {
            console.error('Export failed:', error);
            alert('Erro ao exportar imagem. Por favor, tente novamente.');
            return false;
        }
    }

    /**
     * Download image using a temporary link
     */
    downloadImage(dataURL, filename) {
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataURL;

        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    /**
     * Get formatted timestamp for filename
     */
    getFormattedTimestamp() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        return `${year}${month}${day}-${hours}${minutes}${seconds}`;
    }

    /**
     * Export as Base64 data URL (for preview or other uses)
     */
    exportAsDataURL(multiplier = 2) {
        this.canvas.discardActiveObject();
        this.canvas.renderAll();

        return this.canvas.toDataURL({
            format: 'png',
            quality: 1.0,
            multiplier: multiplier
        });
    }

    /**
     * Get export dimensions
     */
    getExportDimensions(multiplier = 2) {
        return {
            width: this.canvas.width * multiplier,
            height: this.canvas.height * multiplier
        };
    }
}
