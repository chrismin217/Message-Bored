const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./models');

const PORT = process.env.PORT || 8080;
const app = express();

/*MIDDLEWARE*/
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  return res.sendFile('/index.html', { root : __dirname + '/public'});
});

app.use('/api', routes);

app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server is now listening on ${PORT}`);
});