import { ELEMENTS } from './elementsEnum.js';

const nomesPrefixos = ["Ignis", "Glacius", "Vortex", "Tenebris", "Aether", "Pyra", "Boreas", "Zephyr", "Obsidian", "Viper"];
const nomesSufixos = ["thor", "rix", "zar", "gon", "mir", "von", "rax", "lys", "cor", "mord"];
const elementosChave = [ELEMENTS.FOGO, ELEMENTS.GELO, ELEMENTS.RAIO, ELEMENTS.VENENO, ELEMENTS.SOMBRA, ELEMENTS.LUZ];

export class DragonsDatabase {
    constructor() {
        this.dragons = this.generate200Dragons();
    }

    generate200Dragons() {
        const list = [];
        for (let i = 1; i <= 200; i++) {
            const pref = nomesPrefixos[i % nomesPrefixos.length];
            const suf = nomesSufixos[(i * 3) % nomesSufixos.length];
            const elem = elementosChave[i % elementosChave.length];
            
            list.push({
                id: `dragon-${i}`,
                slug: `${pref.toLowerCase()}-${suf.toLowerCase()}-${i}`,
                name: `${pref}${suf} the ${i}º`,
                title: `Ancestral do Domínio de ${elem.toUpperCase()}`,
                element: elem,
                level: Math.floor(Math.random() * 50) + 50,
                hp: Math.floor(Math.random() * 10000) + 5000,
                attack: Math.floor(Math.random() * 2000) + 800,
                defense: Math.floor(Math.random() * 1500) + 600,
                speed: Math.floor(Math.random() * 500) + 200,
                image: `https://picsum.photos/seed/dragon${i}/600/800`, // Substituível por ilustrações locais
                description: `Uma criatura lendária imemorial que habita as regiões mais inóspitas. Dominador absoluto da energia do tipo ${elem}.`,
                lore: `Reconhecido desde a Primeira Era, ${pref}${suf} queimou/congelou impérios inteiros. Relatos de caçadores antigos afirmam que o ar ao redor desta besta se altera drasticamente com sua simples presença.`,
                abilities: [
                    `Sopro Primordial de ${elem.toUpperCase()}`,
                    "Presa da Devastação",
                    "Escamas Impenetráveis",
                    "Aura Dracônica"
                ],
                habitat: "Picos Vulcânicos / Cavernas Abissais",
                weakness: elem === ELEMENTS.FOGO ? ELEMENTS.GELO : ELEMENTS.FOGO
            });
        }
        return list;
    }

    getAll() {
        return this.dragons;
    }

    getBySlug(slug) {
        return this.dragons.find(d => d.slug === slug);
    }

    filterByElement(element) {
        return this.dragons.filter(d => d.element === element);
    }
}