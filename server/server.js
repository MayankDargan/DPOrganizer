/* eslint-disable linebreak-style */
const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config/config');

app.use(cors());

require('./api-routes')(app);

app.listen(config.PORT, function() {
  console.log('Server is listening to 8000 with cors enabled');
});
