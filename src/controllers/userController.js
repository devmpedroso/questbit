import user from '../models/UserModel.js';

class UserController {
  static async getUser(req, res) {
    const listarUser = await user.find({});
    res.status(200).json(listarUser);
  }

  static async getUserPorId(req, res) {
    try {
      const id = req.params.id;
      const userEncontrado = await user.findById(id);
      res.status(200).json(userEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição por id do usuário` });
    }
  };

  static async criarUser(req, res) {
    try {
      const novoUser = await user.create(req.body);
      res.status(201).json({ message: "User criado com sucesso", user: novoUser })
    }
    catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar user` })
    }
  }

  static async atualizarUser(req, res) {
    try {
      const id = req.params.id;
      await user.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "user atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização do user` });
    }
  };

  static async excluirUser(req, res) {
    try {
      const id = req.params.id;
      await user.findByIdAndDelete(id);
      res.status(200).json({ message: "user excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão do user` });
    }
  };


}

// exportando para que possamos usar na aplicação inteira
export default UserController;