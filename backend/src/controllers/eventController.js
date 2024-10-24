import event from '../models/EventModel.js';

class EventController {

    static async getEvent(req, res) {
        const listarEvent = await event.find({});
        res.status(200).json(listarEvent);
    }
    
    static async getEventPorId(req, res) {
        try {
            const id = req.params.id;
            const eventEncontrada = await event.findById(id);
            res.status(200).json(eventEncontrada);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do event` });
        }
    };

    static async criarEvent(req, res) {
        try {
            const novoEvent = await event.create(req.body);
            res.status(201).json({ message: "Event criado com sucesso", event: novoEvent })
        }
        catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do event` })
        }
    }

    static async atualizarEvent(req, res) {
        try {
            const id = req.params.id;
            await event.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "event atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do event` });
        }
    };

    static async excluirEvent(req, res) {
        try {
            const id = req.params.id;
            await event.findByIdAndDelete(id);
            res.status(200).json({ message: "event excluído com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do event` });
        }
    };
}

// exportando para que possamos usar na aplicação inteira
export default EventController;