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
