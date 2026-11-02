# Portfólio — Samuel Souza

Site estático (HTML + CSS + um pouco de JavaScript puro, sem dependências nem build).

## Estrutura

```
.
├── index.html          ← arquivo principal (página única)
├── favicon.svg
├── css/
│   ├── style.css       ← folha principal (importa os módulos abaixo, na ordem)
│   ├── global.css      ← reset, tipografia base, .container, .subtitulo
│   ├── header.css      ← cabeçalho / menu
│   ├── introducao.css  ← introdução (onda de sinal, picos, personagem)
│   ├── experiencia.css ← seção Experiência
│   ├── formacao.css    ← seção Formação
│   ├── footer.css      ← rodapé / contato
│   ├── animacoes.css   ← animações e microinterações
│   └── style.min.css   ← versão minificada (produção) – gerada a partir dos módulos
├── js/
│   └── animacoes.js    ← revela o conteúdo ao rolar e destaca o menu
└── img/
    ├── marca.svg                 ← monograma "S" (cabeçalho)
    ├── personagem1-recorte.png   ← personagem com fundo transparente (introdução)
    ├── personagem1.png           ← original do personagem (fonte do recorte)
    ├── holy-co.png, over-fire.png ← trabalhos de design gráfico (cartão S Design)
    └── demais arquivos           ← assets antigos, não usados pelo site
```

## Rodar localmente

Abra a pasta no Antigravity e use uma destas opções:

- Extensão **Live Server** → botão "Go Live" (abre `index.html`)
- `npx serve .` ou `python -m http.server 5500`

Também funciona abrindo `index.html` direto no navegador.

## Desenvolvimento

- Edite os arquivos em `css/*.css`; o `index.html` usa `css/style.css`, então as mudanças aparecem na hora.
- Para publicar, você pode gerar o minificado e trocar o link para `./css/style.min.css`, por exemplo:
  `npx lightningcss-cli --minify --bundle css/style.css -o css/style.min.css`
