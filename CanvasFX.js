import { Particle } from './ParticleSystem.js';

export class CanvasFX {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.currentTheme = 'default';
        this.animId = null;

        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.initParticles();
    }

    setTheme(theme) {
        this.currentTheme = theme;
        this.initParticles();
    }

    initParticles() {
        this.particles = [];
        const count = window.innerWidth < 768 ? 40 : 100;
        for (let i = 0; i < count; i++) {
            this.particles.push(new Particle(this.canvas.width, this.canvas.height, this.currentTheme));
        }
    }

    start() {
        if (this.animId) cancelAnimationFrame(this.animId);
        
        const loop = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            for (let particle of this.particles) {
                particle.update(this.canvas.width, this.canvas.height);
                particle.draw(this.ctx);
            }

            this.animId = requestAnimationFrame(loop);
        };
        loop();
    }
}