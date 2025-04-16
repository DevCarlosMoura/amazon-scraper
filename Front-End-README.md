# Amazon Scraper - Front-end

Este é o front-end do projeto **Amazon Scraper**, que permite buscar e visualizar produtos da Amazon através de uma API que é alimentada por um **back-end** desenvolvido em **Node.js**. A interface é feita com **HTML**, **CSS** e **JavaScript** puro, utilizando o **Vite** para a criação do projeto.

## Funcionalidades

- Pesquisar produtos na Amazon inserindo palavras-chave.
- Exibir produtos encontrados com título, avaliação, número de avaliações e imagem.
- Visualizar detalhes de um produto ao clicar sobre ele.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da interface.
- **CSS**: Estilização da página, incluindo responsividade.
- **Vanilla JavaScript**: Manipulação de DOM e chamadas à API.
- **Vite**: Ferramenta de construção e servidor de desenvolvimento.

## Pré-requisitos

Antes de começar, você precisará ter o **Node.js** e o **npm** instalados. Caso ainda não tenha, você pode instalá-los em [nodejs.org](https://nodejs.org/).

## Como Rodar o Front-end Localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/DevCarlosMoura/amazon-scraper.git
Acesse a pasta do front-end:
cd amazon-scraper/amazon-scraper-frontend

Instale as dependências:
npm install

Execute o servidor de desenvolvimento:
npm run dev

O Vite irá iniciar o servidor e você verá a mensagem:
VITE v6.2.3  ready in 244 ms
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
Abra o navegador e acesse o link http://localhost:5173.

##Como Funciona
O front-end se conecta ao back-end em Node.js (que deve estar rodando em http://localhost:3000). Ao realizar uma busca, o front-end envia a palavra-chave para o back-end, que retorna os produtos da Amazon relacionados. Esses produtos são então exibidos na interface.

###Endpoint da API
URL: http://localhost:3000/api/scrape?keyword={keyword}

O front-end envia uma requisição GET para este endpoint passando o parâmetro keyword, que é a palavra-chave que o usuário deseja pesquisar.

###Estrutura de Arquivos
index.html: Arquivo principal da página, onde a estrutura do HTML é definida.

style.css: Arquivo CSS responsável pela estilização da página.

main.js: Arquivo JavaScript que contém a lógica para buscar os produtos e exibi-los na página.

#### Personalização
Se você deseja personalizar o projeto, você pode modificar os seguintes arquivos:

style.css: Altere o estilo da página para adequá-la ao seu gosto.

main.js: Modifique a lógica de busca ou como os produtos são exibidos na tela.

#### Contribuições
Contribuições são bem-vindas! Caso queira melhorar este projeto, siga as etapas abaixo:

Faça um fork deste repositório.

Crie uma branch para a sua modificação (git checkout -b feature/nome-da-feature).

Faça as modificações e envie um pull request.

### Licença
Este projeto está sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

markdown
Copiar
Editar

---

### Explicação do **README**:

- **Título**: Identifica o propósito do README — o front-end do projeto Amazon Scraper.
- **Funcionalidades**: Explica o que o front-end faz.
- **Tecnologias Utilizadas**: Lista as principais tecnologias utilizadas para o desenvolvimento do front-end.
- **Pré-requisitos**: Informa o que é necessário para rodar o projeto.
- **Como Rodar Localmente**: Passo a passo de como rodar o projeto localmente.
- **Como Funciona**: Explica o fluxo de como o front-end se comunica com o back-end e como os dados são exibidos.
- **Estrutura de Arquivos**: Descreve a organização do código.
- **Personalização**: Dá dicas sobre como modificar o estilo e o comportamento do código.
- **Contribuições**: Incentiva outras pessoas a contribuírem para o projeto.
- **Licença**: Indica a licença do projeto, caso haja uma (se você ainda não tiver uma licença, pode adicionar a MIT como padrão).

### Como adicionar no repositório:

1. No diretório do seu repositório, crie o arquivo `README.md` (se ainda não existir).
2. Cole o conteúdo do **README** acima no arquivo.
3. Salve o arquivo e faça o commit das alterações:

```bash
git add README.md
git commit -m "Adiciona README do front-end"
git push origin main
