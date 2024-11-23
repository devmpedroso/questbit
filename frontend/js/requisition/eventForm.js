// este js é responsável pelo cadastro de eventos

const form = document.getElementById('event-form');
const userId = localStorage.getItem('userId');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    console.log(formData.get('task-initial-time'));

    const eventData = {
        title: formData.get('event-title'),
        description: formData.get('event-desc'),
        eventDate: formData.get('event-date'),
        startHour: formData.get('event-initial-time'),
        endHour: formData.get('event-end-time'),
        completed: false,
        user: userId
    }

    console.log("dados do evento: ", eventData);

    try {
        const res = await fetch('http://localhost:3000/event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        });

        if (res.ok) {
            const result = await res.json();
            console.log('evento cadastrado com sucesso: ', result);
            window.location.href = "../calendar.html";
        } else {
            const errorData = await res.json();
            console.error('Erro ao cadastrar: ', errorData.message);
        }
    } catch (error) {
        console.error('Erro na requisição: ', error);
    }
});

