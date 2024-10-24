import user from '../models/UserModel.js';

class AuthController {

    static async login(req, res) {
        const { email, password } = req.body;
        
        try {
            //pega o user pelo email
            const usuario = await user.findOne({ email });
            console.log(usuario);
            
            if (!usuario) {
                return res.status(401).json({ message: 'Email e/ou senha inválidos' });
            }

            // verifica senha
            // Verifica se a senha é válida
            if (password !== usuario.password) {
                return res.status(401).json({ message: 'Email ou senha inválidos' });
            }

            res.status(200).json({ message: 'Login bem-sucedido', user: usuario });

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - erro ao fazer login` })
        }
    }
}

export default AuthController;