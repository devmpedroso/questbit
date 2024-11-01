import event from '../models/EventModel.js';
import { user } from '../models/UserModel.js';

class EventController {

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

        const novoEvento = req.body

        try {
            const findedUser = await user.findById(novoEvento.user);
            const eventCompleto = { ...novoEvento, user: { ...findedUser._doc }}
            const eventCriado = await event.create(eventCompleto);
            res.status(201).json({ message: "Event criado com sucesso", event: eventCriado })
        }
        catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do event` })
        }
    }
}

// exportando para que possamos usar na aplicação inteira
export default EventController;