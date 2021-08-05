const controller = require("../controllers/atividade");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.use("/atividades", controllerAuth.checar);
    app.post("/atividades", controller.planejarAtividade);
}