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
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cart_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "carts_model"
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "product_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "products_model"
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "quantity",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "cart_items",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'

  };
  const CartItemsModel = sequelize.define("cart_items_model", attributes, options);
  return CartItemsModel;
};