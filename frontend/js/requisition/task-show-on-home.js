const userId = localStorage.getItem('userId'); // Obtém o userId do localStorage
const diaDaSemana = getDiaDaSemana(); // Obtém o dia da semana atual

const apiUrl = `http://localhost:3000/task/user?userId=${userId}&day=${diaDaSemana}`;

function getDiaDaSemana() {
    const diasDaSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    const dataAtual = new Date();
    const diaIndex = dataAtual.getDay(); // Obtém o número do dia da semana
    return diasDaSemana[diaIndex]; 
}

async function loadTasks() {
    try {
        const response = await fetch(apiUrl); // Requisição GET
        if (!response.ok) throw new Error('Erro ao buscar tarefas');

        const tasks = await response.json(); // Converte a resposta em JSON

        const taskList = document.getElementById('task-list-home');
        taskList.innerHTML = ''; // Limpa o conteúdo atual

        // Itera sobre as tasks e cria os elementos HTML dinamicamente
        tasks.forEach((task) => {
            const taskLi = document.createElement('li');
            taskLi.classList.add('task-card'); // Aplica classe CSS

            const title = document.createElement('p');
            title.classList.add('task-card__task-name');
            title.textContent = task.title; // Preenche o título

            const time = document.createElement('p');
            time.classList.add('task-card__task-time');
            time.textContent = `${task.startHour}`; // Preenche o horário

            taskLi.appendChild(title);
            taskLi.appendChild(time);
            taskList.appendChild(taskLi); // Adiciona a tarefa à lista
        });
    } catch (error) {
        console.error(error);
    }
}

// Carrega as tarefas assim que a página é aberta
window.onload = loadTasks;
