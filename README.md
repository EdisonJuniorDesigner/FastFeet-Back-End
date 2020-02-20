<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://github.com/Rocketseat/bootcamp-gostack-desafio-03/blob/master/.github/logo.png" width="300px" />
</h1>

---

Esse desafio faz parte do Desafio Final, que é uma aplicação completa (Back-end, Front-end e Mobile) que é avaliada para emissão do Certificado do Bootcamp GoStack.

---

# Clonar este projeto

```
$ git clone https://github.com/RennanD/fastfeet.git
```

### Postgres com DOCKER: 🐋

```
$ docker run --name some-postgres -e POSTGRES_PASSWORD=secretpassword -d postgres
```

#### Se você ja tem um container com Postgres, rode:

```
$ docker start "CONTAINER DOCKER ID"
```

### Redis com DOCKER: 🐋

```
$ docker run --name some-redis -d redis
```

#### Se você ja tem um container com Rerdis, rode:

```
$ docker start "CONTAINER DOCKER ID"
```

### Terminal:

```
$ yarn

$ yarn sequelize db:create

$ yarn sequelize db:migrate

$ yarn sequelize db:seed:all

$ yarn dev
```

### Ferramentas utilizadas na aplicação:

- [Node.js](https://github.com/nodejs)
- [Express](https://github.com/expressjs/express)
- [Sequelize](https://github.com/sequelize/sequelize) - ORM para conversação com o banco de dados
- [Yup](https://github.com/jquense/yup) - Schema validator(Validação de dadsos de entrada)
- [JWT](https://www.npmjs.com/package/jsonwebtoken) - JSON WEB TOKEN - Lib para autenticação via token.
- [Bcryptjs](https://www.npmjs.com/package/bcrypt) - Usado na criptografia de senhas.
- [DotEnv](https://github.com/motdotla/dotenv) - Para lidar com variáveis ambiente.
- [Nodemailer](https://github.com/nodemailer/nodemailer) - Lib para envio de emails com Node.js.
- [Handlebars](https://handlebarsjs.com/) - Template Engine para criar template dos emails.
- [Bee-Queue](https://github.com/bee-queue/bee-queue) - Lib para lidar com filas em background.(Ex: envio de emails)
- [Date-fns](https://github.com/date-fns/date-fns) - Lib completa para manipulação de datas no JavaScript.

- [Sentry](https://sentry.io/) - Para tratamento de exceções e controle de erros em produção.
- [Youch](https://github.com/poppinss/youch) - Tratamento de erros em desenvolvimento.

### Bancos de dados da aplicação
- [Postgres](https://github.com/postgres/postgres)
- [Redis](https://redis.io/)

### Ferramentas utilizadas no ambiente de desenvolvimento:
- [Sucrase](https://sucrase.io/) - Para utilizar várias funções do ES6 (ECMAScript 6)
- [ESLint](https://github.com/eslint/eslint) - Lint para identificar erros envolvendo padronização de códigos
- [Prettier](https://github.com/prettier/prettier) - Deixa o código muito mais bonito
- [Husky](https://github.com/typicode/husky) 🐶
- [Lint-Staged](https://github.com/okonet/lint-staged)


---

Feito por [Edison Junior](https://www.linkedin.com/in/edison-junior-438003187/)

---
