module.exports = function(sequelize, DataTypes) {
    let Notes = sequelize.define("Notes", {
      name: DataTypes.STRING,
      notes: DataTypes.STRING,
    });
    return Notes;
  };