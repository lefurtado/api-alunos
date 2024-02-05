import aluno from "../models/Alunos.js";

class AlunoController {
  // colocar paginação
  // colocar campo status = 1
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
    const novoAluno = req.body;
    const alunoExiste = await aluno.findOne({
      cpf: novoAluno.cpf,
    });

    if (!alunoExiste) {
      const novoAluno = await aluno.create(novoAluno);
      res.status(200).json({
        message: "Aluno cadastrado com sucesso!",
        aluno: novoAluno,
      });
    } else {
      // ler metodos http 203
      res.status(500).json({
        message: `Já existe um aluno cadastrado com esse CPF!`,
      });
    }
  }

  // implementar validação CPF
  // retorna objeto atualizado
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

  // atualizar para status = 0
  static async deletaAluno(req, res) {
    res.status(200).json({ message: "Metodo não implementado" });
  }
}

export default AlunoController;

// criar relação 1 pra 1 endereço
