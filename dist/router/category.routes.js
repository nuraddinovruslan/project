import { Router } from "express";
import { addCategory, deleteCategory, getCategories, updateCategory } from "../controller/category.controller.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const categoryRouter = Router();
categoryRouter.get("/get_all_category", getCategories);
categoryRouter.post("/add_category", authMiddleware, adminMiddleware, addCategory);
categoryRouter.put("/update_category/:id", authMiddleware, adminMiddleware, updateCategory);
categoryRouter.delete("/delete_category/:id", authMiddleware, adminMiddleware, deleteCategory);
export default categoryRouter;
//# sourceMappingURL=category.routes.js.map