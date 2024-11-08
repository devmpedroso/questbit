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
            localStorage.setItem('userId', result.userId); // Armazena o userId no localStorage
            localStorage.setItem('userName', result.userName);
            window.location.href = 'home.html'; // Redireciona para a página principal
        } else {
            const errorData = await res.json();
            console.error('Erro ao fazer login', errorData.message);

            const loginError = document.getElementById('auth-login');
            loginError.innerHTML = ''; 
            const paragraph = document.createElement('p');
            paragraph.classList.add('sl-paragraph');
            paragraph.textContent = "Erro ao realizar login. E-mail e/ou senha inválidos!";
            loginError.appendChild(paragraph);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
});
