// Bayer Matrix Dithering for gradient backgrounds (Claude Sonnet 4.5)

// ============================================
// COLOR PALETTES - Easy to customize!
// ============================================
const COLOR_PALETTES = [
    { r: 150, g: 80, b: 30 },   // Dim orange
    { r: 100, g: 50, b: 120 },  // Purple
    { r: 40, g: 80, b: 100 },   // Teal
    { r: 120, g: 60, b: 60 },   // Deep red
    { r: 60, g: 100, b: 70 },   // Sage green
    { r: 100, g: 90, b: 50 },   // Gold
    { r: 50, g: 70, b: 120 },   // Deep blue
    { r: 110, g: 70, b: 90 }    // Mauve
];

// Timing settings
const COLOR_HOLD_TIME = 7500;      // Time to stay on a color (ms)
const COLOR_TRANSITION_TIME = 1500; // Time to transition between colors (ms)
const BUBBLE_SPEED = 0.001

// ============================================

// 8x8 Bayer Matrix (normalized to 0-1)
const BAYER_MATRIX_8x8 = [
    [ 0,48,12,60, 3,51,15,63],
    [32,16,44,28,35,19,47,31],
    [ 8,56, 4,52,11,59, 7,55],
    [40,24,36,20,43,27,39,23],
    [ 2,50,14,62, 1,49,13,61],
    [34,18,46,30,33,17,45,29],
    [10,58, 6,54, 9,57, 5,53],
    [42,26,38,22,41,25,37,21]
].map(row => row.map(val => val / 64));

class DitheredGradient {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });

        // Array of animated balls
        this.balls = [];

        // Animation
        this.animationId = null;

        // Color cycling
        this.currentColorIndex = 0;
        this.nextColorIndex = 1;
        this.colorTransitionProgress = 0; // 0 to 1
        this.lastColorChangeTime = Date.now();
        this.isTransitioning = false;

        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    // Create a new ball
    addBall() {
        const ball = {
            x: Math.random(),
            y: Math.random(),
            radius: 0.1 + Math.random() * 0.3,
            targetRadius: 0.1 + Math.random() * 0.3,
            vx: (Math.random() - 0.5) * BUBBLE_SPEED,
            vy: (Math.random() - 0.5) * BUBBLE_SPEED,
            colorStart: null,  // Will be set in draw()
            colorEnd: { r: 0, g: 0, b: 0 }  // Black at edges
        };
        this.balls.push(ball);
    }

    // Get current interpolated color
    getCurrentColor() {
        const currentColor = COLOR_PALETTES[this.currentColorIndex];

        if (!this.isTransitioning) {
            return currentColor;
        }

        const nextColor = COLOR_PALETTES[this.nextColorIndex];
        const t = this.colorTransitionProgress;

        return {
            r: Math.round(currentColor.r + (nextColor.r - currentColor.r) * t),
            g: Math.round(currentColor.g + (nextColor.g - currentColor.g) * t),
            b: Math.round(currentColor.b + (nextColor.b - currentColor.b) * t)
        };
    }

    // Update CSS custom properties for button colors
    updateButtonColors() {
        const color = this.getCurrentColor();
        document.documentElement.style.setProperty('--bubble-color-primary', `rgb(${color.r}, ${color.g}, ${color.b})`);
    }

    // Update color cycling
    updateColorCycle() {
        const now = Date.now();
        const elapsed = now - this.lastColorChangeTime;

        if (!this.isTransitioning) {
            // Check if it's time to start transitioning
            if (elapsed >= COLOR_HOLD_TIME) {
                this.isTransitioning = true;
                this.colorTransitionProgress = 0;
                this.lastColorChangeTime = now;
            }
        } else {
            // We're transitioning
            this.colorTransitionProgress = Math.min(elapsed / COLOR_TRANSITION_TIME, 1);

            // Check if transition is complete
            if (this.colorTransitionProgress >= 1) {
                this.isTransitioning = false;
                this.currentColorIndex = this.nextColorIndex;
                this.nextColorIndex = (this.nextColorIndex + 1) % COLOR_PALETTES.length;
                this.colorTransitionProgress = 0;
                this.lastColorChangeTime = now;
            }
        }
    }

    // Start animation
    startAnimation() {
        if (this.animationId) return;

        const animate = () => {
            this.updateBalls();
            this.draw();
            this.animationId = requestAnimationFrame(animate);
        };
        animate();
    }

    // Stop animation
    stopAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    // Update ball positions and sizes
    updateBalls() {
        // Update color cycling
        this.updateColorCycle();

        this.balls.forEach(ball => {
            // Move ball
            ball.x += ball.vx;
            ball.y += ball.vy;

            // Wrap around screen edges
            if (ball.x < -0.5) ball.x = 1.5;
            if (ball.x > 1.5) ball.x = -0.5;
            if (ball.y < -0.5) ball.y = 1.5;
            if (ball.y > 1.5) ball.y = -0.5;

            // Pulse size
            ball.radius += (ball.targetRadius - ball.radius) * 0.01;

            // Occasionally change target size
            if (Math.random() < 0.003) {
                ball.targetRadius = 0.1 + Math.random() * 0.3;
            }

            // Occasionally change direction
            if (Math.random() < 0.002) {
                ball.vx = (Math.random() - 0.5) * BUBBLE_SPEED;
                ball.vy = (Math.random() - 0.5) * BUBBLE_SPEED;
            }
        });
    }

    resize() {
        // Set canvas size to window size (scaled down for performance)
        const scale = 2; // Pixel size
        this.canvas.width = Math.floor(window.innerWidth / scale);
        this.canvas.height = Math.floor(window.innerHeight / scale);

        // Set CSS size to exact multiple to avoid mixels
        this.canvas.style.width = (this.canvas.width * scale) + 'px';
        this.canvas.style.height = (this.canvas.height * scale) + 'px';

        this.draw();
    }

    draw() {
        const width = this.canvas.width;
        const height = this.canvas.height;

        const imageData = this.ctx.createImageData(width, height);
        const data = imageData.data;

        // Start with black background
        for (let i = 0; i < data.length; i += 4) {
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;
            data[i + 3] = 255;
        }

        // Get current color for all balls
        const currentColor = this.getCurrentColor();

        // Update button colors to match current bubble color
        this.updateButtonColors();

        // Render each ball
        this.balls.forEach(ball => {
            // Update ball color to current cycle color
            ball.colorStart = currentColor;
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    const index = (y * width + x) * 4;

                    // Calculate distance from ball center
                    const centerPx = ball.x * width;
                    const centerPy = ball.y * height;
                    const maxRadius = ball.radius * Math.max(width, height);

                    const dx = x - centerPx;
                    const dy = y - centerPy;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    const gradientPos = Math.min(distance / maxRadius, 1);

                    // Interpolate color
                    const r = ball.colorStart.r + (ball.colorEnd.r - ball.colorStart.r) * gradientPos;
                    const g = ball.colorStart.g + (ball.colorEnd.g - ball.colorStart.g) * gradientPos;
                    const b = ball.colorStart.b + (ball.colorEnd.b - ball.colorStart.b) * gradientPos;

                    // Get Bayer matrix threshold for this pixel
                    const bayerX = x % 8;
                    const bayerY = y % 8;
                    const threshold = BAYER_MATRIX_8x8[bayerY][bayerX];

                    // Apply dithering
                    const ditherR = (r / 255) > threshold ? r : 0;
                    const ditherG = (g / 255) > threshold ? g : 0;
                    const ditherB = (b / 255) > threshold ? b : 0;

                    // Additive blending (lighter colors on top)
                    data[index] = Math.min(255, data[index] + ditherR);
                    data[index + 1] = Math.min(255, data[index + 1] + ditherG);
                    data[index + 2] = Math.min(255, data[index + 2] + ditherB);
                }
            }
        });

        this.ctx.putImageData(imageData, 0, 0);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const gradient = new DitheredGradient('dither-bg');

    // Create multiple balls
    for (let i = 0; i < 8; i++) {
        gradient.addBall();
    }

    // Start animation
    gradient.startAnimation();

    // Expose to global scope for customization
    window.ditheredGradient = gradient;
});
