

const user = JSON.parse(localStorage.getItem('user'));
if (!user) {
    history.pushState(null, '', 'login.html');
    location.reload();
} else {
    document.getElementById('user-name').textContent = `Hello My Friend 🤩 !  ${user.name}`;
    document.getElementById('user-real-name').textContent = user.name;
    document.getElementById('user-email').textContent = user.email;
}

function logout() {
    localStorage.removeItem('user');

    history.pushState(null, '', 'login.html');
    location.reload();
}