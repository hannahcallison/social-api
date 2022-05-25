const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialApi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;