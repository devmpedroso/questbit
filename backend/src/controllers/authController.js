import { user } from '../models/UserModel.js';

class AuthController {
    static async login(req, res) {
        const { email, password } = req.body;

        try {
            // Busca o usuário pelo email
            const usuario = await user.findOne({ email });
            console.log(usuario);

            if (!usuario) {
                return res.status(401).json({ message: 'Email e/ou senha inválidos' });
            }

            // Verifica se a senha é válida
            if (password !== usuario.password) {
                return res.status(401).json({ message: 'Email ou senha inválidos' });
            }

            // Envia apenas o ID do usuário na resposta
            res.status(200).json({ message: 'Login bem-sucedido', userId: usuario._id, userName: usuario.name });

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - erro ao fazer login` });
        }
    }
}

export default AuthController;