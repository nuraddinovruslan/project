import { Router } from "express";
import { addToCart, getCart, removeFromCart } from "../controller/cart.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const cartRouter = Router();
cartRouter.post("/add_cart", authMiddleware, addToCart);
cartRouter.get("/get_cart", getCart);
cartRouter.delete("/remove_cart:id", removeFromCart);
export default cartRouter;
//# sourceMappingURL=cart.routes.js.map