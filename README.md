<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://nestjs.com) & [React](https://react.dev) **To Do List** app with Node 18+, docker-compose,  Postgres, TypeORM and Joi

### Endpoints:

#### GET - get all todos
```
localhost:3000/todo
```
#### POST - create new todo
```
localhost:3000/todo

BODY json payload example:
{
    "todo": "some todo"
}
```
#### PATCH - set the existing "todo" as done
```
localhost:3000/todo

BODY json payload example:
{
    "id": 1,
    "isDone": true
}
```
#### DELETE - remove todo
```
localhost:3000/todo/:id
```

## Installation

```bash
$ cp .env.dist .env
$ cp docker-compose.override.dist docker-compose.override
$ npm install
```

## Running the app

```bash
# start db
$ docker-compose up -d

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

[MIT licensed](LICENSE).
