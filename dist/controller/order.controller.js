import Cart from "../model/cart.model.js";
import Order from "../model/order.model.js";
import { Product } from "../model/product.model.js";
Order.sync({ force: false });
export const checkout = async (req, res) => {
    const user = req.user;
    const cartItems = await Cart.findAll({
        where: { userId: user.id },
        include: [Product]
    });
    if (!cartItems.length)
        return res.status(400).json({ message: "Cart bosh" });
    let total = 0;
    cartItems.forEach((item) => {
        const productData = item.Product;
        if (productData) {
            total += item.quantity * productData.price;
        }
        else {
            console.log("Mahsulot topilmadi, item ID:", item.id);
        }
    });
    const order = await Order.create({
        userId: user.id,
        total,
        status: "PENDING",
    });
    await Cart.destroy({ where: { userId: user.id } });
    res.status(201).json(order);
};
export const getOrders = async (req, res) => {
    const orders = await Order.findAll();
    res.json(orders);
};
//# sourceMappingURL=order.controller.js.map