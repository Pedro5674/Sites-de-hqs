export function DragonCard(dragon) {
    return `
        <article class="dragon-card" data-element="${dragon.element}">
            <div class="card-image-container">
                <img src="${dragon.image}" alt="${dragon.name}" loading="lazy">
                <span class="element-badge badge-${dragon.element}">${dragon.element}</span>
            </div>
            <div class="card-content">
                <h3>${dragon.name}</h3>
                <p class="dragon-title">${dragon.title}</p>
                <div class="stats-mini">
                    <span>⚔️ ${dragon.attack}</span>
                    <span>🛡️ ${dragon.defense}</span>
                </div>
                <a href="#/dragon/${dragon.slug}" class="btn-details">Ver Ficha Completa</a>
            </div>
        </article>
    `;
}