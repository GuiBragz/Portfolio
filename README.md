# Guilherme Braga — portfólio redesenhado

Redesign completo inspirado em uma linha visual **clean/editorial**, com fundo claro, azul sóbrio, tipografia forte e seções fluidas, sem numeração de tópicos e sem bolinhas ou elementos flutuantes pulsantes.

## Como executar

Abra `index.html` diretamente no navegador. Não precisa instalar Node.js, dependências, servidor ou fazer build.

O site funciona em hospedagens de páginas estáticas como **Vercel** e **GitHub Pages**. Para publicar na Vercel, envie o conteúdo da pasta do projeto com `index.html` na raiz. Se o repositório já possui configurações antigas de Express, ajuste ou remova-as para publicar como site estático.

## Organização

- `index.html`: estrutura e conteúdo do site.
- `styles.css`: estilos e responsividade.
- `script.js`: textos em português/inglês, projetos e interações.
- `assets/perfil.png`: foto recuperada do projeto ZIP original.
- `assets/favicon.svg`: favicon da nova identidade.
- `assets/cv-gui-braga.pdf`: currículo recuperado do ZIP original. **Revise antes de publicar**, pois pode estar desatualizado.
- `cartao/`: cartão de visitas com QR Code real apontando para `https://guibraga.com.br/`, além de arquivos de produção e visualização.

## Projetos e links

Links públicos conhecidos foram cadastrados no arquivo `script.js`: Nexcan, Zentry, landing page da Vayallen e repositório do Nexcan. Os projetos sem URL verificada não recebem links inventados. O conteúdo da janela de detalhes de cada projeto pode ser editado no objeto `projects`.

As artes dos cards são **ilustrações conceituais feitas em HTML/CSS**, não imagens reais das interfaces. Se quiser inserir screenshots verdadeiras posteriormente, substitua cada `<div class="project-art ...">` por uma imagem apropriada.

## Notas importantes

- O currículo original foi apenas preservado; não foi editado nem validado para as experiências mais recentes.
- A descrição das experiências foi baseada no HTML que você forneceu. Revise cargos e datas antes de publicar.
- A amostra visual no card do Nivro contém um valor **ilustrativo**, que não é uma informação financeira real.
- A implementação é estática, sem backend e sem coleta de dados. O envio de e-mail usa o aplicativo de e-mail do usuário.
- O cartão usa um QR Code gerado localmente e não depende de serviço de terceiros para redirecionamento.

## Impressão do cartão

O PDF com sangria tem duas páginas: **frente** e **verso**. O tamanho de corte é **90 × 50 mm** com **3 mm de sangria de cada lado**, totalizando **96 × 56 mm**. Solicite impressão frente e verso e confira a orientação com a gráfica. A versão sem sangria pode ser usada apenas quando a gráfica a aceitar.

Cor impressa: o PDF está em RGB; converta para CMYK com o perfil da gráfica antes de fazer tiragem profissional se a gráfica exigir. Faça prova do QR antes de produzir em quantidade.
