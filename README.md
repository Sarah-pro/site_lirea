# Lírea Design — portfólio

Projeto inicial em React + TypeScript + Vite, com React Router, Tailwind CSS, Framer Motion, Embla Carousel e Lucide Icons.

## Como executar no VS Code
1. Instale o Node.js LTS: https://nodejs.org/
2. Extraia a pasta `lirea-design` e abra-a no VS Code (`Arquivo > Abrir Pasta`).
3. Abra `Terminal > Novo Terminal`.
4. Execute `npm install`.
5. Execute `npm run dev` e abra o endereço local exibido no terminal.
6. Antes de publicar, rode `npm run build` para verificar o build.

## Onde trocar as imagens
Todas as imagens locais ficam em `public/images/`. Os nomes abaixo são os caminhos já usados no código. Substitua os arquivos pelos seus JPG/PNG/WebP mantendo o nome, ou altere o caminho correspondente nos arquivos `src/pages/Pages.tsx` e `src/data/projects.ts`.

- `lirios-hero.jpg` — fotografia de lírios no hero da home.
- `banner-lirios-1.jpg`, `banner-lirios-2.jpg`, `banner-lirios-3.jpg` — slides dos banners vinho.
- `sarah-retrato.jpg` — retrato para a página Sobre mim.
- `lirios-portfolio.jpg` — imagem da faixa rosa no portfólio.
- `projeto-beleza-periferica.jpg` e `projeto-beleza-periferica-2.jpg`
- `projeto-alem-do-muro.jpg` e `projeto-alem-do-muro-2.jpg`
- `projeto-ux.jpg` e `projeto-ux-2.jpg`
- `projeto-carrossel.jpg` e `projeto-carrossel-2.jpg`
- `projeto-flyer.jpg` e `projeto-flyer-2.jpg`

Enquanto esses arquivos não existirem, as áreas de imagem mostram fundos/ornamentos de reserva. Use imagens otimizadas (WebP recomendado), dimensões adequadas ao layout e texto alternativo descritivo.

## Conteúdo editável
- `src/data/services.ts`: serviços, descrições, entregas e etapas.
- `src/data/projects.ts`: projetos, categorias, ano, cliente, ferramentas, capa e galeria.
- `src/components/Layout.tsx`: cabeçalho, menu mobile e rodapé; troque os links sociais pelos perfis reais.
- `src/pages/Pages.tsx`: textos e composição das páginas.
- `src/styles.css`: identidade visual, responsividade e animações.

## Embed do Figma
Em `src/pages/Pages.tsx`, procure `COLE_AQUI_O_LINK_DO_FIGMA` e substitua pelo URL de embed fornecido pelo Figma. O protótipo deve permitir incorporação nas configurações de compartilhamento.

## Formulário de contato
O formulário valida os campos no navegador, mas ainda não envia e-mail nem armazena mensagens. Para produção, conecte-o a um backend/API ou a um serviço de formulários e implemente tratamento de sucesso/erro.

## Antes de publicar
- Substitua imagens e links sociais.
- Configure o link de WhatsApp com o número profissional correto.
- Configure o embed do Figma.
- Conecte o formulário a um backend.
- Defina domínio, analytics e metadados sociais (Open Graph).
- Revise os textos de cada projeto e confirme permissões para publicar as imagens..