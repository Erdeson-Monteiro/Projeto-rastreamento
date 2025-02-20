
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "admin@example.com" && password === "1234") {
        alert("Login bem-sucedido!");
    } else {
        alert("E-mail ou senha incorretos.");
    }
});
