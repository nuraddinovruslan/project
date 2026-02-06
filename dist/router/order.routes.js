import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { checkout, getOrders } from "../controller/order.controller.js";
const orderRouter = Router();
orderRouter.post("/checkout", authMiddleware, checkout);
orderRouter.get("/get_orders", authMiddleware, authMiddleware, getOrders);
export default orderRouter;
//# sourceMappingURL=order.routes.js.map