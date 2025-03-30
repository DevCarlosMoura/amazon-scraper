# Amazon Scraper - Backend

Bem-vindo ao projeto **Amazon Scraper**! Este projeto permite buscar produtos da Amazon com base em palavras-chave. Ele utiliza **Node.js**, **Express**, **Axios** e **JSDOM** para fazer scraping da Amazon e retornar informações sobre os produtos.

## Tecnologias Usadas

- **Node.js**: Para rodar o servidor.
- **Express**: Framework para criar o servidor e as rotas.
- **Axios**: Para fazer requisições HTTP e buscar os dados da Amazon.
- **JSDOM**: Para parsear e manipular o HTML da página da Amazon.
- **CORS**: Para permitir que o frontend acesse o backend.

### Como Rodar o Backend

#### 1. Clonar o Repositório

Primeiro, clone o repositório do projeto na sua máquina local:

```bash
git clone https://github.com/DevCarlosMoura/amazon-scraper.git
cd amazon-scraper-backend

####2. Instalar as Dependências
Dentro da pasta do projeto, execute o comando abaixo para instalar as dependências necessárias:
npm install

3. Rodar o Servidor
Após a instalação das dependências, você pode rodar o servidor localmente com o comando:
npm start
Ou, se você estiver usando o nodemon (recomendado para desenvolvimento), pode usar:
npm run dev
Isso iniciará o servidor na URL http://localhost:3000.

###Como Funciona
O servidor é um simples API REST com uma rota para buscar produtos. Aqui está a explicação do fluxo de trabalho:

1.O front-end chama a rota /api/scrape, passando um parâmetro de consulta chamado keyword (palavra-chave do produto que deseja buscar na Amazon).
2.O backend usa Axios para fazer uma requisição HTTP para a Amazon com a palavra-chave fornecida.
3.A resposta HTML da Amazon é processada com JSDOM para extrair informações dos produtos listados.
4.O backend retorna essas informações para o front-end em formato JSON, que inclui o título do produto, avaliação, número de avaliações e a imagem do produto.

## Exemplo de Requisição
GET http://localhost:3000/api/scrape?keyword=smartphone
A resposta será algo como:
{
  "products": [
    {
      "title": "Smartphone XYZ",
      "rating": "4.5 out of 5 stars",
      "reviews": "1000 reviews",
      "image": "http://linkdaimagem.com/imagem.jpg"
    },
    {
      "title": "Smartphone ABC",
      "rating": "4.2 out of 5 stars",
      "reviews": "500 reviews",
      "image": "http://linkdaimagem.com/imagem.jpg"
    }
  ]
}

**Rota de Erro**
Se não encontrar produtos ou se ocorrer algum erro durante a requisição, o backend retornará um erro no formato:
{
  "error": "No products found for this keyword"
}
Ou se ocorrer um erro no servidor, será retornado:
{
  "error": "Failed to scrape Amazon"
}

Bloco de Citação
Este projeto foi criado como um estudo de caso para aprender mais sobre scraping.

______________________________________________________________________________________________
Tabela de Comandos
______________________________________________________________________________________________
Comando	Descrição
----------------------------------------------------------------------------------------------
npm install	Instala as dependências
----------------------------------------------------------------------------------------------
npm start	Inicia o servidor
----------------------------------------------------------------------------------------------
npm run dev	Inicia o servidor com nodemon para desenvolvimento
______________________________________________________________________________________________

Possíveis Melhorias

.Melhorar a Resiliência: Implementar retries em caso de falha de conexão ou erros temporários na Amazon.
.Armazenar Dados em Banco de Dados: Em vez de buscar os produtos toda vez que o usuário fizer uma pesquisa, podemos armazenar as informações em um banco de dados para otimizar a performance.
.Limitar Resultados: Implementar uma limitação de produtos retornados para evitar sobrecarga de dados.

**Erro Comum**
Erro 404 - Nenhum Produto Encontrado
Caso você receba o seguinte erro no frontend:

{
  "error": "No products found for this keyword"
}

Isso significa que não encontramos produtos para a palavra-chave fornecida. Tente outra palavra-chave ou verifique a conexão com o servidor.

Contribuindo
Se você deseja contribuir para o projeto, siga os seguintes passos:

Fork o repositório.

Crie uma nova branch para a feature ou correção que deseja implementar.

Faça as alterações e crie um Pull Request com as modificações.

Após revisão, suas contribuições serão mescladas ao repositório principal.

Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
