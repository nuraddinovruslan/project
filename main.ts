import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './router/auth.routes.js';
import productRouter from './router/product.routes.js';
import categoryRouter from './router/category.routes.js';
import cartRouter from './router/cart.routes.js';
import orderRouter from './router/order.routes.js';
import savedRouter from './router/saved.routes.js';
import cookieParser from 'cookie-parser';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
const PORT = process.env.PORT || 3000;


//router
app.use(authRouter)
app.use(productRouter)
app.use(categoryRouter)
app.use(cartRouter)
app.use(orderRouter)
app.use(savedRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
