const express = require('express');
const { usersControler } = require('./controllers');
const { errorHandlers, validate } = require('./middleware');

const app = express();

app.use(express.json());

// POST /users body:{users}
// GET /users?page=1&results=5
// GET /users/1
// PATCH /users/1 body:{users}
// DELETE /users/1

app.post('/users', validate.validationOnCreate, usersControler.createUser);
app.get('/users', usersControler.getAllUsers);
app.get('/users/:userId', usersControler.getUserById);
app.patch('/users/:userId', usersControler.updateUserById);
app.delete('/users/:userId', usersControler.deleteUserById);

app.use(errorHandlers.errorHandler);

module.exports = app;
