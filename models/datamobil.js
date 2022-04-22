'use strict';

module.exports = (sequelize, DataTypes) => {
  const{Model} = sequelize.Sequelize
  class DataMobils extends Model {}
  DataMobils.init({
    nama: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    ukuran: DataTypes.STRING,
    imgmobil: DataTypes.STRING
  }, {
    sequelize,
  });
  return DataMobils;
};