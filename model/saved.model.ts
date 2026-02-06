import { Model, DataTypes } from "sequelize";
import sequelize from "../config/config.js";
import { User } from "./auth.model.js";
import { Product } from "./product.model.js";

class Saved extends Model {
  public id!: number;
  public userId!: number;
  public productId!: number;
}

Saved.init(
  {
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  { sequelize, modelName: "saved", tableName: "saved", timestamps: true }
);
Saved.belongsTo(User, { foreignKey: "userId" });
Saved.belongsTo(Product, { foreignKey: "productId", as: "product" });

export default Saved;
