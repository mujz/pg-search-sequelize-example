'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define('FilmMaterializedView', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'film_id'},
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  releaseYear: DataTypes.INTEGER,
  rating: DataTypes.STRING,
  document: DataTypes.TEXT
}, {
  tableName: 'film_materialized_view',
  referenceModel: 'Film',
  timestamps: false,
  search: true,
  defaultScope: {
    attributes: {
      exclude: ['id']
    }
  }
});
