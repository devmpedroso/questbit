const form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const userData = {
        name: formData.get('name'), // Alterado de 'username' para 'name'
        email: formData.get('email'),
        password: formData.get('password')
    };

    console.log('Dados do usuário:', userData); // Log dos dados para verificar

    try {
        const res = await fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (res.ok) {
            const result = await res.json();
            console.log('Usuário cadastrado com sucesso: ', result);
            window.location.href = 'login.html';
        } else {
            const errorData = await res.json();
            console.error('Erro ao cadastrar: ', errorData.message);
        }
    } catch (error) {
        console.error('Erro na requisição: ', error);
    }
});
