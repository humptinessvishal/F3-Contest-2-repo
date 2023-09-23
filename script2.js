const logoutButton = document.getElementById("btn2");

document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const username = document.getElementById("username2");
    const email = document.getElementById("email2");
    const token = document.getElementById("token");
    const password = document.getElementById("password2");

    if (user) {
        username.textContent = `Full Name: ${user.username}`;
        email.textContent = `Email: ${user.email}`;
        token.textContent = `Token: ${user.accessToken}`;
        password.textContent = `Password: ${user.password}`;
    } else {
        window.location.href = 'index.html';
    }
});

logoutButton.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.removeItem("user");
    alert("You are logged out. Please log in to access this page.");
    window.location.href = 'index.html';
});
