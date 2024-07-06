import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/public`));



import { __dirname } from "./src/path.js";
app.use(express.static(`${__dirname}/public`));



import cartRouter from "./src/routes/carts.routes.js";
import productsRouter from "./src/routes/products.routes.js";
app.use("/api/products", productsRouter);
app.use("/api/carts", cartRouter);



import { errorHandler } from "./src/middlewares/errorHandler.js";
app.use(errorHandler);



import { initMongoDB }  from './src/db/mongoDb.js';
initMongoDB();


const PORT = 8080;

const httpServer = app.listen(PORT, () => console.log(`Server OK port: ${PORT}`));

