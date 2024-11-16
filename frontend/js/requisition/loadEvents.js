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

            const title = document.createElement('p');
            title.classList.add('title-date-desc__title-date');
            title.textContent = event.title;

            // const eventFullDate = document.createElement('p');
            // eventFullDate.classList.add('title-date-desc__title-date__date');
            // eventFullDate = event.eventDate; 
            // formatDate(eventFullDate);

            const desc = document.createElement('p');
            desc.classList.add('title-date-desc__desc');
            desc.textContent = `${event.description}`;

            const eventHour = document.createElement('div');
            eventHour.classList.add('event-container__event__hour');

            const eventHourHour = document.createElement('span');
            eventHourHour.classList.add('event-container__event__hour__hour');
            eventHourHour.textContent = `${event.startHour}`;

            const row = document.createElement('span');
            row.classList.add('div-row');

            eventMainDiv.appendChild(eventColumn);
            eventColumn.appendChild(titleDateDesc);
            titleDateDesc.appendChild(title);
            titleDateDesc.appendChild(eventDate)
            titleDateDesc.appendChild(desc);
            eventColumn.appendChild(eventHour);
            eventHour.appendChild(eventHourHour);
            eventMainDiv.appendChild(row);
            eventList.appendChild(eventMainDiv);

        });
    } catch (error) {
    }
}

function formatDate(dateInput) {
    const date = new Date(dateInput);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth()).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
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