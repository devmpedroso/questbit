const userId = localStorage.getItem('userId');

const apiUrl = `http://localhost:3000/event/user?userId=${userId}`;

async function loadEvents() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            alert('Erro ao buscar eventos');
            throw new Error('Erro ao buscar eventos');
        }

        const events = await response.json();

        const eventList = document.getElementById('event-container');
        eventList.innerHTML = '';

        events.forEach((event) => {
            const eventMainDiv = document.createElement('div');
            eventMainDiv.classList.add('event-container__event');

            const eventColumn = document.createElement('div');
            eventColumn.classList.add('event-container__event__column');

            const titleDateDesc = document.createElement('div');
            titleDateDesc.classList.add('event-container__event__title-date-desc');

            const titleDate = document.createElement('p');
            titleDate.classList.add('title-date-desc__title-date');
            const loadEventTitle = event.title;
            const loadEventDate = event.eventDate;
            const result = loadEventTitle + ' - ' + loadEventDate;
            titleDate.textContent = result;

            const desc = document.createElement('p');
            desc.classList.add('title-date-desc__desc');
            desc.textContent = `${event.description}`;

            const eventHour = document.createElement('div');
            eventHour.classList.add('event-container__event__hour');

            const eventHourHour = document.createElement('span');
            eventHourHour.classList.add('event-container__event__hour');
            eventHourHour.textContent = `${event.startHour}`;

            const row = document.createElement('span');
            row.classList.add('div-row');

            eventMainDiv.appendChild(eventColumn);
            eventColumn.appendChild(titleDateDesc);
            titleDateDesc.appendChild(titleDate);
            titleDateDesc.appendChild(desc);
            eventColumn.appendChild(eventHour);
            eventHour.appendChild(eventHourHour);
            eventMainDiv.appendChild(row);
            eventList.appendChild(eventMainDiv);

        });
    } catch (error) {
    }
}

// function getDayOfWeek(event) {
//     const eventDate = event.eventDate;

//     if (eventDate) {
//         const date = new Date(eventDate);
//         const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
//         const dayOfWeek = daysOfWeek[date.getDay()];
//     }
// }

// Carrega as tarefas assim que a página é aberta

window.onload = loadEvents;