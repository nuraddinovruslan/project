import { Model, DataTypes } from "sequelize";
import sequelize from "../config/config.js";
export class User extends Model {
}
User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: new DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: new DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: new DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: new DataTypes.STRING,
        allowNull: false,
        defaultValue: "USER",
    },
}, {
    tableName: "users",
    sequelize,
    timestamps: true,
});
//# sourceMappingURL=auth.model.js.map