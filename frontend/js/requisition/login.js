const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const loginData = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    try {
        const res = await fetch('http://localhost:3000/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (res.ok) {
            const result = await res.json();
            console.log('Login bem sucedido', result);
            window.location.href = 'home.html';
        } else {
            const errorData = await res.json();
            console.error('Erro ao fazer login ', errorData.message);
        }
    } catch (error) {
        console.error('Erro na requisição: ', error);
    }
});