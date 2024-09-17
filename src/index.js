import express from "express";
import UserRoutes from './router/UserRoutes.js';
import BookRoutes from "./router/BookRoutes.js";

const server = express()
const port = 5000;

server.use(express.json());

server.use(UserRoutes);
server.use(BookRoutes);

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
