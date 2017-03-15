'use strict';
let express = require('express');
let app = express();
let models = require('./models');
const PORT = process.env.PORT || 80;
process.on('uncaughtException', console.error);

let allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-Response-Time');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
};

app.use(allowCrossDomain);
app.use(require('response-time')());
app.get('/', (req, res) => res.send('Welcome to the pg-search-sequelize exapmle! Go ahead and search for films by firing your requests at /film/{your query}'));
app.get('/film/:query', (req, res) => models.FilmMaterializedView.searchByText(req.params.query).then(data => res.send(data)));
app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(500).send('Well that\'s embarrassing, we tried so hard to understand you, but we just couldn\'t. Please head back to the home page and give us a second chance!');
});

app.listen(PORT, () => console.log('app server started on port ' + PORT));
