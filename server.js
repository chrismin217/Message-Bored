const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./models');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));
app.use(bodyParser({extended : true}));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server is now listening on ${PORT}`);
});