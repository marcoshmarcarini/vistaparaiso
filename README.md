# Vista Paraiso

Hotsite criado para a captação de Leads para o empreendimento Vista Paraiso.

### Instalação
$ npm init

$ npm install next react react-dom

#### Altere o arquivo package json

Caso queira, pode alterar as dependências, tudo de acordo com a necessidade do programador. 

Insira a linha de código abaixo para utilização do Next JS.

    "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
    }

#### Crie a pasta pages e o arquivo index.js

Você pode começar a utilizar o site com o seguinte código:

    function HomePage() {
    return <div>Welcome to Next.js!</div>
    }

    export default HomePage

Para uma melhor estrutura do código, cria uma pasta ./public/ - onde ficarão as imagens, o favicon do site, entre outros arquivos de domínio público, além disso é necessário criar um arquivo _app.js e colocar o seguinte código para importar o css global:

    import '../styles.css'

    // This default export is required in a new `pages/_app.js` file.
    export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
    }

#### Iniciando aplicação

Para iniciar a aplicação, basta rodar o comando:

$ npm run dev

Ele será carregado no endereço https://localhost:3000



##### Criador
Marcos Henrique Marcarini Junior
Agência Conteudo


