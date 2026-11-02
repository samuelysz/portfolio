// As experiências do Samuel, do mais novo para o mais antigo.
// Usadas pela linha do tempo (índice) e pelas cartas da faixa.

export const BEHANCE = "https://www.behance.net/samuelysz";

export interface TrabalhoGrafico {
  nome: string;
  frente: { src: string; alt: string; w: number; h: number };
  verso: { src: string; alt: string; w: number; h: number };
}

export interface Experiencia {
  ano: number;
  titulo: string;
  papel: string;
  texto: string;
  etiquetas: string[];
  link?: { href: string; rotulo: string };
  trabalhos?: TrabalhoGrafico[];
}

export const experiencias: Experiencia[] = [
  {
    ano: 2026,
    titulo: "Medware",
    papel: "Analista de Suporte Técnico",
    texto:
      "Atuação na instalação, configuração e manutenção de sistemas, com foco em bancos de dados Firebird e SQL. Realização de consultas e ajustes em bases de dados, backups, restaurações, migrações e unificações de bancos. Suporte a servidores, estações de trabalho, redes e permissões de usuários, além de diagnóstico e resolução de problemas técnicos.",
    etiquetas: ["Firebird", "SQL", "Bancos de dados", "Servidores", "Redes", "Suporte técnico"],
    link: { href: "https://www.medware.com.br/", rotulo: "Ver site da Medware" },
  },
  {
    ano: 2025,
    titulo: "S Design",
    papel: "Freelancer",
    texto:
      "Pratiquei habilidades de ilustrações e design de capas para álbuns e singles de artistas, e demais ilustrações por demanda.",
    etiquetas: ["Photoshop", "Illustrator", "UX/UI Design"],
    link: { href: BEHANCE, rotulo: "Ver trabalhos no Behance" },
    trabalhos: [
      {
        nome: "Holy co.",
        frente: { src: "./img/holy-co.png", alt: "Identidade visual Holy co.: logotipo em serifa branca sobre foto em preto e branco de mãos", w: 1049, h: 830 },
        verso: { src: "./img/holy-co-2.png", alt: "Aplicação da marca Holy co.: camiseta preta com a palavra HOLY em branco", w: 930, h: 721 },
      },
      {
        nome: "Over Fire",
        frente: { src: "./img/over-fire.png", alt: "Key visual Over Fire: lettering creme em fundo laranja", w: 1047, h: 819 },
        verso: { src: "./img/over-fire-2.png", alt: "Pôsteres do Culto Over Fire: sábado 16h00 na 70X7 Church", w: 931, h: 715 },
      },
    ],
  },
  {
    ano: 2024,
    titulo: "Bikcraft",
    papel: "Desenvolvedor",
    texto:
      "Projeto desenvolvido para colocar em prática o desenvolvimento web utilizando habilidades de front-end e UX e UI Design.",
    etiquetas: ["HTML", "CSS", "JavaScript", "UX/UI Design"],
  },
  {
    ano: 2022,
    titulo: "Change & Change",
    papel: "Voluntário",
    texto:
      "Projeto desenvolvido durante meu curso de front-end na faculdade, utilizando habilidades de HTML, CSS e JavaScript.",
    etiquetas: ["HTML", "CSS", "JavaScript", "UX/UI Design"],
  },
];
