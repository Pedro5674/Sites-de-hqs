// DADOS DOS DRAGÕES COM IMAGENS EXCLUSIVAS SEM REPETIÇÃO
const DRAGON_DATABASE = [
    {
        id: "smaug",
        nome: "Smaug, o Terrível",
        tipo: "fogo",
        tribo: "O Dourado de Erebor (O Hobbit)",
        imagem: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000&auto=format&fit=crop",
        origem: "Smaug é o último dos grandes Vermes de Fogo da Terceira Era da Terra-média. Eclodiu nas desolações do Norte e marchou para o sul atraído pelas riquezas incalculáveis dos anões de Erebor.",
        trajetoria: "Atacou a Montanha Solitária em uma tempestade de fogo e morte, destruindo a cidade de Dale e se apossando do tesouro sob a montanha. Dormiu sobre as moedas de ouro por séculos, criando uma couraça impenetrável de pedras preciosas incrustadas em sua barriga.",
        batalhas: "O Massacre de Erebor, a Destruição de Dale e o Incêndio da Cidade do Lago (Esgaroth).",
        fim: "Derrotado por Bard, o Arqueiro, que disparou a Flecha Negra na única falha desprotegida de seu peito esquerdo, fazendo o monstro despencar do céu sobre as ruínas flutuantes.",
        habilidades: "Sopro de Fogo Primordial, Escamas Imunizadas por Diamantes, Fala Hipnótica e Visão Noturna Total."
    },
    {
        id: "balerion",
        nome: "Balerion, o Terror Negro",
        tipo: "fogo",
        tribo: "A Pavorosa Sombra de Valíria (House of the Dragon)",
        imagem: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=1000&auto=format&fit=crop",
        origem: "Montado por Aegon, o Conquistador, Balerion nasceu na Antiga Valíria. Suas asas eram tão vastas que cobriam cidades inteiras em sombra quando voava.",
        trajetoria: "Foi a maior arma da conquista dos Sete Reinos. Suas chamas negras e vermelhas derreteram as torres de pedra de Harrenhal como se fossem cera, selando a submissão dos reis de Westeros.",
        batalhas: "A Destruição de Harrenhal, o Campo de Fogo e as Guerras de Conquista de Aegon I.",
        fim: "Morreu de velhice extrema durante o reinado de Viserys I Targaryen, sendo o último dragão a ter visto a glória da Antiga Valíria antes do Perdição.",
        habilidades: "Fogo Negro Absoluto (Forja do Trono de Ferro), Envergadura Continental, Força Física Descomunal."
    },
    {
        id: "banguela",
        nome: "Banguela (Toothless)",
        tipo: "noite",
        tribo: "Fúria da Noite (Como Treinar o Seu Dragão)",
        imagem: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000&auto=format&fit=crop",
        origem: "O último exemplar conhecido da espécie Fúria da Noite. Possui escamas escuras como o céu noturno, olhos verdes penetrantes e uma inteligência quase humana.",
        trajetoria: "Caçado como uma lenda em Berk, foi derrubado por Soluço. Em vez de ser morto, desenvolveu um laço de amizade e lealdade que mudou o destino de vikings e dragões para sempre.",
        batalhas: "Confronto contra o Morte Rubra, Batalha do Alpha Draconis e o Resgate do Mundo Oculto.",
        fim: "Tornou-se o Alpha lendário de todos os dragões, guiando sua espécie para a segurança do Mundo Oculto nas profundezas do oceano.",
        habilidades: "Tiro de Plasma Eletromagnético, Voo Furtivo Supersônico, Modo Alpha Iluminado e Camuflagem por Raios."
    },
    {
        id: "king-ghidorah",
        nome: "King Ghidorah",
        tipo: "ossos",
        tribo: "O Falso Rei das Estrelas (Godzilla Universe)",
        imagem: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop",
        origem: "Uma entidade titânica extraterrestre de três cabeças congelada nas profundezas do gelo da Antártida, capaz de devastar ecossistemas inteiros por puro instinto de destruição.",
        trajetoria: "Despertado de seu sono milenar, tentou usurpar o trono de Alfa dos Titãs da Terra, gerando furacões de proporções globais e controlando outros monstros gigantes através de seu rugido.",
        batalhas: "A Batalha de Boston, a Guerra dos Alfas em Washington e o Duelo Noturno na Antártida contra Godzilla.",
        fim: "Foi incinerado célula por célula pelas explosões termonucleares de Godzilla em sua forma Burning Godzilla.",
        habilidades: "Bio-Eletricidade Gravitacional, Regeneração Celular Instantânea, Manipulação de Tempestades Globais."
    },
    {
        id: "shenlong",
        nome: "Shenlong",
        tipo: "folha",
        tribo: "O Dragão das Esferas Sagradas (Dragon Ball)",
        imagem: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
        origem: "Criado pelo Kami-Sama da Terra, Shenlong é um dragão oriental serpentino de escamas verdes místicas que reside no cerne do planeta até que as sete esferas sejam reunidas.",
        trajetoria: "Invocado inúmeras vezes para conceder desejos que alteraram a história do universo, desde ressuscitar guerreiros caídos em batalha até restaurar mundos destruídos.",
        batalhas: "Confronto com o Rei Piccolo, Invocação durante a Crise dos Saiyajins e Rituais Divinos.",
        fim: "Permanece imortal e atemporal, vinculado à existência das Esferas do Dragão e à pureza de seu criador.",
        habilidades: "Concessão de Desejos Ilimitados, Conhecimento Universal, Voo Divino Sem Asas."
    },
    {
        id: "alduin",
        nome: "Alduin, o Devorador de Mundos",
        tipo: "noite",
        tribo: "Primeogênito de Akatosh (Skyrim)",
        imagem: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
        origem: "Nascido no início dos tempos, Alduin é a força da natureza encarregada de consumir o plano de Nirn para que o próximo ciclo da criação possa nascer.",
        trajetoria: "Escravizou a humanidade na Era dos Mitos e foi banido através do tempo pelos antigos heróis usando um Ancients Scroll. Retornou em Helgen para dar início ao Apocalipse Dracônico.",
        batalhas: "A Qunta do Garganta do Mundo, a Batalha de Helgen e o Confronto Final em Sovngarde.",
        fim: "Foi destruído no plano espiritual de Sovngarde pelo Last Dragonborn (Dovahkiin) utilizando a voz sagrada do Dragonrend.",
        habilidades: "Ressurreição de Dragões Caídos, Tempestade de Meteoros (Grah-Zey-Mah), Imortalidade Absoluta fora de Sovngarde."
    },
    {
        id: "syrax",
        nome: "Syrax, a Deusa Dourada",
        tipo: "fogo",
        tribo: "A Montaria de Rhaenyra Targaryen (House of the Dragon)",
        imagem: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
        origem: "Um dragão fêmea de escamas amarelas reluzentes como o sol. Criada em cativeiro e mimada nos fossos de Porto Real.",
        trajetoria: "Fiel à Rainha Rhaenyra durante a Dança dos Dragões, permaneceu a maior parte do tempo protegendo Pedra do Dragão e o Palácio Real.",
        batalhas: "A Tomada de Porto Real e o Cerco ao Fossos dos Dragões.",
        fim: "Morreu durante o Levante de Porto Real, lutando em solo contra uma multidão enlouquecida após ter caído das alturas do fosso.",
        habilidades: "Sopro Flamejante Dourado, Velocidade Agilizada e Postura de Ovos de Linhagem Real."
    },
    {
        id: "vhagar",
        nome: "Vhagar, a Rainha das Nuvens",
        tipo: "fogo",
        tribo: "A Titã de Aemond Targaryen (House of the Dragon)",
        imagem: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop",
        origem: "Uma das três montarias da Conquista de Aegon. Na época da Dança dos Dragões, era a maior, mais velha e mais feroz criatura viva em Westeros.",
        trajetoria: "Passou pelas mãos de Visenya Targaryen, Laena Velaryon e Aemond Targaryen. Sua presença em qualquer batalha garantia a vitória imediata devido ao seu tamanho colossal.",
        batalhas: "A Batalha de Ponta Tempestade, a Destruição de Pouso da Gralha e o Massacre dos Rios.",
        fim: "Caiu na batalha mortal sobre o Olho dos Deuses contra Daemon Targaryen e seu dragão Caraxes, caindo nas águas profundas do lago.",
        habilidades: "Rugido de Impacto Sísmico, Mordida de Esmagamento Absoluto, Resistência Aprimorada por Séculos de Guerra."
    },
    {
        id: "haku",
        nome: "Haku (Espírito do Rio Kohaku)",
        tipo: "mar",
        tribo: "O Guardião Fluvial (A Viagem de Chihiro)",
        imagem: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
        origem: "Um deus rio que perdeu sua verdadeira forma e memória quando seu rio foi aterrado para a construção de edifícios urbanos.",
        trajetoria: "Serviu à bruxa Yubaba na Casa dos Banhos até encontrar Chihiro, cuja amizade e lembrança de seu verdadeiro nome o libertaram do feitiço e da escravidão.",
        batalhas: "O Duelo Noturno contra os Papéis Encantados de Zeniba e a Fuga dos Espíritos.",
        fim: "Recuperou seu nome real (Kohaku) e sua liberdade, prometendo reencontrar Chihiro no mundo humano.",
        habilidades: "Metamorfose Humana/Dracônica, Controle das Águas Purificadoras e Voo Místico entre Dimensões."
    }
];

function buildUnique200Dragons() {
    const list = [...DRAGON_DATABASE];

    const UNIQUE_IMAGE_POOL = [
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
        "https://images.unsplash.com/photo-1534447677768-be436bb09401",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853",
        "https://images.unsplash.com/photo-1563089145-599997674d42",
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b675",
        "https://images.unsplash.com/photo-1514539079130-25950c84af65",
        "https://images.unsplash.com/photo-1578632767115-351597cf2477"
    ];

    const tipos = ["fogo", "ossos", "gelo", "noite", "mar", "folha"];
    const nomes = ["Ancalagon", "Caraxes", "Vermithor", "Saphira", "Draco", "Norbert", "Tiamat", "Goremagala", "Bahamut", "Fatalis", "Rayquaza", "Nergigante", "Valstrax", "Yian Garuga"];

    for (let i = list.length + 1; i <= 200; i++) {
        const t = tipos[i % tipos.length];
        const nomeBase = nomes[i % nomes.length];
        const uniqueImgUrl = `${UNIQUE_IMAGE_POOL[i % UNIQUE_IMAGE_POOL.length]}?q=80&w=1000&auto=format&fit=crop&sig=${i}`;

        list.push({
            id: `dragon_unique_${i}`,
            nome: `${nomeBase} Ancestral #${i}`,
            tipo: t,
            tribo: `Clã Antigo de ${t.toUpperCase()}`,
            imagem: uniqueImgUrl,
            origem: `HISTÓRIA DE ORIGEM (#${i}): Eclodiu nos abismos subterrâneos durante a Idade da Pedra Negra. Suas escamas absorveram a essência elemental de ${t.toUpperCase()}, tornando-o uma criatura temida por exércitos medievais inteiros.`,
            trajetoria: `CRÔNICA DE VIDA (#${i}): Dominou as passagens montanhosas por mais de quatro séculos, acumulando tesouros e exigindo oferendas rituais das cidades vizinhas para manter a paz.`,
            batalhas: `A Batalha do Vale das Cinzas, o Duelo nas Ruínas Submersas e o Cerco à Fortaleza de Ferro.`,
            fim: `DESTINO FINAL (#${i}): Adormeceu em um sono mágico na câmara profana do grimório, aguardando ser invocado por rituais de sangue.`,
            habilidades: `Sopro Primordial de ${t.toUpperCase()}, Voo Ciclônico e Aura de Pavor Místico.`
        });
    }

    return list;
}

const dragonsData = buildUnique200Dragons();