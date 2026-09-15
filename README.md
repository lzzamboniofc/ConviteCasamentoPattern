# Convite de Casamento — Editorial Template V5

Template HTML/CSS/JavaScript pensado para venda recorrente, com prioridade real para **mobile-first** e uma linguagem visual mais autoral/editorial. A V5 mantém a arquitetura reutilizável das versões anteriores, mas abandona a estética de tema pronto: menos cards, menos caixas, mais tipografia, fotografia, linhas, respiro e composições assimétricas.

## 1. Onde editar quase tudo

Abra:

`js/config.js`

Para um novo casal, normalmente você altera esse arquivo e substitui as imagens.

## 2. Temas

No início de `window.WEDDING_CONFIG`:

```js
themePreset: "olive",
heroFontPreset: "formalClassic", // abertura + primeira tela
fontPreset: "fashion",           // restante do site
```

Temas disponíveis:

- `olive` — natural/editorial;
- `champagne` — clássico e sofisticado;
- `blush` — romântico suave;
- `terracotta` — quente/contemporâneo;
- `midnight` — frio e elegante.

Exemplo:

```js
themePreset: "champagne",
```

Para alterar somente uma cor sem criar outro tema:

```js
theme: {
  accent: "#6C735A",
  accentWarm: "#B7906C"
},
```

## 3. Fontes

A V5 separa a tipografia da abertura/hero da tipografia do restante do convite:

```js
heroFontPreset: "formalClassic",
fontPreset: "fashion",
```

Entre os presets disponíveis estão Bodoni Moda, Cormorant Garamond, Playfair Display, Poppins, Roboto, EB Garamond, Cinzel, Great Vibes, Allura, Parisienne, Cormorant Infant, Marcellus, Prata, Italiana, Pinyon Script, Mrs Saint Delafield, MonteCarlo, Italianno, Imperial Script, Tangerine, Petit Formal Script, Monsieur La Doulaise, Alex Brush, Rochester e New Icon Script (opcional/licenciada).

As fontes do Google já estão carregadas no HTML. `New Icon Script` não acompanha o projeto; veja `assets/fonts/LEIA-ME.txt`.

## 4. Base editorial do design

- abertura tipográfica em vez de envelope;
- hero fotográfico assimétrico, com nomes em escala editorial;
- numeração/folio como elemento de composição;
- locais e horários em linhas editoriais, sem cards flutuantes;
- programação em linha do tempo;
- galeria como faixa fotográfica com `scroll-snap` no celular e composição irregular no desktop;
- informações aos convidados em lista pautada, não em cartões;
- seção de presentes com composição dramática e links de grande formato;
- RSVP com campos em linha, sem caixas arredondadas;
- lista de presentes com aparência de catálogo/editorial, não de loja virtual;
- praticamente nenhum arredondamento decorativo fora de controles funcionais.

## 5. Mobile-first

O CSS base foi projetado para celular. O arquivo `css/responsive.css` serve apenas para **expandir** o layout:

```css
@media (min-width: 561px) { ... }
@media (min-width: 821px) { ... }
@media (min-width: 1100px) { ... }
```

Cuidados incluídos:

- `100dvh` / `100svh`;
- `safe-area-inset-*`;
- inputs com 16px para evitar zoom automático do iOS;
- alvos de toque adequados;
- navegação por bottom sheet;
- galeria com `scroll-snap` no celular;
- layout do RSVP em uma coluna no celular;
- parallax apenas a partir de desktop;
- `prefers-reduced-motion`.

## 6. Dados do casamento

Em `js/config.js` ficam:

- nomes e iniciais;
- data, horário e cidade;
- abertura;
- hero;
- história;
- cerimônia e recepção;
- programação;
- galeria;
- dress code;
- informações aos convidados;
- presentes;
- FAQ;
- RSVP;
- compartilhamento;
- música opcional.

## 7. Fotos

Use `assets/images/`.

Principais imagens:

- `hero.svg` — capa;
- `story.svg` — história;
- `date-break.svg` — destaque da data;
- `dress-code.svg` — dress code;
- `rsvp.svg` — RSVP;
- `gallery-1.svg` a `gallery-6.svg` — galeria.

Em produção, prefira `.webp` otimizado. Se mudar nome ou extensão, atualize o caminho em `js/config.js`.

## 8. Navegação rápida

Depois de rolar a página aparecem:

- **Seções** — abre a navegação rápida;
- **↑** — volta ao topo.

No celular a navegação abre como bottom sheet; em telas maiores vira painel central.

## 9. RSVP

Modos disponíveis:

```js
mode: "demo"
```

ou:

```js
mode: "whatsapp",
whatsappNumber: "5511999999999"
```

ou:

```js
mode: "form",
formAction: "https://formspree.io/f/SEU_ID"
```

## 10. Convite personalizado

Exemplo:

`https://seusite.com/?convidado=Família%20Silva`

O nome aparece na abertura e é preservado ao entrar na lista de presentes.

## 11. Música

Coloque o arquivo em:

`assets/audio/musica.mp3`

E habilite no `config.js`:

```js
music: {
  enabled: true,
  file: "assets/audio/musica.mp3"
}
```

## 12. Lista de presentes

Arquivos:

```text
presentes.html
css/presents.css
js/gifts-config.js
js/gifts-page.js
assets/images/gifts/
assets/images/qr/
```

Os 15 itens e valores de demonstração ficam em `js/gifts-config.js`.

Exemplo:

```js
{
  id: "jantar-a-dois",
  title: "Jantar romântico a dois",
  category: "experiencias",
  price: 219,
  description: "Texto do presente.",
  image: "assets/images/gifts/jantar-a-dois.svg",
  qrImage: "assets/images/qr/jantar-a-dois.png"
}
```

### QR / PIX

Os QR Codes atuais são **demonstrativos** e não realizam pagamento. Para produção, substitua `qrImage` pelo QR PIX correto. O código também aceita `pixCode` para ativar o botão de copiar o PIX quando `payment.mode` for `"real"`.

### Lua de mel

`presentes.html#lua-de-mel` abre a página filtrada nas cotas de viagem. As cotas são simbólicas: diária, jantar, passeio, upgrade etc.

## 13. Estrutura

```text
convite-editorial-template-v4/
├── index.html
├── presentes.html
├── README.md
├── css/
│   ├── theme.css
│   ├── styles.css
│   ├── responsive.css
│   └── presents.css
├── js/
│   ├── config.js
│   ├── main.js
│   ├── gifts-config.js
│   └── gifts-page.js
└── assets/
    ├── audio/
    └── images/
```

## 14. Fluxo para cada cliente

1. Duplique a pasta.
2. Escolha `themePreset` e `fontPreset`.
3. Troque nomes, datas, textos e locais no `config.js`.
4. Substitua as fotos.
5. Edite a lista de presentes, se contratada.
6. Configure RSVP/PIX.
7. Teste primeiro entre 360 e 430 px.
8. Depois confira 768 px e desktop.
9. Publique.

Os dados atuais são fictícios e devem ser substituídos antes de um projeto real.


## Tipografia separada: abertura/hero x restante do site

A V5 permite escolher uma fonte exclusiva para a abertura e a primeira tela sem alterar o restante do convite.

Em `js/config.js`:

```js
themePreset: "olive",
heroFontPreset: "formalClassic", // abertura + hero
fontPreset: "fashion",           // restante do site + presentes
```

Exemplos interessantes:

```js
heroFontPreset: "pinyonClassic",
fontPreset: "editorial",
```

```js
heroFontPreset: "saint",
fontPreset: "fashion",
```

```js
heroFontPreset: "newIcon",
fontPreset: "classic",
```

### Presets disponíveis

`fashion`, `editorial`, `romantic`, `classic`, `modern`, `poppins`, `roboto`, `clean`, `timeless`, `luxury`, `royal`, `signature`, `handwritten`, `paris`, `intimate`, `garden`, `refined`, `magazine`, `couture`, `pinyon`, `saint`, `monteCarlo`, `italianno`, `imperial`, `tangerine`, `formalClassic`, `pinyonClassic`, `monsieur`, `alexBrush`, `rochester`, `traditionalWedding` e `newIcon`.

### New Icon Script

New Icon Script é comercial e não acompanha o ZIP. O projeto já possui um `@font-face` preparado em `css/theme.css`. Se houver uma licença webfont, coloque `new-icon-script.woff2` em `assets/fonts/`. Sem esse arquivo, o preset `newIcon` cai automaticamente para `Pinyon Script`.

## Abertura interativa (V6)

A tela inicial agora possui uma abertura diferente por dispositivo:

- **mobile/touch (ate 820px):** o convidado arrasta o controle para a direita; a foto do hero e revelada progressivamente a partir do centro;
- **tablet/desktop:** permanece o clique em `Abrir convite`, mas com a mesma transicao fotografica;
- os nomes e dados continuam vindo normalmente do `config.js` e nao foram alterados pela implementacao.

Configuracao:

```js
opening: {
  // ...
  mobileDragLabel: "Deslize para abrir",
  dragToOpenOnMobile: true,
  dragThreshold: 0.68
}
```

`dragThreshold` define quanto do gesto precisa ser concluido antes de a abertura terminar automaticamente. Ex.: `0.68` = 68%.


## Navegação flutuante e cores sobre fotos

Nesta versão, o menu tradicional e o painel de “Seções” foram substituídos por uma navegação flutuante compacta. Ela fica oculta enquanto o hero está em destaque e aparece automaticamente após a primeira tela. No celular são exibidos somente os ícones; a partir de 821px aparecem ícones + rótulos.

A antiga faixa animada (`marquee`) com data, cidade e nomes foi removida.

As cores de tipografia sobre fotografias agora ficam centralizadas em `js/config.js`:

```js
photoText: {
  opening: { text: "var(--white)", muted: "rgba(255,255,255,.76)", accent: "var(--accent-warm)" },
  hero: { text: "var(--white)", muted: "rgba(255,255,255,.70)", accent: "var(--accent-warm)" },
  dateBreak: { text: "var(--white)", muted: "rgba(255,255,255,.76)", accent: "var(--accent-warm)" }
}
```

Se uma fotografia for muito clara, por exemplo, você pode definir `text: "#171717"` e ajustar `muted`/`accent` sem alterar CSS. Na abertura, essas cores especiais só passam a valer quando a foto começa a ser revelada; o estado inicial sobre papel continua usando as cores normais do tema.
