<p align="center">
  <a href="https://www.suflex.com.br/" target="blank"><img src="https://www.suflex.com.br/assets/logo-brand.efd0bb40.svg" width="200" alt="Suflex Logo" /></a>
</p>

<p align="center">
  <a href="#rocket-swagger">Swagger</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;
</p>

  <p align="center"><strong>Sua cozinha mais simples e inteligente</strong></p>
<p align="center">Soluções criadas por cozinheiros, nutricionistas e gestores de cozinhas.</p>

<p align="center">
  <img src="https://badgen.net/github/commits/mesquini/suflex-challenge" alt="commits" />
  <img src="https://coveralls.io/repos/github/mesquini/suflex-challenge/badge.svg?branch=master#9" alt="Coverage" />
</p>

## Description

This challenge consists of listing products in alphabetical order and according to expiration data.

## :rocket: Swagger

#### Documentation

```http
  GET /swagger
```

#### Create one customer

```http
  GET /product/due-date?page=1&perPage=10&dueDate=2
```

#### Update one customer

```http
  GET /product/alphabetical?page=1&perPage=10
```

# :information_source: How To Use

## Installation

```bash
# install dependencies
yarn

# run migrations
yarn prisma:dev

# run seed
yarn prisma:seed
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Running the app in Docker

```bash
# docker-compose up
$ yarn docker:up
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

---

Made with ♥ by Victor Mesquini :wave: [Get in touch!](https://www.linkedin.com/in/mesquini/)
