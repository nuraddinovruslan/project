import { Model, DataTypes } from "sequelize";
import { User } from "./auth.model.js";
import { Product } from "./product.model.js";
import sequelize from "../config/config.js";
class Cart extends Model {
}
Cart.init({
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
}, { sequelize, tableName: "cart" });
Cart.belongsTo(User, { foreignKey: "userId" });
Cart.belongsTo(Product, { foreignKey: "productId" });
export default Cart;
//# sourceMappingURL=cart.model.js.map