import { DragonsDatabase } from './data/dragonsDatabase.js';
import { CanvasFX } from './engine/CanvasFX.js';
import { Router } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa Motor Gráfico de Partículas
    const canvasFx = new CanvasFX('bg-canvas');
    canvasFx.start();

    // 2. Inicializa Banco de Dados
    const db = new DragonsDatabase();

    // 3. Inicializa Roteador da Aplicação
    const router = new Router(db, canvasFx);
    router.init();
});