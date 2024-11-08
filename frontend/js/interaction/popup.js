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

    document.getElementById('save-button').onclick = () => handleSave(task.id);
    // document.getElementById('delete-button').onclick = () => handleDelete(task.id);
}

function handleSave(taskId) {
    const form = document.getElementById('task-edit-form');
    form.setAttribute('action', `http://localhost:3000/task/${task._id}`);
    form.setAttribute('method', 'PUT');
    form.submit();
}

// function handleDelete(taskId) {
//     const form = document.getElementById('task-edit-form');
//     form.setAttribute('action', `http://localhost:3000/task/${task._id}`);
//     form.setAttribute('method', 'DELETE');
//     form.submit(); 
// }

document.addEventListener('DOMContentLoaded', (taskId) => {
    const deleteBtn = document.getElementsById('delete-button');
    if (deleteBtn) {
        const form = document.getElementById('task-edit-form');
        form.setAttribute('method', 'DELETE');
        form.submit(); 
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('close-button');
    if (closeButton) {
        closeButton.addEventListener('click', closeTaskEditPopup);
    }
});

function closeTaskEditPopup() {
    const popupContainer = document.getElementById('popup-container');

    if (popupContainer) {
        popupContainer.style.display = 'none';
    }
}

export default openTaskEditPopup;