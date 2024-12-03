import task from '../models/TaskModel.js';
import { user } from '../models/UserModel.js';

class TaskController {

    // Controller responsável por exibir as tasks na Home page
    static async getTaskByUser(req, res) {
        const userId = req.query.userId; // pegando parâmetro por url
        const dayOfWeek = req.query.day; // pegando parâmetro por url

        try {
            if (!userId || !dayOfWeek) {
                return res.status(400).json({ message: "Parâmetros 'user' e 'day' são necessários." });
            }

            // Busca tasks pelo ID do usuário e dia da semana
            const tasks = await task.find({ user: userId, dayOfWeek: dayOfWeek, completed: false }).sort({ startHour: 1 });

            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao buscar tasks por usuário e dia da semana.` });
        }
    }

    static async criarTask(req, res) {
        const novaTask = req.body;

        try {
            const findedUser = await user.findById(novaTask.user);
            const taskCompleta = { ...novaTask, user: { ...findedUser._doc } };
            const taskCriada = await task.create(taskCompleta);
            res.status(201).json({ message: "Task criada com sucesso", task: taskCriada });
            console.log(taskCriada);
        }
        catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar Task` })
        }
    }

    static async atualizarTask(req, res) {
        try {
            const id = req.params.id;
            const update = req.body;
            await task.findByIdAndUpdate(id, update);

            res.status(200).json({ message: "task atualizado" });
            console.log(update);

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar Task` });
        }
    }

    static async excluirTask(req, res) {
        try {
            const id = req.params.id;
            await task.findByIdAndDelete(id);
            res.status(200).json({ message: "Task excluída com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao excluir Task` });
        }
    }

    static async resetCompletedTasks() {
        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay(); // Obtém o dia da semana (0 para domingo)
        const hour = currentDate.getHours();
        const minute = currentDate.getMinutes();
        const second = currentDate.getSeconds();

        // Verifica se é domingo e o horário é exatamente 23:59:59
        if (dayOfWeek === 0 && hour === 23 && minute === 59 && second === 59) {
            try {
                console.log('Reiniciando status das tarefas recorrentes...');
                await task.updateMany({ completed: true }, { $set: { completed: false } });
                console.log('Tarefas reiniciadas com sucesso!');
            } catch (error) {
                console.error('Erro ao reiniciar tarefas:', error);
            }
        }
    }
}

// Agendamento da função resetCompletedTasks a cada minuto
setInterval(() => {
    TaskController.resetCompletedTasks(); // Executa a função a cada minuto
}, 60000); // 60000 ms = 1 minuto

// exportando para que possamos usar na aplicação inteira
export default TaskController;
