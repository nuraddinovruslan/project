import { Product } from "../model/product.model.js";
Product.sync({ force: false });
export const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch {
        res.status(500).json({ message: "Add product error" });
    }
};
export const getProducts = async (_req, res) => {
    const products = await Product.findAll();
    res.json(products);
};
export const getProduct = async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (!product)
        return res.status(404).json({ message: "Not found" });
    res.json(product);
};
export const updateProduct = async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (!product)
        return res.status(404).json({ message: "Not found" });
    await product.update(req.body);
    res.json(product);
};
export const deleteProduct = async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (!product)
        return res.status(404).json({ message: "Not found" });
    await product.destroy();
    res.json({ message: "Deleted" });
};
//# sourceMappingURL=product.controller.js.map