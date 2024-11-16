const userId = localStorage.getItem('userId');
const diaDaSemana = "wednesday";

const apiUrl = `http://localhost:3000/task/user?userId=${userId}&day=${diaDaSemana}`;

async function loadTasks() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            alert('Erro ao buscar tarefas');
            throw new Error('Erro ao buscar tarefas');
        }

        const tasks = await response.json();

        const taskList = document.getElementById('wednesday-task-list');
        taskList.innerHTML = '';

        tasks.forEach((task) => {
            const taskLi = document.createElement('li');
            taskLi.classList.add('task-card');

            const reqButton = document.createElement('button');
            const icon = document.createElement('img');
            reqButton.classList.add('button-edit-task');
            icon.classList.add('button-edit-task-img');
            icon.src = '../../../frontend/assets/calendar-assets/escrever.png';
            reqButton.appendChild(icon);
            reqButton.onclick = () => openTaskEditPopup(task);

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

// Carrega as tarefas assim que a página é aberta
window.onload = loadTasks;