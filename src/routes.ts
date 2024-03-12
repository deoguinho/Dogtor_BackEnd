import Express from "express";
const router = Express.Router();

import UsuarioController from "./controllers/UsuarioController";
import PetController from "./controllers/PetController";

router.post("/usuario", UsuarioController.createUsuario);
router.post("/login", UsuarioController.login);
router.post("/pet", PetController.createAPet);


export default router;
