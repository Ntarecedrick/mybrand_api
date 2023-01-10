# My Brand Api
REST API


[![Coverage Status](https://coveralls.io/repos/github/Ntarecedrick/mybrand_api/badge.svg?branch=dev)](https://coveralls.io/github/Ntarecedrick/mybrand_api?branch=dev)

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Ntarecedrick/mybrand_api/tree/dev.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/Ntarecedrick/mybrand_api/tree/dev)

[![CircleCI](https://dl.circleci.com/insights-snapshot/gh/Ntarecedrick/mybrand_api/dev/test-deploy/badge.svg?window=30d)](https://app.circleci.com/insights/github/Ntarecedrick/mybrand_api/workflows/test-deploy/overview?branch=dev&reporting-window=last-30-days&insights-snapshot=true)



#### My Brand BackEnd Server App & DataBase Connection

#### My Brand UI Template Is Hosted [here](https://github.com/Ntarecedrick/mybrand_api) On Github-Pages.

#### My Brand API Endpoints Are Hosted On [Cyclic.sh](https://calm-red-hippopotamus-yoke.cyclic.app/).

## Available API Endpoints

| HTTP Request | Endpoint                | Description                    |
| :----------- | :------------------     | :----------------------------- |
| GET          | /api-docs               | Link To The Documentation      |
| POST         | /user/register          | User Create An Account         |
| POST         | /user/login             | User Logs In                   |
| GET          | /api/messages           | Admin Gets All Queries         |
| POST         | /api/messages           | User Creates Query             |
| DELETE       | /api/messages/:id       | Admin Deletes Query            |
| GET          | /api/blogs              | User Gets All Blogs            |
| GET          | /api/blogs/:id          | User Gets Single Blog          |
| GET          | /api/blogs/:id/comments | User Gets All Comments On Blog |
| POST         | /api/blogs              | Admin Creates Blog             |
| POST         | /api/blogs/:id/comments | User Comments On Blog          |
| POST         | /api/blogs/:id/likes    | User Likes Or Unlikes Blog     |
| PUT          | /api/blogs/:id          | Admin Updates Blog             |
| DELETE       | /api/blogs/:id          | Admin Deletes Blog             |

## To Install The App

```sh
$ git clone https://github.com/Ntarecedrick/mybrand_api
$ cd mybrand_api
$ npm install
```

## To Run The App

```sh
$ npm start
```

## To Run The Test

```sh
$ npm run test
```

## Technologies Used For The App

#### Built With

- [Nodejs](https://www.nodejs.org)
- [Expressjs](https://www.expressjs.com)

#### Unit Tested With

- [Jest](https://jestjs.io/) And [Supertest](https://www.npmjs.com/package/supertest)

#### Continuous Integration And Test Coverage

- [CircleCi](https://www.circleci.com) For The CI
- [Coveralls](https://www.coveralls.io) For The Test Coverage

## Author:

#### Ntare Cedrick