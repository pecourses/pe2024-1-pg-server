const express = require('express');
const { usersControler } = require('./controllers');

const app = express();

app.use(express.json());

// POST /users body:{users}
// GET /users?page=1&results=5
// GET /users/1
// PATCH /users/1 body:{users}
// DELETE /users/1

app.post('/users', usersControler.createUser);
app.get('/users', usersControler.getAllUsers);
app.get('/users/:userId', usersControler.getUserById);
app.patch('/users/:userId', usersControler.updateUserById);
app.delete('/users/:userId', usersControler.deleteUserById);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  const status = err.status ?? 500;
  const message = err.message ?? 'Server Error';

  res.status(status).send(message);
});

module.exports = app;
