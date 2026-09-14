document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("dragons-grid");
    const searchInput = document.getElementById("search-input");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const dragonCount = document.getElementById("dragon-count");

    const modal = document.getElementById("dragon-modal");
    const modalBody = document.getElementById("modal-body");
    const closeModal = document.querySelector(".close-modal");

    let currentType = "all";

    // Renderização dos Cards com Bordas Temáticas
    function renderDragons(list) {
        grid.innerHTML = "";
        dragonCount.textContent = list.length;

        if (list.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-size: 1.3rem;">Nenhum dragão encontrado com esses critérios...</p>`;
            return;
        }

        list.forEach(dragon => {
            const card = document.createElement("div");
            card.className = `dragon-card theme-${dragon.tipo}`;

            card.innerHTML = `
                <div class="card-img-container">
                    <img src="${dragon.imagem}" alt="${dragon.nome}" loading="lazy">
                </div>
                <div class="card-info">
                    <h3 class="dragon-name">${dragon.nome}</h3>
                    <span class="dragon-tag tag-${dragon.tipo}">${dragon.tribo}</span>
                    <p class="dragon-snippet">${dragon.origem.substring(0, 100)}...</p>
                </div>
            `;

            card.addEventListener("click", () => openModal(dragon));
            grid.appendChild(card);
        });
    }

    // Filtragem
    function filterData() {
        const query = searchInput.value.toLowerCase();

        const filtered = dragonsData.filter(dragon => {
            const matchesSearch = dragon.nome.toLowerCase().includes(query) ||
                                  dragon.tribo.toLowerCase().includes(query) ||
                                  dragon.habilidades.toLowerCase().includes(query);

            const matchesType = currentType === "all" || dragon.tipo === currentType;

            return matchesSearch && matchesType;
        });

        renderDragons(filtered);
    }

    searchInput.addEventListener("input", filterData);

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentType = btn.getAttribute("data-type");
            filterData();
        });
    });

    // Modal com Origem, Meio e Fim
    function openModal(dragon) {
        modalBody.innerHTML = `
            <h2 style="color: var(--gold); font-size: 2rem;">${dragon.nome}</h2>
            <p style="color: #ff6b6b; font-weight: bold; margin-bottom: 15px;">${dragon.tribo} — Classe ${dragon.tipo.toUpperCase()}</p>
            
            <img src="${dragon.imagem}" style="width: 100%; max-height: 300px; object-fit: cover; border-radius: 10px; margin-bottom: 20px;">
            
            <div class="history-section">
                <h4 style="color: var(--gold);">📜 Origem</h4>
                <p>${dragon.origem}</p>
            </div>

            <div class="history-section">
                <h4 style="color: var(--gold);">⚔️ Trajetória (Meio)</h4>
                <p>${dragon.meio}</p>
            </div>

            <div class="history-section">
                <h4 style="color: var(--gold);">👑 Destino / Conclusão (Fim)</h4>
                <p>${dragon.fim}</p>
            </div>

            <br>
            <p><strong>✨ Habilidades e Poderes:</strong> ${dragon.habilidades}</p>
        `;
        modal.style.display = "flex";
    }

    closeModal.addEventListener("click", () => { modal.style.display = "none"; });
    window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

    // Animação de Partículas
    function initCanvas() {
        const canvas = document.getElementById("fire-particles");
        const ctx = canvas.getContext("2d");

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener("resize", resize);

        const particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2.5 + 1,
            speedY: Math.random() * 1 + 0.3,
            opacity: Math.random()
        }));

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.y -= p.speedY;
                if (p.y < 0) {
                    p.y = canvas.height;
                    p.x = Math.random() * canvas.width;
                }
                ctx.fillStyle = `rgba(255, 120, 0, ${p.opacity})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(draw);
        }
        draw();
    }

    renderDragons(dragonsData);
    initCanvas();
});