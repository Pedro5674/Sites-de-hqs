export class Particle {
    constructor(width, height, type) {
        this.reset(width, height, type);
    }

    reset(width, height, type) {
        this.x = Math.random() * width;
        this.y = type === 'fogo' ? height + Math.random() * 20 : Math.random() * height;
        this.size = Math.random() * 4 + 1;
        this.speedY = type === 'fogo' ? -(Math.random() * 2 + 0.5) : (Math.random() * 1.5 + 0.5);
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.type = type;
        
        if (type === 'fogo') {
            this.color = `hsla(${Math.random() * 40 + 10}, 100%, 50%, ${this.opacity})`;
        } else if (type === 'gelo') {
            this.color = `hsla(${Math.random() * 40 + 180}, 100%, 75%, ${this.opacity})`;
        } else if (type === 'raio') {
            this.color = `hsla(${Math.random() * 40 + 260}, 100%, 70%, ${this.opacity})`;
        } else if (type === 'veneno') {
            this.color = `hsla(${Math.random() * 40 + 90}, 100%, 45%, ${this.opacity})`;
        } else {
            this.color = `hsla(45, 100%, 50%, ${this.opacity})`;
        }
    }

    update(width, height) {
        this.y += this.speedY;
        this.x += this.speedX;

        if (this.type === 'fogo' && this.y < -10) {
            this.reset(width, height, this.type);
        } else if (this.type !== 'fogo' && this.y > height + 10) {
            this.reset(width, height, this.type);
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}