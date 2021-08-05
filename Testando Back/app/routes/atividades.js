const controller = require("../controllers/atividades");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.use("/planac/atividades", controllerAuth.checar);
    app.post("/planac/atividades", controller.planejarAtividade);
}