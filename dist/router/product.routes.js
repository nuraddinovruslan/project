import { Router } from "express";
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controller/product.controller.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const productRouter = Router();
productRouter.post("/add_product", addProduct, adminMiddleware, authMiddleware);
productRouter.get("/get_product/:id", getProduct);
productRouter.put("/update_product/:id", updateProduct, adminMiddleware, authMiddleware);
productRouter.delete("/delete_product/:id", deleteProduct, adminMiddleware, authMiddleware);
productRouter.get("/get_all_products", getProducts);
export default productRouter;
//# sourceMappingURL=product.routes.js.map