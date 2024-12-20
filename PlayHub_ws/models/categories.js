const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false,
      unique: "categories_name_key"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "categories",
    comment: "",
    indexes: []
  };
  const CategoriesModel = sequelize.define("categories_model", attributes, options);
  return CategoriesModel;
};