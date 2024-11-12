const userId = localStorage.getItem('userId');
const diaDaSemana = "thursday";

const apiUrl = `http://localhost:3000/task/user?userId=${userId}&day=${diaDaSemana}`;

async function loadTasks() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            alert('Erro ao buscar tarefas');
            throw new Error('Erro ao buscar tarefas');
        }

        const tasks = await response.json();

        const taskList = document.getElementById('thursday-task-list');
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

// Carrega as tarefas assim que a página é aberta
window.onload = loadTasks;