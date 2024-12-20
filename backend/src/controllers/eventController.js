import event from '../models/EventModel.js';
import { user } from '../models/UserModel.js';

class EventController {

    // static async getEventPorId(req, res) {
    //     try {
    //         const id = req.params.id;
    //         const eventEncontrada = await event.findById(id);
    //         res.status(200).json(eventEncontrada);
    //     } catch (erro) {
    //         res.status(500).json({ message: `${erro.message} - falha na requisição do event` });
    //     }
    // };

    static async getEventByUser(req, res) {
        const userId = req.query.userId; // pegando parâmetro por url

        try {
            if (!userId) {
                return res.status(400).json({ message: "Parâmetros 'user' é necessário." });
            }

            // Busca event pelo ID do usuário
            const events = await event.find({ user: userId });
            res.status(200).json(events);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao buscar event por usuário.` });
        }
    }

    static async criarEvent(req, res) {
        const novoEvento = req.body

        try {
            const findedUser = await user.findById(novoEvento.user);
            const eventCompleto = { ...novoEvento, user: { ...findedUser._doc }} //nota** uso do spread operator
            const eventCriado = await event.create(eventCompleto);
            res.status(201).json({ message: "Event criado com sucesso", event: eventCriado })
        }
        catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do event` })
        }
    }

    static async atualizarEvent(req, res) {
        try {
            const id = req.params.id;
            const update = req.body;
            await event.findByIdAndUpdate(id, update);
            
            res.status(200).json({ message: "event atualizado" });
            console.log(update);

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao atualizar evento` });
        }
    }

    static async excluirEvent(req, res) {
        try {
            const id = req.params.id;
            await event.findByIdAndDelete(id);
            res.status(200).json({ message: "Evento excluído com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao excluir evento` });
        }
    }
}

// exportando para que possamos usar na aplicação inteira
export default EventController;