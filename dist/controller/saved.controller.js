import Saved from "../model/saved.model.js";
import { Product } from "../model/product.model.js";
Saved.sync({ force: false });
export const saved = async (req, res) => {
    const user = req.user;
    const { productId } = req.body;
    if (!productId)
        return res.status(400).json({ message: "Product ID kerak" });
    const existing = await Saved.findOne({ where: { userId: user.id, productId } });
    if (existing)
        return res.status(400).json({ message: "Mahsulot allaqachon saved" });
    const saved = await Saved.create({ userId: user.id, productId });
    res.status(201).json(saved);
};
export const removeSaved = async (req, res) => {
    const user = req.user;
    const { productId } = req.params;
    const deleted = await Saved.destroy({ where: { userId: user.id, productId } });
    if (!deleted)
        return res.status(404).json({ message: "Saved mahsulot topilmadi" });
    res.json({ message: "Saved mahsulot ochirildi" });
};
export const getSaved = async (req, res) => {
    const user = req.user;
    const savedItems = await Saved.findAll({
        where: { userId: user.id },
        include: [{ model: Product, as: "products" }],
    });
    res.json(savedItems);
};
//# sourceMappingURL=saved.controller.js.map