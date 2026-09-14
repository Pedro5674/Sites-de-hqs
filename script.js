document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("dragons-grid");
    const searchInput = document.getElementById("search-input");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const dragonCount = document.getElementById("dragon-count");

    const modal = document.getElementById("dragon-modal");
    const modalBody = document.getElementById("modal-content-body");
    const closeBtn = document.querySelector(".close-btn");

    let activeFilter = "all";

    const iconMap = {
        fogo: "fa-fire-flame-curved",
        ossos: "fa-bone",
        gelo: "fa-snowflake",
        noite: "fa-moon",
        mar: "fa-water",
        folha: "fa-leaf"
    };

    function renderCards(list) {
        grid.innerHTML = "";
        dragonCount.textContent = list.length;

        if (list.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--blood-bright); font-size: 1.5rem; padding: 40px;">Nenhum dragão encontrado nas sombras do compêndio...</p>`;
            return;
        }

        list.forEach(dragon => {
            const card = document.createElement("div");
            card.className = `dragon-card theme-${dragon.tipo}`;

            const icon = iconMap[dragon.tipo] || "fa-dragon";

            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${dragon.imagem}" alt="${dragon.nome}" loading="lazy">
                    <div class="badge-elem">
                        <i class="fa-solid ${icon}"></i>
                    </div>
                </div>
                <div class="card-body">
                    <h2 class="dragon-title">${dragon.nome}</h2>
                    <p class="dragon-sub">${dragon.tribo}</p>
                    <p class="dragon-desc-preview">${dragon.origem.substring(0, 110)}...</p>
                </div>
            `;

            card.addEventListener("click", () => showDragonLore(dragon));
            grid.appendChild(card);
        });
    }

    function filterData() {
        const query = searchInput.value.toLowerCase();

        const filtered = dragonsData.filter(d => {
            const matchesText = d.nome.toLowerCase().includes(query) ||
                                d.tribo.toLowerCase().includes(query) ||
                                d.habilidades.toLowerCase().includes(query) ||
                                d.origem.toLowerCase().includes(query);

            const matchesFilter = activeFilter === "all" || d.tipo === activeFilter;

            return matchesText && matchesFilter;
        });

        renderCards(filtered);
    }

    searchInput.addEventListener("input", filterData);

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilter = btn.getAttribute("data-type");
            filterData();
        });
    });

    function showDragonLore(d) {
        modalBody.innerHTML = `
            <h1 style="font-family: 'UnifrakturMaguntia', cursive; color: var(--blood-bright); font-size: 3rem; margin-bottom: 5px;">${d.nome}</h1>
            <p style="color: var(--gold-ancient); font-size: 1.2rem; font-weight: bold; margin-bottom: 20px;">${d.tribo} — [${d.tipo.toUpperCase()}]</p>
            
            <img src="${d.imagem}" style="width: 100%; max-height: 450px; object-fit: cover; border-radius: 6px; border: 2px solid var(--blood-bright); box-shadow: 0 0 40px #660000; margin-bottom: 25px;">

            <div class="lore-section">
                <h3>📜 Origem Completa & Eclosão</h3>
                <p>${d.origem}</p>
            </div>

            <div class="lore-section">
                <h3>⚔️ Crônica de Vida & Trajetória Detalhada</h3>
                <p>${d.trajetoria}</p>
            </div>

            <div class="lore-section">
                <h3>🛡️ Grandes Batalhas & Campanhas</h3>
                <p>${d.batalhas}</p>
            </div>

            <div class="lore-section">
                <h3>👑 O Destino Final & Conclusão da Lenda</h3>
                <p>${d.fim}</p>
            </div>

            <div class="lore-section" style="border-left-color: var(--gold-ancient);">
                <h3>✨ Habilidades, Poderes & Maldições Arcanas</h3>
                <p>${d.habilidades}</p>
            </div>
        `;
        modal.style.display = "flex";
    }

    closeBtn.addEventListener("click", () => { modal.style.display = "none"; });
    window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

    // MOTOR EXTREMO DE SANGUE ESCORRENDO E INTERAÇÃO COM MOUSE
    function initBloodEngine() {
        const bloodCanvas = document.getElementById("blood-canvas");
        const fireCanvas = document.getElementById("fire-canvas");

        const ctxBlood = bloodCanvas.getContext("2d");
        const ctxFire = fireCanvas.getContext("2d");

        function resize() {
            bloodCanvas.width = fireCanvas.width = window.innerWidth;
            bloodCanvas.height = fireCanvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener("resize", resize);

        const bloodDrops = Array.from({ length: 75 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * -window.innerHeight,
            length: Math.random() * 90 + 25,
            speed: Math.random() * 5 + 2,
            width: Math.random() * 3 + 1
        }));

        const sparks = Array.from({ length: 80 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 3.5 + 1,
            speedY: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 1.2,
            opacity: Math.random() * 0.8 + 0.2
        }));

        let mouseTrail = [];
        window.addEventListener("mousemove", (e) => {
            for (let i = 0; i < 2; i++) {
                mouseTrail.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: (Math.random() - 0.5) * 3,
                    vy: Math.random() * 3 + 1,
                    size: Math.random() * 4 + 2,
                    alpha: 1
                });
            }
        });

        function animate() {
            ctxBlood.clearRect(0, 0, bloodCanvas.width, bloodCanvas.height);
            ctxBlood.fillStyle = "#ff0033";
            ctxBlood.shadowBlur = 10;
            ctxBlood.shadowColor = "#660000";

            bloodDrops.forEach(d => {
                ctxBlood.fillRect(d.x, d.y, d.width, d.length);
                d.y += d.speed;

                if (d.y > bloodCanvas.height) {
                    d.y = Math.random() * -100;
                    d.x = Math.random() * bloodCanvas.width;
                }
            });

            mouseTrail.forEach((p, index) => {
                ctxBlood.fillStyle = `rgba(255, 0, 51, ${p.alpha})`;
                ctxBlood.beginPath();
                ctxBlood.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctxBlood.fill();

                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= 0.02;

                if (p.alpha <= 0) mouseTrail.splice(index, 1);
            });

            ctxFire.clearRect(0, 0, fireCanvas.width, fireCanvas.height);
            sparks.forEach(s => {
                s.y -= s.speedY;
                s.x += s.speedX;

                if (s.y < 0) {
                    s.y = fireCanvas.height;
                    s.x = Math.random() * fireCanvas.width;
                }

                ctxFire.fillStyle = `rgba(255, 69, 0, ${s.opacity})`;
                ctxFire.shadowBlur = 8;
                ctxFire.shadowColor = "#ff3300";
                ctxFire.beginPath();
                ctxFire.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctxFire.fill();
            });

            requestAnimationFrame(animate);
        }

        animate();
    }

    renderCards(dragonsData);
    initBloodEngine();
});