import { DragonCard } from './components/DragonCard.js';
import { DragonProfile } from './components/DragonProfile.js';

export class Router {
    constructor(db, canvasFx) {
        this.db = db;
        this.canvasFx = canvasFx;
        this.contentArea = document.getElementById('content-area');
        
        window.addEventListener('hashchange', () => this.handleRoute());
    }

    init() {
        this.handleRoute();
    }

    handleRoute() {
        const hash = window.location.hash || '#/';
        
        if (hash === '#/' || hash === '') {
            this.renderHome();
        } else if (hash.startsWith('#/dragon/')) {
            const slug = hash.replace('#/dragon/', '');
            this.renderDragonPage(slug);
        }
    }

    renderHome() {
        document.body.setAttribute('data-theme', 'default');
        this.canvasFx.setTheme('default');

        const dragons = this.db.getAll();
        const cardsHTML = dragons.map(d => DragonCard(d)).join('');
        
        this.contentArea.innerHTML = `
            <div class="home-header">
                <h1>Enciclopédia Dracônica</h1>
                <p>Explore o catálogo com os 200 dragões lendários do reino.</p>
            </div>
            <div class="grid-dragons">${cardsHTML}</div>
        `;
    }

    renderDragonPage(slug) {
        const dragon = this.db.getBySlug(slug);

        if (!dragon) {
            this.contentArea.innerHTML = `<h2>Dragão não encontrado no bestiário!</h2>`;
            return;
        }

        // Aplica o tema visual (CSS + Partículas no Canvas) conforme o elemento do dragão
        document.body.setAttribute('data-theme', dragon.element);
        this.canvasFx.setTheme(dragon.element);

        this.contentArea.innerHTML = DragonProfile(dragon);
        window.scrollTo(0, 0);
    }
}