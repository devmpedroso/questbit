// esse é o nosso ponto de entrada das rotas

import express from "express";
import user from "./userRoutes.js";
import task from "./taskRoutes.js";
import event from "./eventRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Rota Base"));
    app.use(express.json(), user);
    app.use(express.json(), task);
    app.use(express.json(), event);
}

export default routes;