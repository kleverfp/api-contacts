# Api Contacts

Projeto para inserir contatos em diferentes clientes.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- **Node.js:** (Certifique-se de ter uma versão LTS instalada) - [https://nodejs.org/](https://nodejs.org/)
- **npm** ou **yarn:** (Geralmente instalado com o Node.js)
- **Nest CLI:** (Para comandos do NestJS) - Instale globalmente com `npm install -g @nestjs/cli` ou `yarn global add @nestjs/cli`
- **Docker** e **Docker Compose** (Se o seu projeto utilizar um banco de dados em container) - [https://www.docker.com/](https://www.docker.com/)

## Instalação

1.  Clone o repositório:

    ```bash
    git clone https://github.com/kleverfp/api-contacts.git
    cd api-contacts
    ```

2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

## Configuração do Ambiente

Este projeto utiliza variáveis de ambiente para configurações sensíveis e específicas do ambiente.

1.  **Crie um arquivo `.env`** na raiz do projeto.
2.  **Copie o conteúdo do arquivo `.env.example`** para o arquivo `.env`.
3.  **Configure as variáveis de ambiente** no arquivo `.env` de acordo com suas necessidades (por exemplo, informações de banco de dados, chaves de API, etc.).

## migration

Para gerar uma migration rode o comando:

```bash
npx sequelize-cli migration:generate --name migration-name
```

Para rodar as migrations rode o comando:

```bash
npm run db:migrate
```

## Seeder

Para rodar seeders rode o comando:

```bash
npm run db:seed
```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run start:dev
# ou
yarn start:dev
```
