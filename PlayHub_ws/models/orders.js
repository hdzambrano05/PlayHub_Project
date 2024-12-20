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
    customer_name: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "customer_name",
      autoIncrement: false
    },
    customer_email: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "customer_email",
      autoIncrement: false
    },
    customer_phone: {
      type: DataTypes.CHAR(15),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "customer_phone",
      autoIncrement: false
    },
    customer_address: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "customer_address",
      autoIncrement: false
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "total",
      autoIncrement: false
    },
    status: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: "pending",
      comment: null,
      primaryKey: false,
      field: "status",
      autoIncrement: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "created_at",
      autoIncrement: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "updated_at",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "orders",
    comment: "",
    indexes: [],
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const OrdersModel = sequelize.define("orders_model", attributes, options);
  return OrdersModel;
};