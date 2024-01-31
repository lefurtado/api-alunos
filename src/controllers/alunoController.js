import aluno from "../models/Alunos.js";

class AlunoController {
  static async listarAlunos(req, res) {
    try {
      const listaAlunos = await aluno.find({});
      res.status(200).json(listaAlunos);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na requisição` });
    }
  }

  static async listarAlunoPorId(req, res) {
    try {
      const id = req.params.id;
      const alunoEncontrado = await aluno.findById(id);
      res.status(200).json(alunoEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na requisição do aluno` });
    }
  }

  static async cadastrarAluno(req, res) {
    try {
      const novoAluno = await aluno.create(req.body);
      res.status(201).json({
        message: "criado com sucesso",
        aluno: novoAluno,
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao cadastrar aluno`,
      });
    }
  }

  static async atualizarAluno(req, res) {
    try {
      const id = req.params.id;
      await aluno.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Aluno atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na atualização do aluno` });
    }
  }

  static async deletaAluno(req, res) {
    try {
      const id = req.params.id;
      await aluno.findByIdAndDelete(id);
      res.status(200).json({ message: "Aluno deletado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Falha ao deletar aluno` })
    }
  }
}

export default AlunoController;
