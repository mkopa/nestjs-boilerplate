<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://nestjs.com) & [React](https://react.dev) **To Do List** app with Node 18+, docker-compose,  Postgres, TypeORM and Joi

### Endpoints:

#### GET - get all todos
```
localhost:3000/tasks
```
#### POST - create new todo
```
localhost:3000/tasks

BODY json payload example:
{
    "content": "some todo"
}
```
#### PATCH - set the existing "todo" as done
```
localhost:3000/tasks/:id

BODY json payload example:
{
    "done": true
}
```
#### DELETE - remove todo
```
localhost:3000/tasks/:id
```

## Installation

```bash
$ cp .env.dist .env
$ cp docker-compose.override.dist docker-compose.override
$ npm install
```

`
Used docker-compose version: 1.29.2, Nodejs: 18.17.1
`

## Running the app

```bash
# start db
$ docker-compose up -d postgres

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# create a docker backend-service image and run the app
$ docker-compose up
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
