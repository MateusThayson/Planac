const controller = require("../controllers/usuarios");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.post("/usuarios", controller.inserirUsuario);
    app.post("/usuarios/signin", controllerAuth.logar);
    
    app.use("/usuarios", controllerAuth.checar);
    app.get("/usuarios", controller.listarUsuarios);
    app.get("/usuarios/:id", controller.buscarUsuarioPorId);
    app.get("/usuarios/:id/posts", controller.obterPost);
    app.delete("/usuarios/:id", controller.removerUsuario);
}