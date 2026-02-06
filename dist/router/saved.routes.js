import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getSaved, removeSaved, saved } from "../controller/saved.controller.js";
const savedRouter = Router();
savedRouter.post("/product/:id/saved", authMiddleware, saved);
savedRouter.get("/get_saved/saved", authMiddleware, getSaved);
savedRouter.delete("/:productId", authMiddleware, removeSaved);
export default savedRouter;
//# sourceMappingURL=saved.routes.js.map