'use strict';

module.exports = (sequelize, DataTypes) => {
  let film = sequelize.define('Film', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'film_id' },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    releaseYear: { type: DataTypes.INTEGER, allowNull: false, field: 'release_year' },
    length: DataTypes.INTEGER,
    rating: DataTypes.STRING,
  }, {
    tableName: 'film',
    timestamps: false,
    customHooks: {
      afterSave: models => models.FilmMaterializedView.refresh()
    },
    classMethods: {
      associate: models => {
        film.belongsToMany(models.Actor, {
          through: models.FilmActor,
          as: 'Actors',
          foreignKey: {
            name: 'film_id',
            allowNull: false
          },
          otherKey: 'actor_id'
        });
        film.hasMany(models.FilmActor, { foreignKey: { name: 'film_id', allowNull: false } });
      }
    }
  });

  return film;
};
