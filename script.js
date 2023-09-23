const form = document.getElementById("signupForm");
const error = document.getElementById("errorMessage");
const signup = document.getElementById("sign-up");

function generateAccessToken() {
    const letters = "0123456789ABCDE";
    let token = '';
    for (let i = 0; i < 16; i++) {
        token += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return token;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;
    if (password === confirmPassword) {
        const accessToken = generateAccessToken();
        const user = { username, email, password, accessToken };
        localStorage.setItem("user", JSON.stringify(user));
        error.textContent = "Signup successful. Redirecting to Profile page...";
        error.style.color = "green";
        setTimeout(() => {
            window.location.href = 'profile.html';
        }, 2000);
    } else {
        error.textContent = 'Please provide Correct password.';
        error.style.backgroundColor = "red";
        error.style.color = "black";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        window.location.href = 'profile.html';
    }
});

signup.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'index.html';
})