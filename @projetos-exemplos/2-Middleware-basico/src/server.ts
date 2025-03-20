import express from "express";
import { routes } from "./router";
import { middlewarelogDataEHora } from "./middlewares/middlewarelogDataEHora";

const port = 3333;

const app = express();

app.use(express.json());

app.use(middlewarelogDataEHora)

app.use(routes)

app.listen(port, () =>
  console.log("Servidor funcionando com sucesso ! ✔ 🎉 🎉")
);
