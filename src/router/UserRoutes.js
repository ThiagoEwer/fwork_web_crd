import { response, Router } from "express";
import UserController from "../controller/UserController.js";

// criação do objeto de rotas
const router = Router();

//exemplo QueryString(tem que vir antes dos obrigatórios)
router.get("/users/queryString",UserController.qryString);

//criação das rotas com o tipo de operação http
//e a funcao do controler que é a(REQUEST/RESPONSE)

//get
router.get("/teste", UserController.teste);
router.get("/users", UserController.findAll);
router.get("/users/:id", UserController.findById)
//post
router.post("/users", UserController.save);
//put
router.put("/users/:id",UserController.update);
//delete
router.delete("/users/:id", UserController.delete);


//exportação das rotas
export default router;  