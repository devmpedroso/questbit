const userId = localStorage.getItem('userId'); // Obtém o userId do localStorage
const userName = localStorage.getItem('userName');
const diaDaSemana = getDiaDaSemana(); // Obtém o dia da semana atual
// const diaDaSemana = "monday"; // o dia da semana tem que ser em inglês (que novidade essa bomba)

const apiUrl = `http://localhost:3000/task/user?userId=${userId}&day=${diaDaSemana}`;

//Carrega as tasks e o welcome (Saudação + nome + dia da semana + data)

function getDiaDaSemana() {
    const diasDaSemana = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
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

        const taskList = document.getElementById('task-list-home');
        taskList.innerHTML = ''; // Limpa o conteúdo atual

        // Itera sobre as tasks e cria os elementos HTML dinamicamente
        tasks.forEach((task, index) => {
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

            // actionTime(task, index)
        });

        loadWelcome();
        console.log("Scripts: loadWelcome() e actionTime() carregados com sucesso.")
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
    name.classList.add('h-welcome');
    name.textContent = `Olá, ${userName}!`;

    const weekday = document.createElement('p');
    weekday.textContent = translatedDay(); //para usar essa função sem importala, estamos usando o escopo global do navegador, carregando o arquivo definidor da função antes deste arquivo aqui na home.

    const dayMonth = document.createElement('p');
    dayMonth.textContent = day + '/' + (month + 1); // os meses são um array de 0 a 11, por isso +1 pra fechar 12 no frontend

    welcome.appendChild(name);
    welcome.appendChild(weekday);
    welcome.appendChild(dayMonth);
}

function translatedDay() {
    const day = getDiaDaSemana();
    if (day === 'monday') { return 'Segunda-feira'; }
    if (day === 'tuesday') { return 'Terça-feira'; }
    if (day === 'wednesday') { return 'Quarta-feira'; }
    if (day === 'thursday') { return 'Quinta-feira'; }
    if (day === 'friday') { return 'Sexta-feira'; }
    if (day === 'saturday') { return 'Sábado'; }
    if (day === 'sunday') { return 'Domingo'; }
}

// function actionTime(task) {
// console.log(task);
// console.log("StartHour original:", task.startHour);
// console.log("EndHour original:", task.endHour);

//     let hour = new Date();
//     let time = hour.getTime();  // Obtém o timestamp da hora atual
//     console.log("Hora atual:", time);

//     const background = document.getElementsByClassName('task-card')[0];  // Assumindo que você quer o primeiro elemento
   
//     // Converte as horas de startHour e endHour para timestamps também
//     const startHour = new Date(task.startHour).getHours();
//     const endHour = new Date(task.endHour).getHours();
//     console.log("StartHour:", startHour, "EndHour:", endHour);

//     // Verifica se a hora atual está dentro do intervalo de tempo
//     if (startHour <= hour && hour <= endHour) {
//         background.style.setProperty('background-color', '#6DD478', 'important');  // Dentro do horário de ação
//         console.log("Cor verde aplicada (dentro do horário)");
//     } 
//     // Verifica se a hora atual já passou do horário de ação
//     else if (hour > endHour) {
//         background.style.setProperty('background-color', '#D46D6D', 'important');  // Passado do horário de ação
//         console.log("Cor vermelha aplicada (fora do horário)");
//     } 
//     // Verifica se a hora atual está antes do horário de ação
//     else {
//         background.style.setProperty('background-color', '#FFFFFF', 'important');  // Fora do horário de ação
//         console.log("Cor branca aplicada (antes do horário)");
//     }
// }



// Carrega as tarefas assim que a página é aberta
window.onload = loadTasks;