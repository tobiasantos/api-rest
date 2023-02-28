"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _User = require('../controllers/User'); var _User2 = _interopRequireDefault(_User);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveriam existir
// router.get("/", userController.index); // Lista Usuários
// router.get("/:id", userController.show); // Lista usuário

router.post("/", _loginRequired2.default, _User2.default.create);
router.put("/", _loginRequired2.default, _User2.default.update);
router.delete("/", _loginRequired2.default, _User2.default.delete);

exports. default = router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
