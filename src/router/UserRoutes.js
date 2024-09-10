import { response, Router } from "express";

// criação do objeto de rotas
const router = Router();

//criação das rotas com o tipo de operação http
router.get("/teste",(request, response)=>{
    response.send({message:"Hello Word"})
})

//exportação das rotas
export default router;  