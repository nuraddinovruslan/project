import { Product } from "../model/product.model.js";
import { Op } from "sequelize";
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
export const getProducts = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = req.query.search;
        const offset = (page - 1) * limit;
        const where = {};
        // 🔍 search bo‘lsa
        if (search) {
            where.title = {
                [Op.iLike]: `%${search}%`,
            };
        }
        const { rows: products, count: total } = await Product.findAndCountAll({
            where,
            limit,
            offset,
            order: [["createdAt", "DESC"]],
        });
        res.json({
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
            products,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Get products error" });
    }
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