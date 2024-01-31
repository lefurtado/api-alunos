import express from "express";
import AlunoController from "../controllers/alunoController.js";

const routes = express.Router();

routes.get("/alunos", AlunoController.listarAlunos);
routes.get("/alunos/:id", AlunoController.listarAlunoPorId);
routes.post("/alunos", AlunoController.cadastrarAluno);
routes.put("/alunos/:id", AlunoController.atualizarAluno);
routes.delete("/alunos/:id", AlunoController.deletaAluno);

export default routes;
