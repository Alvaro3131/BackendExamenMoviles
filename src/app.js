import express from "express";
import morgan from "morgan";
import productoroutes from "./routes/producto.routes";
import categoriaroutes from "./routes/categoria.controllers";
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(
    "<h1>Bienvenidos al Backend del Examen</h1><p>Desarrollado por Alvaro Alva Chipana</p>"
  );
});

app.use("/producto", productoroutes);
app.use("/categorias", categoriaroutes);

export default app;
