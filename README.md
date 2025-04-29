# Amazon Scraper - Back-end

Este é o back-end do projeto **Amazon Scraper**, responsável por fazer o scraping dos produtos da Amazon com base na palavra-chave fornecida pelo usuário. O back-end é desenvolvido em **Node.js** utilizando a biblioteca **Axios** para realizar as requisições HTTP e **Cheerio** para manipulação do HTML.

## Funcionalidades

- Recebe uma palavra-chave via API.
- Realiza o scraping da Amazon e retorna os produtos relacionados à palavra-chave.
- Fornece os detalhes dos produtos como título, avaliação, número de avaliações e imagem.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **Cheerio**: Biblioteca para análise e manipulação de HTML (usada para fazer o scraping da Amazon).
- **Express.js**: Framework para criação de servidores HTTP.
- **Cors**: Middleware para permitir requisições entre diferentes origens (CORS).

## Pré-requisitos

Antes de começar, você precisará ter o **Node.js** e o **npm** instalados. Caso ainda não tenha, você pode instalá-los em [nodejs.org](https://nodejs.org/).

## Como Rodar o Back-end Localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/DevCarlosMoura/amazon-scraper.git
2. Acesse a pasta do back-end:
cd amazon-scraper/amazon-scraper-backend

3.Instale as dependências:
npm install

4.Inicie o servidor:
npm start
O servidor estará disponível em http://localhost:3000.

### Como Funciona
O back-end utiliza a rota /api/scrape para processar as requisições de busca de produtos. Quando um usuário envia uma palavra-chave através do front-end, o back-end faz o scraping da Amazon, busca os produtos relacionados e retorna as informações de cada produto.

### Endpoint da API
URL: http://localhost:3000/api/scrape?keyword={keyword}

Método: GET

Keyword: A palavra-chave para pesquisar os produtos na Amazon.

Exemplo de resposta:
{
  "products": [
    {
      "title": "Product Title",
      "rating": "4.5",
      "reviews": "1000",
      "image": "https://linktoimage.com",
      "description": "Product description here"
    },
    // mais produtos
  ]
}

### Estrutura de Arquivos
.server.js: Arquivo principal onde o servidor Express está configurado e as rotas são definidas.

.scraper.js: Contém a lógica para fazer o scraping da Amazon utilizando Axios e Cheerio.

.package.json: Arquivo de configuração do npm com as dependências do projeto.

### Personalização
Se você deseja personalizar o projeto, pode modificar os seguintes arquivos:

.scraper.js: Ajuste a lógica de scraping se necessário. Lembre-se de que scraping de sites pode ser instável dependendo das alterações no layout da página da Amazon.
.server.js: Modifique a configuração do servidor Express ou adicione mais rotas conforme necessário.

### Contribuições
Contribuições são bem-vindas! Caso queira melhorar este projeto, siga as etapas abaixo:

1.Faça um fork deste repositório.

2.Crie uma branch para a sua modificação (git checkout -b feature/nome-da-feature).

3.Faça as modificações e envie um pull request.

## Licença
Este projeto está sob a licença MIT - veja o arquivo LICENSE para mais detalhes.





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

## Como Funciona
O front-end se conecta ao back-end em Node.js (que deve estar rodando em http://localhost:3000). Ao realizar uma busca, o front-end envia a palavra-chave para o back-end, que retorna os produtos da Amazon relacionados. Esses produtos são então exibidos na interface.

### Endpoint da API
URL: http://localhost:3000/api/scrape?keyword={keyword}

O front-end envia uma requisição GET para este endpoint passando o parâmetro keyword, que é a palavra-chave que o usuário deseja pesquisar.

### Estrutura de Arquivos
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
