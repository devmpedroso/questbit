const userId = localStorage.getItem('userId');
const logoutButton = document.getElementById('logout-account-button');

logoutButton.onclick = function() {
    localStorage.setItem('userId', '');
    window.location.href = './login.html'
}

    