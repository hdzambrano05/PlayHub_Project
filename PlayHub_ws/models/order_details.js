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
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "order_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "orders_model"
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
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "price",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "order_details",
    comment: "",
    indexes: []
  };
  const OrderDetailsModel = sequelize.define("order_details_model", attributes, options);
  return OrderDetailsModel;
};