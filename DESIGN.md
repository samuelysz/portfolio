---
name: Samuel Souza — Portfólio
description: Portfólio de página única de um desenvolvedor front-end, UX/UI e designer gráfico, lido como uma linha de sinal.
colors:
  sinal: "#2a47b8"
  sinal-forte: "#1f3790"
  sinal-claro: "#8aa2ff"
  papel: "#f1f0ec"
  papel-escuro: "#e6e4de"
  tinta: "#141414"
  grade: "#d9d7d0"
  filete: "#c9c7bf"
  anotacao: "#6d6b65"
  anotacao-clara: "#9a988f"
  texto-corrido: "#3c3a36"
  texto-sobre-tinta: "#b3b1aa"
  marca-marinho: "#040d32"
typography:
  display:
    fontFamily: "Fira Sans, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 4.86cqw, 4.375rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Fira Sans, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  contato:
    fontFamily: "Fira Sans, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 2.4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  numeral:
    fontFamily: "Fira Sans, Arial, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  lead:
    fontFamily: "Fira Sans, Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.45
  title:
    fontFamily: "Fira Sans, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Fira Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Fira Sans, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.2em"
rounded:
  etiqueta: "3px"
  miniatura: "4px"
  link: "6px"
  carta: "12px"
  pilula: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  margem: "64px"
  coluna: "100px"
  secao: "120px"
components:
  botao-sinal:
    backgroundColor: "{colors.sinal}"
    textColor: "{colors.papel}"
    typography: "{typography.title}"
    rounded: "{rounded.pilula}"
    padding: "0 28px"
    height: "56px"
  botao-sinal-hover:
    backgroundColor: "{colors.sinal-forte}"
  nav-link:
    textColor: "{colors.tinta}"
    rounded: "{rounded.link}"
    padding: "0 14px"
    height: "44px"
  nav-link-ativo:
    textColor: "{colors.sinal}"
  etiqueta:
    textColor: "{colors.texto-corrido}"
    rounded: "{rounded.etiqueta}"
    padding: "3px 9px"
  miniatura-trabalho:
    backgroundColor: "{colors.papel-escuro}"
    rounded: "{rounded.miniatura}"
  secao-contato:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.papel}"
---

# Design System: Samuel Souza — Portfólio

## Overview

**Creative North Star: "Forma de Onda"**

O portfólio é lido como um sinal num papel técnico. Uma única linha azul entra pela esquerda da primeira tela, sobe no personagem 3D, marca os três ofícios (Front-end, UX/UI, Design Gráfico) como picos anotados e termina no botão "Entre em contato". O mesmo sinal reaparece em cada seção: vira linha do tempo dos projetos, mede as horas reais dos cursos e fecha como a "saída" no contato. O conceito vem do "Painel de Instrumentos" (mesa de som, sintetizador), traduzido como **linguagem gráfica de instrumento**: graticulado, traço de sinal, anotações, escalas. Nunca como desenho do equipamento.

A superfície é clara e precisa: papel técnico frio-quente, tinta quase preta, cinzas de anotação e **um só acento**, o azul de sinal. A tipografia é uma família só, a Fira Sans: o display em caixa-alta peso 700 dá a voz, e os rótulos pequenos e espaçados fazem o papel das legendas de um gráfico. O movimento é a própria linha se desenhando, nunca efeito espalhado.

Rejeitado de forma explícita pelo usuário: equipamentos desenhados (carretéis, knobs, faders, teclas), porque ficavam "cartunescos". O instrumento está na grafia, não na ilustração.

**Key Characteristics:**
- Uma linha de sinal azul, contínua por seção, é o elemento que conduz a leitura.
- Fundo de papel técnico com graticulado horizontal fino na introdução.
- Fira Sans: display em caixa-alta 700, rótulos de anotação em caixa-alta espaçada.
- Um só acento (azul de sinal); a seção de contato é a única invertida, em tinta.
- Picos só carregam dados quando os dados existem (horas dos cursos); senão marcam apenas posição no tempo.

## Colors

Papel, tinta e cinzas de anotação, com um único azul reservado ao sinal e às ações.

### Primary
- **Azul de Sinal** (`sinal`): a linha de sinal, os pontos dos picos, o botão "Entre em contato", links de texto e o item ativo do menu.
- **Sinal Forte** (`sinal-forte`): hover do botão e dos links azuis.
- **Sinal Claro** (`sinal-claro`): a versão do sinal sobre a tinta, na seção de contato (linha, sublinhado e foco).

### Neutral
- **Papel** (`papel`): fundo da página inteira. **Papel Escuro** (`papel-escuro`): fundo das miniaturas enquanto carregam.
- **Tinta** (`tinta`): texto principal, título display e fundo da seção de contato.
- **Grade** (`grade`): graticulado da introdução, filete do cabeçalho. **Filete** (`filete`): bordas de etiquetas, miniaturas e divisórias das anotações.
- **Anotação** (`anotacao`): rótulos, papéis (cargo), complementos. **Anotação Clara** (`anotacao-clara`): só linhas guia tracejadas, nunca texto.
- **Texto Corrido** (`texto-corrido`): parágrafos e etiquetas. **Texto sobre Tinta** (`texto-sobre-tinta`): texto secundário no contato.
- **Marca Marinho** (`marca-marinho`): exclusivo do monograma "S" (`img/marca.svg`).

### Named Rules
**The Um Sinal Rule.** Existe uma só cor de acento, o azul de sinal, e ela pertence à linha, aos pontos e às ações. Nada decorativo é azul.

**The Contato Invertido Rule.** Só a seção de contato fica em tinta escura; ali o sinal passa a `sinal-claro`. Nenhuma outra seção inverte.

## Typography

**Display Font:** Fira Sans (com Arial, sans-serif)
**Body Font:** Fira Sans (com Arial, sans-serif)

**Character:** Uma família humanista em três pesos (400, 600, 700). O display em caixa-alta pesada dá a assinatura; os rótulos pequenos e espaçados leem como legendas de instrumento; os números (anos, horas) usam algarismos tabulares.

### Hierarchy
- **Display** (`typography.display`): o título da introdução, em caixa-alta, escalando com o palco (unidade `cqw`). No celular: clamp(2.25rem, 10vw, 3.5rem).
- **Headline** (`typography.headline`): títulos das seções (Experiência, Formação, Contato), em caixa-alta, à esquerda, sobre um filete de tinta.
- **Contato** (`typography.contato`): e-mail, telefone, Instagram e Behance, grandes e clicáveis.
- **Numeral** (`typography.numeral`): anos da linha do tempo e horas dos cursos (1.75rem nos cursos).
- **Lead** (`typography.lead`): texto de abertura de cada seção, até 44ch.
- **Title** (`typography.title`): nome do projeto ou do curso/idioma.
- **Body** (`typography.body`): descrição dos projetos, até 38ch.
- **Label** (`typography.label`): legendas do gráfico, eixo "Entrada · Sinal · Saída" e título "Cursos Intensivos".

### Named Rules
**The Sem Sobretítulo Rule.** Nenhum rótulo pequeno acima de um título. O complemento vai na linha de baixo ("Bacharel · IESB", "Idioma · Intermediário").

**The Uma Família Rule.** Só Fira Sans, pesos 400, 600 e 700, sempre com Arial como reserva.

## Layout

- **Container:** largura máxima de 1440px, margem lateral de 64px (24px abaixo de 900px).
- **Introdução:** um palco na proporção 1440 × 820 (`aspect-ratio`) com `container-type: inline-size`; personagem, onda, picos, notas, título e botão são posicionados em porcentagem do palco e as fontes escalam em `cqw`, então a composição se mantém em qualquer largura de desktop. A onda é um SVG `preserveAspectRatio="none"` com traço `vector-effect: non-scaling-stroke`.
- **Seções:** cabeçalho em grade `1fr 2fr` (título | texto) sobre um filete de tinta; 120px acima de cada seção.
- **Experiência:** três colunas sem divisórias sobre um SVG de sinal contínuo; o HTML vem do mais novo para o mais antigo e o desktop usa `row-reverse` para ler 2024 → 2026 da esquerda para a direita.
- **Formação:** grade `1fr 2fr` (anotações fixas | gráfico). No gráfico, eixo fixo a 220px, hastes com altura `220px × horas / 40`, rótulos abaixo do eixo numa linha de base comum.
- **Contato:** duas colunas (título e texto | lista), precedidas por uma faixa de sinal de ponta a ponta.
- **Abaixo de 900px:** tudo empilha. A onda da introdução vira uma faixa sobre a base do personagem, com um pico sobre cada ofício. A linha do tempo vira uma linha vertical azul na margem esquerda, e o gráfico dos cursos vira barras horizontais proporcionais.
- **Pontos de quebra:** 900px e 600px.

## Elevation & Depth

Totalmente plano: não há `box-shadow` de elevação. Os pontos do sinal usam um anel na cor do papel (`box-shadow: 0 0 0 4–5px papel`) só para se destacar da linha que cruzam; no hover, um halo azul translúcido acende o pico. O cabeçalho fixo usa papel a 90% com desfoque de 10px para continuar legível sobre o conteúdo. O personagem é um recorte com fundo transparente (`img/personagem1-recorte.png`), colocado à frente da linha de sinal: a onda passa por trás do pescoço. Uma máscara de degradê dissolve só a base da camiseta, sem moldura.

### Named Rules
**The Sem Moldura Rule.** O personagem nunca fica em cartão, círculo ou caixa; ele se dissolve no papel.

## Shapes

Formas de instrumento de medição: linhas, pontos e filetes. Cantos quase retos (3–4px) nas etiquetas e miniaturas; pílula só no botão de ação; nenhum cartão como estrutura de página. O gesto recorrente é a curva suave do sinal (Bézier), sempre um traço de 2–3px que não escala com o SVG.

## Components

### Botão de Sinal
*A única ação principal, onde a linha termina.*
- **Shape:** pílula, 56px de altura.
- **Padrão:** fundo `sinal`, texto papel, ponto branco de 9px antes do rótulo.
- **Hover / Clique / Foco:** fundo `sinal-forte`; compressão a 96%; contorno azul de 2px afastado 3px.

### Navegação
- Texto em tinta, alvo de 44px. Um traço azul de 2px cresce da esquerda sob o link no hover e fica fixo no item da seção visível (`aria-current`), que também vira azul e peso 600. No celular, o nome "Samuel Souza" some e fica só o monograma.

### Picos anotados (Signature)
- Os picos ficam fora do rosto, para não serem escondidos pelo personagem. Ponto azul de 12–14px com anel de papel, linha guia tracejada em `anotacao-clara` e nota com o nome do ofício em peso 600. O pico de Design Gráfico leva o link "Ver no Behance" com uma seta desenhada em SVG.

### Linha do tempo
- Ano em numeral tabular, ponto no pico, título, papel em `anotacao`, descrição e etiquetas. Os três picos têm formato idêntico, porque marcam posição no tempo e não medida. No hover de um projeto, o ponto cresce 1.5× com halo e o ano fica azul.

### Etiquetas
- Filete de 1px `filete`, cantos de 3px, texto `texto-corrido` de 0.875rem, sem fundo.

### Miniaturas de trabalho
- Grade de duas colunas, proporção 5:4, filete de 1px e cantos de 4px. Cada miniatura é um cartão de duas faces: a frente mostra a peça principal e o verso, a aplicação (camiseta, pôsteres). No hover ou foco, o cartão gira 180° em 3D (0.7s, perspectiva de 900px), o filete fica azul e a legenda também. Com movimento reduzido, o verso aparece por troca de opacidade. Cada miniatura leva ao Behance.

### Gráfico dos cursos (Signature)
- Eixo azul de 2px, haste azul de 2px por curso com altura proporcional às horas, ponto no topo, horas em numeral e nome abaixo do eixo. A legenda "Altura proporcional às horas de cada curso" declara a escala.

### Contato
- Seção em tinta. Faixa de sinal em `sinal-claro`. Itens de 76px de altura entre filetes escuros. No hover ou foco, o texto fica `sinal-claro` e um sublinhado de 2px se desenha da esquerda.

### Painel em profundidade (Signature, só no hero)
O hero é uma cena 3D (`perspective: 1600px`) em quatro planos: o graticulado atrás (-90px), a onda com os picos e as notas no plano zero (no mesmo plano, para os pontos ficarem exatamente sobre a linha), o personagem à frente (+16px) e o título e o botão mais à frente (+22px). Em repouso, as profundidades são pequenas, para o layout parado ficar idêntico ao plano.
- **Mouse (desktop com mouse):** o painel inclina no máximo 5° na horizontal e 3,5° na vertical, com amortecimento (8% por quadro), e acompanha o cursor pela janela inteira (cantos da tela e cabeçalho incluídos); só volta ao centro quando o mouse sai da janela ou o hero sai da tela. Roda num laço de `requestAnimationFrame` que para quando o movimento acaba.
- **Rolagem (passagem para a Experiência):** no desktop o hero fica preso na tela por cerca de 110vh de rolagem (`position: sticky` + `view-timeline: --hero`, faixa `contain`). Uma única animação (`@keyframes painel`) move três propriedades registradas: `--explosao` (o painel se abre em planos e tomba até 6°), `--some` (personagem, título, notas e graticulado se recolhem) e `--achata` (a onda se acalma até virar uma linha reta, e os três pontos descem dos picos até ela). Por fim, `--alinha` leva os pontos às colunas exatas dos anos da linha do tempo (1/6, 1/2, 5/6) e a linha se estende à largura toda; `--chega` revela o quadro final (`.onda_passagem`, aria-hidden): rótulo “Trajetória · 3 projetos”, “2024 — 2026” em display e ano + projeto sob cada ponto. Quando o hero se solta, a linha do tempo real continua o mesmo desenho. O trecho preso dura 130vh. A inclinação do mouse se desfaz durante a sequência. No celular a sequência é mais simples (`@keyframes painel-movel`): o hero empilhado fica preso (altura medida por JS em `--altura-palco-movel`), o conteúdo se recolhe (`--some`) e entra o quadro final (`--chega`) no formato da linha do tempo vertical da Experiência: linha azul à esquerda, 2026 → 2024. Sem suporte ou com movimento reduzido: sem prender e sem sequência.
- **Celular:** sem 3D; só um parallax leve no personagem durante a rolagem.
- **Fallbacks:** sem suporte a `animation-timeline`, o hero fica estático; com movimento reduzido, não há inclinação nem explosão.
- **Detalhes técnicos:** o palco usa `overflow: clip` (e não `hidden`), para não virar um contêiner de rolagem que travaria a linha do tempo, e o personagem tem `clip-path: inset(0 0 3px 0)` contra um fio de borda da camada 3D.

### Leituras de instrumento (detalhes)
- **Copiar e-mail:** botão discreto ao lado do e-mail, em caixa-alta espaçada com filete escuro. Ao copiar, ele vira um bloco `sinal-claro` com "Copiado" por 2,2s, e o leitor de tela anuncia a confirmação. O botão só aparece onde a área de transferência existe.
- **Relógio do DF:** o eixo da introdução mostra "Sinal: Samuel Souza · DF hh:mm" no horário de Brasília, atualizado a cada minuto. Sem JavaScript, mostra só o nome.
- **Medidor de leitura:** o filete inferior do cabeçalho cresce em azul conforme a rolagem (`animation-timeline: scroll()`); nos navegadores sem suporte, nada aparece.
- **Foco no gráfico:** com mouse, o curso apontado fica em opacidade total e acende o ponto; os outros recuam para 40%.

### Movimento
- **Easings:** `cubic-bezier(0.16, 1, 0.3, 1)` para feedback e `cubic-bezier(0.22, 1, 0.36, 1)` para entradas.
- **Entrada da introdução:** o personagem surge (1.4s), a onda se desenha da esquerda para a direita por `clip-path` (1.8s), os três picos acendem em sequência, e o título e o botão sobem por último.
- **Ao rolar:** os blocos sobem 14px com fade (0.9s, uma vez só). As linhas de sinal das seções se desenham por `clip-path` e as hastes dos cursos crescem do eixo.
- **Títulos de seção:** sobem de uma linha de base (máscara `clip-path` + 24px, 1s).
- **Linha do tempo:** os pontos dos anos acendem da esquerda para a direita (0.45s, 0.85s, 1.25s), acompanhando o traço que se desenha.
- **Hover:** picos do hero e da linha do tempo acendem (1.5× com halo azul translúcido); miniaturas do Behance giram como cartões e mostram o verso.
- **Botão de sinal:** no hover ou foco, o ponto branco emite um único pulso (anel que cresce e some em 0.9s); clique comprime a 96%.
- **Movimento reduzido:** só opacidade; linhas e hastes aparecem inteiras.

## Do's and Don'ts

### Do:
- **Do** fazer cada seção nova conversar com a linha de sinal (entrar, medir ou terminar nela).
- **Do** usar o azul de sinal só para a linha, os pontos e as ações.
- **Do** dar altura ou amplitude a um pico só quando ela representa um número real, e declarar a escala numa legenda.
- **Do** colocar complementos na linha abaixo do título, nunca acima.
- **Do** manter alvos de toque de pelo menos 44px e foco visível azul (azul claro sobre a tinta).
- **Do** usar algarismos tabulares em anos, horas e qualquer número comparável.

### Don't:
- **Don't** desenhar equipamentos (knobs, faders, carretéis, teclas); o instrumento está na grafia, não na ilustração.
- **Don't** introduzir uma segunda cor de acento ou um segundo azul decorativo.
- **Don't** usar sombras de elevação, cartões como estrutura da página ou cartões iguais em fileira.
- **Don't** pôr rótulos pequenos acima de títulos.
- **Don't** colocar o personagem dentro de moldura, círculo ou caixa.
- **Don't** usar glifos de fonte como ícones; setas e marcas são desenhadas em SVG.
