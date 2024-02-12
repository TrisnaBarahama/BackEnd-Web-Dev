const express = require('express');
const morgan = require('morgan');
const membersRouter = require('./members');
const usersRouter = require('./users');

const app = express();

// Middleware untuk logging menggunakan Morgan
app.use(morgan('dev'));

// Route untuk home page
app.get('/', (req, res) => {
  res.send('This is the home page');
});

// Route untuk about page
app.get('/about', (req, res) => {
  const response = {
    Status: 'success',
    Message: 'response success',
    Description: 'Exercise #03',
    Date: new Date().toISOString(),
    Data: membersRouter.getMembers()
  };
  res.json(response);
});

// Route untuk users page
app.get('/users', (req, res) => {
  const usersData = require('./users').getUsers();
  res.json(usersData);
});

// Use routes
app.use('/members', membersRouter.router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
