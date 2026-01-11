# Twitter Image Generator

Aplicação web para criar imagens estilizadas otimizadas para Twitter/X (1200x675px).

![Twitter Image Generator](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🎨 Recursos

- **3 Temas Visuais**: Scrapbook, Quadro Negro e Quadro Branco
- **Múltiplos Textos**: Adicione e edite vários blocos de texto
- **30 Doodles**: 10 doodles únicos desenhados à mão por tema
- **Upload de Fotos**: Adicione fotos com efeitos de fita adesiva
- **Edição Interativa**: Arraste, rotacione e redimensione todos elementos
- **Export em Alta Qualidade**: PNG 2400x1350px (2x resolução)
- **Totalmente Responsivo**: Funciona em desktop e mobile

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` no seu navegador
3. Pronto! Não precisa de servidor

### Opção 2: Hospedar Online
Deploy gratuito em:
- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

Basta fazer upload dos arquivos e estará no ar!

## 📖 Guia Rápido

### Adicionar Texto
1. Clique em **"Adicionar Texto"** para criar novos blocos
2. **Duplo-clique** no texto para editar diretamente
3. Escolha fonte e cor nos controles

### Adicionar Doodles
- Clique em **"Adicionar Doodle"** para adicionar decorações aleatórias
- Cada tema tem 10 doodles únicos

### Adicionar Fotos
1. Clique em **"Adicionar Foto"**
2. Selecione uma imagem (max 10MB)
3. A foto será redimensionada automaticamente

### Editar Elementos
- **Mover**: Arraste com o mouse
- **Rotacionar**: Use os controles de rotação
- **Redimensionar**: Arraste os cantos
- **Deletar**: Selecione e pressione `Delete` ou `Backspace`

### Exportar
- Clique em **"Download PNG"** para baixar em 2400x1350px
- Imagem otimizada para qualidade no Twitter/X

## ⌨️ Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| `Delete` | Deletar elemento selecionado |
| `Backspace` | Deletar elemento selecionado |
| `Duplo-clique` | Editar texto |

## 🛠️ Tecnologias

- **Fabric.js 5.3.0** - Manipulação de canvas
- **Google Fonts** - Tipografia handwritten
- **SVG inline** - Doodles e decorações
- **Vanilla JavaScript** - Sem frameworks pesados

## 📁 Estrutura de Arquivos

```
ScrapBook/
├── index.html              # Estrutura HTML principal
├── css/
│   └── styles.css         # Estilos e layout responsivo
├── js/
│   ├── app.js            # Lógica principal da aplicação
│   ├── canvas-manager.js # Gerenciamento do canvas Fabric.js
│   ├── style-themes.js   # Temas e assets SVG
│   └── export-manager.js # Exportação de PNG
└── README.md             # Este arquivo
```

## 🎯 Dimensões das Imagens

- **Canvas**: 1200 x 675px (16:9)
- **Export**: 2400 x 1350px (2x para qualidade)
- **Otimizado para**: Twitter/X, Instagram, Facebook

## 🌟 Recursos Avançados

### Temas Disponíveis

**📔 Scrapbook**
- Fundo bege/amarelo claro
- Doodles coloridos estilo hand-drawn
- Fitas adesivas vintage
- Fontes: Caveat, Pacifico, Dancing Script

**🖊️ Quadro Negro**
- Fundo escuro tipo lousa
- Doodles brancos estilo giz
- Efeito de glow no texto
- Fontes: Permanent Marker, Indie Flower, Patrick Hand

**✏️ Quadro Branco**
- Fundo branco/cinza claro
- Doodles coloridos estilo marcador
- Fitas brancas/coloridas
- Fontes: Architects Daughter, Kalam, Shadows Into Light

## 💡 Dicas de Uso

- Textos curtos (<30 caracteres) ficam maiores automaticamente
- Use múltiplos blocos de texto para layouts criativos
- Combine doodles e fotos para designs únicos
- Exporte sempre em 2x resolução para melhor qualidade

## 🐛 Solução de Problemas

**Fonte não carrega?**
- Verifique sua conexão com a internet (Google Fonts via CDN)
- Aguarde o carregamento completo da página

**Imagem não exporta?**
- Certifique-se que há elementos no canvas
- Tente um navegador diferente (Chrome/Firefox recomendados)

**Layout quebrado em mobile?**
- A aplicação é responsiva, mas funciona melhor em desktop para criação

## 📄 Licença

MIT License - Sinta-se livre para usar e modificar!

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novos recursos
- Adicionar novos temas
- Criar novos doodles

## 📧 Contato

Criado com 💜 para criadores de conteúdo

---

**Compatível com**: Twitter/X, Instagram, Facebook e outras redes sociais
