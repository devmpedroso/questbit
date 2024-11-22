function openEventEditPopup(event) {
    const popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'block';

    const form = document.getElementById('event-edit-form');
    form.setAttribute('action', `http://localhost:3000/event/${event._id}`);

    document.getElementById('event-title-input').value = event.title;
    document.getElementById('event-date').value = event.eventDate;
    document.getElementById('event-initial-time-input').value = event.startHour;
    document.getElementById('event-end-time-input').value = event.endHour;
    document.getElementById('event-desc-input').value = event.description;

    document.getElementById('save-button').onclick = () => handleSave(event);
    document.getElementById('delete-button').onclick = () => handleDelete(event);
}

async function handleSave(event) {
    // Captura os valores atuais dos campos do formulário
    const updatedEvent = {
        _id: event._id,
        title: document.getElementById('event-title-input').value,
        eventDate: document.getElementById('event-date').value,
        startHour: document.getElementById('event-initial-time-input').value,
        endHour: document.getElementById('event-end-time-input').value,
        description: document.getElementById('event-desc-input').value
    };

    await fetch(`http://localhost:3000/event/${updatedEvent._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEvent),
    })
        .then(response => {
            if (response.ok) {
                console.log('Evento atualizado com sucesso!');
                window.location.href = './calendar.html';
            } else {
                console.error('Erro ao atualizar Evento.');
            }
        })
        .catch(error => console.error('Erro na requisição:', error));
}

async function handleDelete(event) {
    // Captura os valores atuais dos campos do formulário
    const deletedEvent = { _id: event._id };

    await fetch(`http://localhost:3000/event/${deletedEvent._id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(deletedEvent),
    }).then(response => {
        if (response.ok) {
            console.log('Evento excluida com sucesso!');
            window.location.href = './calendar.html';
        } else {
            console.error('Erro ao excluir evento.');
        }
    }).catch(error => console.error('Erro na requisição:', error));
}

function closeTaskEditPopup() {
    const popupContainer = document.getElementById('popup-container');

    if (popupContainer) {
        popupContainer.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('close-button');
    if (closeButton) {
        closeButton.addEventListener('click', closeTaskEditPopup);
    }
});