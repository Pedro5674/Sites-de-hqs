export function DragonProfile(dragon) {
    return `
        <section class="dragon-profile-view" data-element="${dragon.element}">
            <a href="#/" class="btn-back">← Voltar ao Bestiário</a>
            
            <div class="profile-header">
                <h1>${dragon.name}</h1>
                <p class="subtitle">${dragon.title}</p>
            </div>

            <div class="profile-grid">
                <div class="profile-media">
                    <img src="${dragon.image}" alt="${dragon.name}" class="featured-image">
                </div>

                <div class="profile-info">
                    <div class="info-block">
                        <h2>História & Origem</h2>
                        <p>${dragon.lore}</p>
                    </div>

                    <div class="info-block">
                        <h2>Atributos Dracônicos</h2>
                        <div class="stat-bar">
                            <span>Vida (HP): ${dragon.hp}</span>
                            <div class="bar"><div class="fill" style="width: ${(dragon.hp/15000)*100}%"></div></div>
                        </div>
                        <div class="stat-bar">
                            <span>Ataque: ${dragon.attack}</span>
                            <div class="bar"><div class="fill" style="width: ${(dragon.attack/2800)*100}%"></div></div>
                        </div>
                        <div class="stat-bar">
                            <span>Defesa: ${dragon.defense}</span>
                            <div class="bar"><div class="fill" style="width: ${(dragon.defense/2100)*100}%"></div></div>
                        </div>
                    </div>

                    <div class="info-block">
                        <h2>Habilidades Especiais</h2>
                        <ul class="skills-list">
                            ${dragon.abilities.map(skill => `<li>🔥 ${skill}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `;
}