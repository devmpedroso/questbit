import task from '../models/TaskModel.js';
import { user } from '../models/UserModel.js';

class TaskController {

    //controller responsável por exibir as tasks na Home page
    static async getTaskByUser(req, res) {
        const userId = req.query.userId; // pegando parâmetro por url
        const dayOfWeek = req.query.day; // pegando parâmetro por url

        try {
            //verifica se ambos os parâmetros estão presentes
            if (!userId || !dayOfWeek) {
                return res.status(400).json({ message: "Parâmetros 'user' e 'day' são necessários." });
            }

            // Busca tasks pelo ID do usuário e dia da semana
            const tasks = await task.find({ user: userId, dayOfWeek: dayOfWeek });
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao buscar tasks por usuário e dia da semana.` });
        }
    }

    static async criarTask(req, res) {
        const novaTask = req.body;

        try {
            const findedUser = await user.findById(novaTask.user);
            const taskCompleta = { ...novaTask, user: { ...findedUser._doc } }
            const taskCriada = await task.create(taskCompleta);
            res.status(201).json({ message: "Task criada com sucesso", task: taskCriada })
        }
        catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar Task` })
        }
    }

    // static async atualizarTask(req, res) {
    //     try {
    //         const id = req.params.id;
    //         await task.findByIdAndUpdate(id, req.body);
    //         res.status(200).json({ message: "task atualizado" });
    //     } catch (erro) {
    //         res.status(500).json({ message: `${erro.message} - falha ao cadastrar Task` });
    //     }
    // }

    // static async excluirTask(req, res) {
    //     try {
    //         const id = req.params.id;
    //         await task.findByIdAndDelete(id);
    //         res.status(200).json({ message: "Task excluído com sucesso" });
    //     } catch (erro) {
    //         res.status(500).json({ message: `${erro.message} - falha ao cadastrar Task` });
    //     }
    // }
}

// exportando para que possamos usar na aplicação inteira
export default TaskController;