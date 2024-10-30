const form = document.getElementById('task-form');
const userId = localStorage.getItem('userId');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    console.log(formData.get('task-initial-time'));

    const taskData = {
        title: formData.get('task-title'),
        description: formData.get('task-desc'),
        dayOfWeek: formData.get('weekday'),
        startHour: formData.get('task-initial-time'),
        endHour: formData.get('task-end-time'),
        completed: false,
        user: userId
    }

    console.log("dados da tarefa: ", taskData);

    try {
        const res = await fetch('http://localhost:3000/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        });

        if (res.ok) {
            const result = await res.json();
            console.log('tarefa cadastrada com sucesso: ', result);
            // window.location.href = 'calendar.html';
        } else {
            const errorData = await res.json();
            console.error('Erro ao cadastrar: ', errorData.message);
        }
    } catch (error) {
        console.error('Erro na requisição: ', error);
    }
});