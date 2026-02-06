import { Product } from "../model/product.model.js";
import Cart from "../model/cart.model.js";
Cart.sync({ force: false });
export const addToCart = async (req, res) => {
    const user = req.user;
    const { productId, quantity } = req.body;
    const product = await Product.findByPk(productId);
    if (!product)
        return res.status(404).json({ message: "Product topilmadi" });
    const cartItem = await Cart.create({
        userId: user.id,
        productId,
        quantity: quantity || 1,
    });
    res.status(201).json(cartItem);
};
export const getCart = async (req, res) => {
    const user = req.user;
    const items = await Cart.findAll({
        where: { userId: user.id },
        include: [Product],
    });
    res.json(items);
};
export const removeFromCart = async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const item = await Cart.findOne({ where: { id, userId: user.id } });
    if (!item)
        return res.status(404).json({ message: "Item topilmadi" });
    await item.destroy();
    res.json({ message: "Cart item ochirildi" });
};
//# sourceMappingURL=cart.controller.js.map