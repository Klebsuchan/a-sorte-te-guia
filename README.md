# Sorte Na Bet - Landing Page 🎰

![Sorte Na Bet Preview](./public/logocassino.png)

Uma landing page moderna, de alta conversão e responsiva criada para a **Sorte Na Bet**. O objetivo principal desta página é atrair novos usuários com uma oferta agressiva de +300% de bônus no primeiro depósito e converter acessos em cadastros através do link de indicação, além de oferecer materiais bônus (como um e-book exclusivo).

## 🚀 Funcionalidades

- **Design de Alta Conversão:** Estrutura focada em CTAs (Call to Action) e conversão imediata.
- **Hero Section com Vídeo:** Fundo em vídeo de alta qualidade para engajar o usuário logo no primeiro acesso.
- **SEO Otimizado:** Meta tags e Open Graph configurados na raiz do projeto para excelente indexação e compartilhamento em redes sociais.
- **Botão Flutuante do WhatsApp:** Facilitando o suporte e a solicitação de resgate de bônus diretamente com a equipe.
- **Animações Fluidas:** Utilização do `framer-motion` para transições suaves, fade-ins e animações de scroll.
- **Totalmente Responsivo:** Experiência perfeita em dispositivos móveis, tablets e desktops (Mobile-First).
- **Seção de E-book (Upsell):** Pronta para oferecer produtos digitais (atualmente oculta para lançamento futuro).

## 🛠 Tecnologias Utilizadas

Este projeto foi construído utilizando as ferramentas mais modernas do ecossistema front-end:

- **[React 18](https://react.dev/)**: Biblioteca JavaScript para construção da interface.
- **[Vite](https://vitejs.dev/)**: Bundler ultra-rápido para desenvolvimento moderno.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utilitário para estilização rápida e escalável.
- **[Motion (Framer Motion)](https://motion.dev/)**: Biblioteca robusta para animações declarativas.
- **[Lucide React](https://lucide.dev/)**: Ícones elegantes e consistentes.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para um código mais seguro e manutenível.

## 📦 Estrutura do Projeto

```text
├── public/                # Assets estáticos (imagens, vídeos, PDFs, favicon)
├── src/
│   ├── components/        # Componentes reutilizáveis (ex: EbookCheckoutModal)
│   ├── App.tsx            # Componente principal / Landing Page Completa
│   ├── index.css          # Estilos globais e injeção do Tailwind
│   └── main.tsx           # Ponto de entrada do React
├── index.html             # Template HTML principal (com SEO)
├── package.json           # Dependências e scripts do projeto
├── vercel.json            # Configurações de deploy para a Vercel
└── vite.config.ts         # Configuração do Vite
```

## ⚙️ Como Executar o Projeto Localmente

1. **Clone o repositório** (se aplicável) ou baixe os arquivos fonte:
   ```bash
   git clone https://github.com/seu-usuario/sortenabet.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd sortenabet
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   *O aplicativo será executado em `http://localhost:3000` (ou outra porta definida pelo Vite).*

5. **Gere a build de produção:**
   ```bash
   npm run build
   ```

## 🌐 Deploy na Vercel

Este projeto já está pré-configurado para ser hospedado na **Vercel** perfeitamente.

1. Crie uma conta na [Vercel](https://vercel.com/).
2. Faça o upload ou conecte seu repositório GitHub (New Project -> Import Git Repository).
3. A Vercel detectará automaticamente que é um projeto **Vite/React**.
4. O arquivo `vercel.json` garante que os *rewrites* de rotas funcionem corretamente.
5. Clique em **Deploy**.

## 📄 Notas Adicionais

- O arquivo do e-book bônus (`gestao-emocional.pdf`) está configurado na pasta `public/` para download direto via tag `<a>` com atributo `download`.
- O link de afiliado principal do cassino pode ser atualizado na constante `REF_LINK` no topo do arquivo `src/App.tsx`.
- Para exibir a aba de upsell do E-book no futuro, basta remover a classe `hidden` da seção `#comprar-ebook` no arquivo `src/App.tsx`.

---
Desenvolvido com 💚 para multiplicar os seus resultados.
