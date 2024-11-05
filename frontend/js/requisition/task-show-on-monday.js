const userId = localStorage.getItem('userId');
const diaDaSemana = "monday";

const apiUrl = `http://localhost:3000/task/user?userId=${userId}&day=${diaDaSemana}`;

async function loadTasks() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            alert('Erro ao buscar tarefas');
            throw new Error('Erro ao buscar tarefas');
        }

        const tasks = await response.json();

        const taskList = document.getElementById('monday-task-list');
        taskList.innerHTML = '';


        tasks.forEach((task) => {
            const taskLi = document.createElement('li');
            taskLi.classList.add('task-card');

            const reqButton = document.createElement('button');
            reqButton.textContent = 'E';
            reqButton.onclick = () => openTaskEditPopup(task);

            // const icon = document.createElement('img');
            // icon.classList.add('task-card__task-icon');
            // icon.src = '../../frontend/assets/home-assets/brain.svg';

            const title = document.createElement('p');
            title.classList.add('task-card__task-name');
            title.textContent = task.title;

            const time = document.createElement('p');
            time.classList.add('task-card__task-time');
            time.textContent = `${task.startHour}`;

            taskLi.appendChild(reqButton);
            taskLi.appendChild(title);
            taskLi.appendChild(time);
            taskList.appendChild(taskLi);
        });
    } catch (error) {
    }
}

function openTaskEditPopup(task) {
    console.log("Função openTaskEditPopup chamada com a tarefa:", task); // Adicione este log
    const popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'block';

    document.getElementById('task-title-input').value = task.title;
    document.getElementById('weekday').value = task.dayOfWeek;
    document.getElementById('task-initial-time-input').value = task.startHour;
    document.getElementById('task-end-time-input').value = task.endHour;
    document.getElementById('task-desc-input').value = task.description;
}

document.getElementById('close-button').addEventListener('click', closeTaskEditPopup);

function closeTaskEditPopup() {
    const popupContainer = document.getElementById('popup-container');

    if (popupContainer) {
        popupContainer.style.display = 'none';
    }
}

// Carrega as tarefas assim que a página é aberta
window.onload = loadTasks;