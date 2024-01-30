import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
  },
  { versionKey: false }
);

const aluno = mongoose.model("alunos", alunoSchema);

export default aluno;
