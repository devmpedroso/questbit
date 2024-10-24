import { task } from '../models/TaskModel.js';

class TaskController {
    static async getTask(req, res) {
        const listarTask = await task.find({});
        res.status(200).json(listarTask);
    }

    static async getTaskPorId(req, res) {
        try {
            const id = req.params.id;
            const taskEncontrada = await task.findById(id);
            res.status(200).json(taskEncontrada);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição da task` });
        }
    };

    static async criarTask(req, res) {
        try {
            const novaTask = await task.create(req.body);
            res.status(201).json({ message: "Task criada com sucesso", task: novaTask })
        }
        catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar Task` })
        }
    }

    static async atualizarTask(req, res) {
        try {
            const id = req.params.id;
            await task.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "task atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar Task` });
        }
    };

    static async excluirTask(req, res) {
        try {
            const id = req.params.id;
            await task.findByIdAndDelete(id);
            res.status(200).json({ message: "Task excluído com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar Task` });
        }
    };
}

// exportando para que possamos usar na aplicação inteira
export default TaskController;