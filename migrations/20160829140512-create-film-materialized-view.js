'use strict';
let QueryInterface = require('pg-search-sequelize').QueryInterface;
let models = require('../models');
module.exports = {
  up: queryInterface => new QueryInterface(queryInterface).createMaterializedView('film_materialized_view', models.Film, {
    title: 'A',
    description: 'B',
    release_year: 'C',
    length: 'C'
  }, {
    include: [
      {
        model: models.FilmActor,
        foreignKey: 'film_id',
        targetKey: 'film_id',
        associationType: 'hasMany',
        include: {
          model: models.Actor,
          foreignKey: 'actor_id',
          targetKey: 'actor_id',
          associationType: 'belongsTo',
          attributes: {
            name: 'B'
          }
        }
      }
    ]
  }),

  down: queryInterface => new QueryInterface(queryInterface).dropMaterializedView('film_materialized_view')
};