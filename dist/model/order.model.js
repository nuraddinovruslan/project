import { Model, DataTypes } from "sequelize";
import { User } from "./auth.model.js";
import sequelize from "../config/config.js";
class Order extends Model {
}
Order.init({
    status: {
        type: DataTypes.STRING,
        defaultValue: "PENDING",
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, { sequelize, tableName: "order" });
Order.belongsTo(User, { foreignKey: "userId" });
export default Order;
//# sourceMappingURL=order.model.js.map