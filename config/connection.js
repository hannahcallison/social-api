const { connect, connection } = require('mongoose');

connect('mongodb://localhost/social-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;