import { Router } from "express";
import BooksController from "../controller/BooksController.js"

const router = Router();

router.post("/books",BooksController.exemple);

export default router