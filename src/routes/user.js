import { Router } from "express";
import userController from "../controllers/User";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não deveriam existir
// router.get("/", userController.index); // Lista Usuários
// router.get("/:id", userController.show); // Lista usuário

router.post("/", loginRequired, userController.create);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
