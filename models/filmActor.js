'use strict';

module.exports = (sequelize, DataTypes) => {
  let filmActor = sequelize.define('FilmActor', {}, {
    tableName: 'film_actor',
    timestamps: false,
    classMethods: {
      associate: models => {
        filmActor.belongsTo(models.Actor, { foreignKey: { name: 'actor_id', allowNull: false } });
        filmActor.belongsTo(models.Film, { foreignKey: { name: 'film_id', allowNull: false } });
      }
    }
  });

  filmActor.removeAttribute('id');

  return filmActor;
};