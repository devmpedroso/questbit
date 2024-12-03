window.onload = function() {
    const userId = localStorage.getItem('userId');
    if (userId === '') {
        // Redireciona para a página de login se não estiver logado
        window.location.href = '../../frontend/pages/login.html';
    }
};

