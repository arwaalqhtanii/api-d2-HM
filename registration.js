function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');

    errorDiv.textContent = '';
    errorDiv.classList.add('d-none');

    if (name.length < 5) {
        errorDiv.textContent = "Name must be at least 5 characters long.";
        errorDiv.classList.remove('d-none'); 
        return;
    }
    if (!validateEmail(email)) {
        errorDiv.textContent = "Please enter a valid email address.";
        errorDiv.classList.remove('d-none');
        return;
    }
    if (password.length < 8) {
        errorDiv.textContent = "Password must be at least 8 characters long.";
        errorDiv.classList.remove('d-none'); 
        return;
    }

    const userData = {
        name: name,
        email: email,
        password: password
    };

    fetch('https://66e7e6bbb17821a9d9da704c.mockapi.io/home', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            return response.json(); 
        } else {
            errorDiv.textContent = "Registration failed. Please try again.";
            errorDiv.classList.remove('d-none'); 
            return Promise.reject();
        }
    })
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'welcome.html';
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}