function loadWelcome() {
    const welcome = document.getElementById('h_name-date');
    const presentDate = new Date;
    const day = presentDate.getDate();
    const month = presentDate.getMonth();

    const name = document.createElement('p');
    name.classList.add('h-welcome')
    name.textContent = userName;

    const weekday = document.createElement('p');
    weekday.textContent = getDiaDaSemana(); //para usar essa função sem importala, estamos usando o escopo global do navegador, carregando o arquivo definidor da função antes deste arquivo aqui na home.

    const dayMonth = document.createElement('p');
    dayMonth.textContent = day + '/' + (month + 1);

    welcome.appendChild(name);
    welcome.appendChild(weekday);
    welcome.appendChild(dayMonth);
}

window.onload = loadWelcome;