// Base Principal de Dragões Destacados
const primaryDragons = [
    {
        id: "perigo",
        nome: "Perigo (Peril)",
        tipo: "fogo",
        tribo: "Asa do Céu",
        imagem: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
        origem: "Nascida com uma quantidade anormal de fogo nas escamas, foi abandonada e criada pela Rainha Escarlate para ser a campeã da Arena.",
        meio: "Serviu involuntariamente como a maior arma do Reino do Céu até conhecer Argila e os Draconianos do Destino, questionando sua lealdade.",
        fim: "Conseguiu libertar-se da manipulação de Escarlate e Mestre do Obscuro, aprendendo a controlar seus impulsos e tornando-se guardiã da Montanha Jade.",
        habilidades: "Escamas de Fogo Inextinguível, Voo Supremo, Resistência Extrema"
    },
    {
        id: "ossario",
        nome: "Maldoror o Ossuário",
        tipo: "ossos",
        tribo: "Necro-Dracônico",
        imagem: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=800&auto=format&fit=crop",
        origem: "Forjado no cemitério ancestral de dragões a partir de restos mortais e magia proibida de anima.",
        meio: "Vagou durante séculos pelas catacumbas de Pyrrhia devorando a essência vital de intrusos e saqueadores.",
        fim: "Selado nas profundezas das montanhas por uma coalizão de Asas da Noite e Asas do Gelo.",
        habilidades: "Invocação de Ossos, Escultura de Esqueletos, Hálito de Cinzas"
    },
    {
        id: "misterioso",
        nome: "Misterioso (Darkstalker)",
        tipo: "noite",
        tribo: "Asa da Noite / Gelo",
        imagem: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
        origem: "Híbrido real nascido sob três luas cheias há dois mil anos, concedendo-lhe poderes arcanos colossais.",
        meio: "Utilizou sua magia de anima sem limites, criando feitiços temidos por todo o continente e mergulhando em paranoia.",
        fim: "Foi adormecido por um feitiço de sua amada Clearsight e, séculos depois, transformado no jovem dragão Peacemaker.",
        habilidades: "Magia de Anima Ilimitada, Onisciência do Futuro, Telepatia"
    },
    {
        id: "tsunami",
        nome: "Princesa Tsunami",
        tipo: "mar",
        tribo: "Asa do Mar",
        imagem: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
        origem: "Roubada do Palácio Profundo ainda no ovo por Puddles para cumprir a profecia dos Draconianos do Destino.",
        meio: "Liderou a fuga da montanha dos Guardiões e retornou ao Reino do Mar para reivindicar seu lugar e salvar sua mãe, a Rainha Coral.",
        fim: "Tornou-se diretora de segurança da Academia da Montanha Jade, defendendo a união de todas as tribos.",
        habilidades: "Visão Aquática Bioluminescente, Natação Tsunami, Combate Físico"
    },
    {
        id: "inverno",
        nome: "Príncipe Inverno (Winter)",
        tipo: "gelo",
        tribo: "Asa do Gelo",
        imagem: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
        origem: "Nascido na alta nobreza do Reino do Gelo, condicionado a seguir o rigoroso e frio sistema de rankings reais.",
        meio: "Uniu-se à Ala da Prata na Montanha Jade e enfrentou dilemas entre a lealdade à sua tribo e a amizade com outros dragões.",
        fim: "Renunciou às disputas de trono e fundou um santuário de estudos e preservação de criaturas em Sanctuary.",
        habilidades: "Hálito de Gelo Congelante, Garras de Cristal, Imunidade ao Frio Extremado"
    },
    {
        id: "folha_ancestral",
        nome: "Sundew (Orvalha)",
        tipo: "folha",
        tribo: "Asa de Folha",
        imagem: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
        origem: "Nascida entre os rebeldes Asas de Folha no continente de Pantala, treinada desde filhote para a guerra.",
        meio: "Dominou a rara magia da Fala com Plantas (Foliafala), comandando a flora carnívora contra as Colmeias.",
        fim: "Ajudou a derrubar a Rainha Vespa e restabeleceu o equilíbrio ecológico entre os dragões de Pantala.",
        habilidades: "Foliafala Avançada, Controle de Venenos Naturais, Camuflagem na Mata"
    }
];

// Algoritmo Gerador de Expansão para Completar 200 Dragões Únicos
function generate200Dragons() {
    const tipos = ["fogo", "ossos", "gelo", "noite", "mar", "folha"];
    const tribos = ["Asa do Céu", "Asa de Ossos", "Asa do Gelo", "Asa da Noite", "Asa do Mar", "Asa de Folha", "Asa de Areia", "Asa de Lama"];
    const nomesPrefixos = ["Vortex", "Sombra", "Garganta", "Chama", "Cranio", "Glaciar", "Abismo", "Espinho", "Marea", "Silvano", "Trovão", "Bruma", "Obsidiana", "Esqueleto"];
    const nomesSufixos = ["Infernal", "Ancestral", "Eterno", "Devorador", "Gélido", "Maldito", "Luminoso", "Selvagem", "Noturno", "da Agonia"];

    const list = [...primaryDragons];

    for (let i = list.length + 1; i <= 200; i++) {
        const tipoSort = tipos[i % tipos.length];
        const triboSort = tribos[i % tribos.length];
        const nomeGerado = `${nomesPrefixos[i % nomesPrefixos.length]} ${nomesSufixos[i % nomesSufixos.length]} #${i}`;

        list.push({
            id: `dragon_${i}`,
            nome: nomeGerado,
            tipo: tipoSort,
            tribo: triboSort,
            imagem: primaryDragons[i % primaryDragons.length].imagem,
            origem: `Origem (Registro #${i}): Eclodiu nos picos distantes durante a Era dos Grandes Feitiços, sob a influência do elemento ${tipoSort.toUpperCase()}.`,
            meio: `História Intermediária: Destacou-se em batalhas territoriais, protegendo os domínios do continente de intrusos e monstros arcanos.`,
            fim: `Conclusão da Lenda: Entrou para o compêndio dos 200 Soberanos e seu legado permanece registrado nos manuscritos do Santuário.`,
            habilidades: `Manipulação do tipo ${tipoSort.toUpperCase()}, Voo de Alta Velocidade, Resistência Elemental`
        });
    }

    return list;
}

const dragonsData = generate200Dragons();