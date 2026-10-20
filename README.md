# Space Burger

Presença digital da Space Burger: uma hamburgueria urbana com uma identidade visual inspirada em preto profundo, amarelo quente, vermelho e elementos espaciais sutis. A aplicação é uma página única responsiva, feita em React, TypeScript e Vite.

## Executar localmente

1. Instale Node.js (versão LTS atual) e npm.
2. Na pasta do projeto, execute `npm install`.
3. Inicie o modo de desenvolvimento com `npm run dev`.
4. Gere os arquivos de produção com `npm run build` ou confira o lint com `npm run lint`.

## Estrutura

- `src/App.tsx` contém as seções, navegação e interações principais.
- `src/data/menu.ts` define os itens e preços editáveis do cardápio.
- `src/data/contact.ts` concentra endereço, horários, telefone, mapa e redes sociais.
- `src/styles/global.css` reúne design system, estilos responsivos e animações.
- `images/` contém as referências originais do logo e da fachada. Mantenha-as no projeto.
- `public/resources/` contém cópias usadas pelo site publicado.

As imagens de cardápio e do hero são servidas pelo Unsplash. O logo e a imagem de fachada também estão no diretório `images/`.

## Dados da loja

Atualize `src/data/contact.ts` com endereço, horário, telefone, link de rota e perfis oficiais antes de publicar. Esses campos são deliberadamente configuráveis; enquanto estiverem vazios, o botão de rota fica desativado. Ajuste preços, descrições e ingredientes no arquivo do cardápio conforme a operação da loja.

O formulário valida os campos e mostra uma confirmação local, sem transmitir mensagens. O carrinho permite editar itens e demonstra a finalização sem processar pagamento ou coletar dados bancários. Ele não persiste após fechar ou recarregar a página.

Copyright © D7 Studio and João Macedo.
