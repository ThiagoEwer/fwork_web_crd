import { response, Router } from "express";
import UserController from "../controller/UserController.js";

// criação do objeto de rotas
const router = Router();

//criação das rotas com o tipo de operação http
//e a funcao do controler que é a(REQUEST/RESPONSE)

//get
router.get("/teste", UserController.teste);
router.get("/users", UserController.findAll);
router.get("/users/:id", UserController.findById)

//post
router.post("/users", UserController.save);


//exportação das rotas
export default router;  