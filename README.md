<!-- @format -->

# API Customer

Node JS Project.

- API for retrieving and creating Customers
- The endpoints need a token.
- The Database is MYSQL
- There is a basic Authentification, The users are saved in an array app/src/config/config
  <br>
  <br>

# Run The Project - Localy Dev

Backend-Api - Inside the folder /app run:

```bash
$ npm install

$ npm run #
$ npm run dev # In the case you want to make change and see the results
```

<br>
<br>

# Available endpoints - Backend

To be avaible

# Available endpoints - Backend

| Description                                      | Endpoint        | Method |
| ------------------------------------------------ | --------------- | ------ |
| Create a customer                                | `/customer`     | POST   |
| Get a customer by id                             | `/customer/:id` | GET    |
| Sigin to get a Token for authentication          | `/signin`       | POST   |
| Create a user and get a Token for authentication | `/signup/`      | POST   |

<br>
<br>

## `Backend - Handler Erros Cases`

| Method - Route             | Error - Description                               | Error Code | Message sended                 |
| -------------------------- | ------------------------------------------------- | ---------- | ------------------------------ |
| `ROUTE ==== /customer/`    |                                                   |            |                                |
| POST                       | Data format is not correct                        | `400`      | Format is not correct          |
| POST                       | Errow with the database                           | `500`      | Database Error                 |
| GET, DELETE, PUT, PATCH    | Methods not allow in this route                   | `405`      | Method Not Allow In This Route |
| `ROUTE ==== /customer/:id` |                                                   |            |                                |
| GET                        | Data format is not correct, it must be an integer | `400`      | CustomerId must be a number    |
| GET                        | CustomerId Not Found                              | `404`      | Customer Not Found             |
| POST                       | Errow with the database                           | `500`      | Database Error                 |
| POST, DELETE, PUT, PATCH   | This methos is not allow in this route            | `405`      | Method Not Allow In This Route |
|                            |                                                   |            |                                |
| `ROUTE ==== /signin`       |                                                   |            |                                |
| POST                       | The user is not found                             | `404`      | User Not Found                 |
| POST                       | The password is incorrect                         | `400`      | Password Incorrect             |
| POST                       | A problen with the token generation               | `500`      | Internal Error                 |
| GET, DELETE, PUT, PATCH    | This methos is not allow in this route            | `405`      | Method Not Allow In This Route |
|                            |                                                   |            |                                |
| `ROUTE ==== /signup`       |                                                   |            |                                |
| POST                       | The user is already in the database               | `409`      | User Already Exist             |
| POST                       | Problen with the token generation or the database | `500`      | Internal Error                 |
| GET, DELETE, PUT, PATCH    | Methods not allow in this route                   | `405`      | Method Not Allow In This Route |
|                            |                                                   |            |                                |
| `ALL OTHER ROUTES ==== `   | Rutes are not available                           | `405`      | Route not found                |

<br>
<br>

# `Project Structure`

| Folder               | Description                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| config               | Has the config for the database                                               |
| db                   | Db connection to MYSQL and the tables models                                  |
| error                | Has all the mapped errors for the endpoints                                   |
| middleware           | Has the middlewares to handle authentication, errors, logging, validate input |
| router               | All the endpoints and his handlers                                            |
| services/controllers | Have the CRUD for db models that are used in the routes/handlers              |

<br>
<br>

# POST Request for `Create a Customer`

The below example goes into the JSON body of the POST request while creating a movie score.

```json
{
  "FirstName": "Torres",
  "Lastname": "Torres",
  "DateOfBirth": "2021-12-23",
  "Gender": "female"
}
```

```json
{
  "customerId": 2,
  "FirstName": "Torres",
  "Lastname": "Torres",
  "DateOfBirth": "1993-12-01",
  "Gender": "MALE"
}
```

<br>
<br>

# GET Request for `Get a Customer`

Example

```
/customer/2
```

Server's answer

```json
{
  "customerId": 2,
  "FirstName": "Torr",
  "Lastname": "Torres",
  "DateOfBirth": "1993-12-01",
  "Gender": "MALE"
}
```

<br>
<br>

# Naming Convention - Backend

The naming convention in folders, classes, functions, and variables is considered from the assumption that the project grows and it is necessary to opt for names that serve as a guide for developers.
<br>

`Assumption`:
<br>

| Folder        | Folder           | file.js              |
| ------------- | ---------------- | -------------------- |
| `db`          | mysql            | mysqlConnection.js   |
|               | mysql/models     | customer.js          |
|               | mysql/user       | user.js              |
|               |                  |                      |
|               | redis            | redisConnection      |
|               |                  |                      |
| `error`       |                  | apiErros.js          |
|               |                  |                      |
| `middlewares` |                  | authMiddleware.js    |
|               |                  | errorMiddleware.js   |
|               |                  | loggingMiddleware.js |
|               |                  | schemaMiddleware.js  |
|               |                  |                      |
| `router`      | customerRoutes   | customerRoutes.js    |
|               |                  |                      |
|               | userRoutes       | userRoutes.js        |
|               |                  | googleAuth.js        |
|               |                  | emailRoutes.js       |
|               |                  |                      |
| `services`    | customersService | customerService.js   |
|               |                  |                      |
|               | userService      | userService.js       |
|               |                  |                      |

<br>
<br>

# Backend

The structure in the backend has been written to be
`testable, maintainable, and extensible.`

## `Extensible`

The structure in the folder and the naming conventions allow the project to be extensible adding more features, routes in the backend, and components in the frontend, always keeping the logic aside allowing to extend the project in an organized way.

## `Maintainable`

Is maintainable because is separated into small modules that have specific functions that are easier to identify where you wanna do a change or wanna fix something.

## `Testable`

Because the logic is separated, makes it easier to do the unit test. In the backend is important to test the routes and the services of these routes, that have the logic to retrieve or add data to the database.
<br>
