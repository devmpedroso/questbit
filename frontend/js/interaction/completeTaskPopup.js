function openTaskEditPopup(task) {
    const popupContainer = document.getElementById('popup-container-completed-task');
    popupContainer.style.display = 'block';

    const form = document.getElementById('task-completed-form');
    form.setAttribute('action', `http://localhost:3000/task/${task._id}`);

    document.getElementById('task-title-input').value = task.title;
    document.getElementById('task-initial-time-input').value = task.startHour;
    document.getElementById('task-end-time-input').value = task.endHour;
    document.getElementById('task-desc-input').value = task.description;

    document.getElementById('save-button').onclick = () => handleSave(task);
}

async function handleSave(task) {
    // Captura os valores atuais dos campos do formulário
    const updatedTask = {
        _id: task._id,
        completed: true
    };

    await fetch(`http://localhost:3000/task/${updatedTask._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
    })
        .then(response => {
            if (response.ok) {
                console.log('Tarefa atualizada com sucesso!');
            } else {
                console.error('Erro ao atualizar tarefa.');
            }
        })
        .catch(error => console.error('Erro na requisição:', error));

        window.location.href = './home.html';

}

function closeTaskEditPopup() {
    const popupContainer = document.getElementById('popup-container-completed-task');

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