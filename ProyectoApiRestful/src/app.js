import express from "express";
import morgan from "morgan"
import categoria from "./routes/categoria.routes";
import cliente from "./routes/cliente.routes";
import detallecompra from "./routes/detallecompra.routes";
import orden from "./routes/orden.routes"; 
import producto from "./routes/producto.routes";

const app = express();

//Settings
app.set("port",4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use(categoria);
app.use(cliente);
app.use(detallecompra);
app.use(orden);
app.use(producto);

export default app;