# 🎨 Twitter Image Generator

Aplicação web para criar imagens estilizadas otimizadas para Twitter/X com três temas visuais diferentes: Scrapbook, Quadro Negro e Quadro Branco.

## ✨ Funcionalidades

- **3 Temas Visuais**: Scrapbook, Quadro Negro (Chalkboard) e Quadro Branco (Whiteboard)
- **Editor de Texto**: Adicione seu texto com fontes handwritten personalizadas
- **Doodles Decorativos**: Adicione elementos gráficos temáticos
- **Upload de Fotos**: Adicione imagens com efeito de fita adesiva
- **Export de Alta Qualidade**: PNG 2400x1350px (2x resolução)
- **Totalmente Cliente**: Sem necessidade de backend ou servidor
- **Responsivo**: Funciona em desktop, tablet e mobile

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** em um navegador moderno (Chrome, Firefox, Edge ou Safari)

2. **Escolha um tema**: Clique em um dos botões de tema no topo (Scrapbook, Quadro Negro ou Quadro Branco)

3. **Digite seu texto**: Use a área de texto para escrever sua mensagem (até 200 caracteres)

4. **Personalize**:
   - Escolha uma fonte no dropdown
   - Selecione uma cor no color picker
   - Adicione doodles decorativos clicando em "Adicionar Doodle"
   - Adicione fotos clicando em "Adicionar Foto"

5. **Manipule elementos**:
   - Arraste doodles e fotos para reposicionar
   - Rotacione usando as alças de rotação
   - Redimensione arrastando os cantos

6. **Exporte**: Clique em "Download PNG" para baixar sua imagem em alta qualidade (2400x1350px)

## 📁 Estrutura do Projeto

```
ScrapBook/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos responsivos
├── js/
│   ├── app.js             # Lógica principal
│   ├── canvas-manager.js  # Gerenciamento do canvas
│   ├── style-themes.js    # Configurações de temas e SVGs
│   └── export-manager.js  # Exportação de imagens
└── README.md              # Este arquivo
```

## 🎨 Temas Disponíveis

### 📔 Scrapbook
- Fundo bege/amarelo claro com textura
- Fontes: Caveat, Pacifico, Dancing Script
- Doodles coloridos: corações, estrelas, flores, setas, redemoinhos
- Fitas adesivas vintage e washi tape

### 🖊️ Quadro Negro (Chalkboard)
- Fundo escuro verde/preto
- Fontes: Permanent Marker, Indie Flower, Patrick Hand
- Texto branco com efeito glow
- Doodles estilo giz: corações, estrelas, checks, sublinhados

### ✏️ Quadro Branco (Whiteboard)
- Fundo branco/cinza claro
- Fontes: Architects Daughter, Kalam, Shadows Into Light
- Texto preto/colorido estilo marcador
- Doodles bold: círculos, setas, estrelas, checks

## 💡 Dicas de Uso

- **Textos curtos** (<30 caracteres) ficam em fonte maior (80px)
- **Textos médios** (30-60 caracteres) ficam em 60px
- **Textos longos** (>60 caracteres) ficam em fonte menor (40-45px)
- Doodles são posicionados aleatoriamente evitando sobreposição com o texto
- Fotos são automaticamente redimensionadas para max 400px (mantém proporção)
- A imagem exportada tem o dobro da resolução (2400x1350px) para melhor qualidade

## 🛠️ Tecnologias Utilizadas

- **HTML5 + CSS3**: Estrutura e estilização
- **JavaScript (ES6+)**: Lógica da aplicação
- **Fabric.js 5.3.0**: Manipulação de canvas e objetos
- **Google Fonts**: 9 fontes handwritten
- **SVG**: Doodles e fitas (inline base64)

## 📱 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Limitações Conhecidas

- Upload de fotos limitado a 10MB
- Máximo de 200 caracteres para o texto
- Requer conexão com internet para carregar Google Fonts e Fabric.js (via CDN)

## 🔧 Customização

### Adicionar Novos Temas

Edite `js/style-themes.js` e adicione um novo objeto ao `THEMES`:

```javascript
newtheme: {
    name: 'Novo Tema',
    background: 'linear-gradient(...)',
    fonts: ['Font1', 'Font2', 'Font3'],
    textColors: ['#color1', '#color2'],
    defaultTextColor: '#color1',
    doodleKeys: ['doodle1', 'doodle2'],
    tapeKeys: ['tape1'],
    useTape: true,
    textShadow: { /* ... */ }
}
```

### Adicionar Novos Doodles

Crie novos SVGs no objeto `SVG_ASSETS` em `js/style-themes.js`:

```javascript
SVG_ASSETS.scrapbook.newdoodle = 'data:image/svg+xml;base64,' + btoa(`
    <svg><!-- seu SVG aqui --></svg>
`);
```

## 🤝 Contribuindo

Este é um projeto de código aberto. Sinta-se livre para:
- Reportar bugs
- Sugerir melhorias
- Adicionar novos temas
- Criar novos doodles

## 📄 Licença

Projeto criado para uso livre. Use, modifique e distribua como desejar.

## 🎯 Uso Recomendado

Ideal para:
- Posts no Twitter/X
- Stories do Instagram
- Posts no Facebook
- LinkedIn
- Qualquer rede social que aceite imagens 16:9

**Dimensão otimizada**: 1200x675px (visualização) → 2400x1350px (export)

---

Feito com 💜 para criadores de conteúdo
