const userId = localStorage.getItem('userId'); // Obtém o userId do localStorage
const diaDaSemana = getDiaDaSemana(); // Obtém o dia da semana atual
// const diaDaSemana = "monday"; // o dia da semana tem que ser em inglês (que novidade essa bomba)

console.log("User ID:", userId);
console.log("Dia da Semana:", diaDaSemana);

const apiUrl = `http://localhost:3000/task/user?userId=${userId}&day=${diaDaSemana}`;
console.log("API URL:", apiUrl);

function getDiaDaSemana() {
    const diasDaSemana = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']; //atualizei os dias aqui para inglês
    const dataAtual = new Date();
    const diaIndex = dataAtual.getDay(); // Obtém o número do dia da semana
    return diasDaSemana[diaIndex]; 
}

async function loadTasks() {
    try {
        const response = await fetch(apiUrl); // Requisição GET
        console.log("Response Status:", response.status);
        
        if (!response.ok) {
            alert('Erro ao buscar tarefas');
            throw new Error('Erro ao buscar tarefas');
        }

        const tasks = await response.json(); // Converte a resposta em JSON
        // console.log("Tasks:", tasks);

        const taskList = document.getElementById('task-list-home');
        taskList.innerHTML = ''; // Limpa o conteúdo atual

        // Itera sobre as tasks e cria os elementos HTML dinamicamente
        tasks.forEach((task) => {
            const taskLi = document.createElement('li');
            taskLi.classList.add('task-card'); // Aplica classe CSS

            // const icon = document.createElement('img');
            // icon.classList.add('task-card__task-icon');
            // icon.src = '../../frontend/assets/home-assets/brain.svg';

            const title = document.createElement('p');
            title.classList.add('task-card__task-name');
            title.textContent = task.title; // Preenche o título

            const time = document.createElement('p');
            time.classList.add('task-card__task-time');
            time.textContent = `${task.startHour}`; // Preenche o horário

            taskLi.appendChild(title);
            taskLi.appendChild(time);
            taskList.appendChild(taskLi); // Adiciona a tarefa à lista

            loadWelcome();
        });
    } catch (error) {
        console.error("Erro:", error);
    }
}

function loadWelcome() {
    const welcome = document.getElementById('h_name-date');
    const presentDate = new Date;
    const day = presentDate.getDate();
    const month = presentDate.getMonth();

    const name = document.createElement('p');
    name.classList.add('h-welcome')
    name.textContent = userName;

    const weekday = document.createElement('p');
    weekday.textContent = getDiaDaSemana();

    const dayMonth = document.createElement('p');
    dayMonth.textContent = day + '/' + (month + 1);

    welcome.appendChild(name);
    welcome.appendChild(weekday);
    welcome.appendChild(dayMonth);
    
    console.log('Welcome carregado com sucesso');
}

// Carrega as tarefas assim que a página é aberta
window.onload = loadTasks;