import express from "express";
import user from "./userRoutes.js";
import task from "./taskRoutes.js";
import event from "./eventRoutes.js";
import auth from "./authRoutes.js";
// import page from "./pageRoutes.js";

const routes = (app) => {
    // Não precisa de express.json() aqui, já estamos aplicando isso nas rotas apenas uma única vez
    app.use(express.json()); // Aqui, aplicamos o middleware JSON uma vez

    // Definindo as rotas
    // app.use(page);
    app.use(auth);
    app.use(user);
    app.use(task);
    app.use(event);
}

export default routes;