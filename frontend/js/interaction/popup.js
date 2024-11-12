function openTaskEditPopup(task) {
    
    const popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'block';    

    const form = document.getElementById('task-edit-form');
    form.setAttribute('action', `http://localhost:3000/task/${task._id}`);

    document.getElementById('task-title-input').value = task.title;
    document.getElementById('weekday').value = task.dayOfWeek;
    document.getElementById('task-initial-time-input').value = task.startHour;
    document.getElementById('task-end-time-input').value = task.endHour;
    document.getElementById('task-desc-input').value = task.description;

    document.getElementById('save-button').onclick = () => handleSave(task);
    document.getElementById('delete-button').onclick = () => handleDelete(task);
}

async function handleSave(task) {
    // Captura os valores atuais dos campos do formulário
    const updatedTask = {
        _id: task._id,
        title: document.getElementById('task-title-input').value,
        dayOfWeek: document.getElementById('weekday').value,
        startHour: document.getElementById('task-initial-time-input').value,
        endHour: document.getElementById('task-end-time-input').value,
        description: document.getElementById('task-desc-input').value
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
            window.location.href = 'monday.html';
        } else {
            console.error('Erro ao atualizar tarefa.');
        }
    })
    .catch(error => console.error('Erro na requisição:', error));
}



async function handleDelete(task) {
    // Captura os valores atuais dos campos do formulário
    const deletedTask = { _id: task._id };

    await fetch(`http://localhost:3000/task/${deletedTask._id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(deletedTask),
    }).then(response => {
        if (response.ok) {
            console.log('Tarefa excluida com sucesso!');
            window.location.href = 'monday.html';
        } else {
            console.error('Erro ao excluir tarefa.');
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