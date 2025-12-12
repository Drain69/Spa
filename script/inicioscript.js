const loginForm = document.getElementById('login-form');
const loginInputs = document.getElementById('login-inputs');
const successMsg = document.getElementById('success-msg');
const loginTitle = document.getElementById('login-title');
const passInput = document.getElementById('pass');
const togglePassword = document.getElementById('togglePassword');
const errorMsg = document.getElementById('error-msg');

// 1. Mostrar/Ocultar contraseña
togglePassword.addEventListener('click', () => {
    const isPass = passInput.type === 'password';
    passInput.type = isPass ? 'text' : 'password';
    togglePassword.textContent = isPass ? '🙈' : '👁️';
});

// 2. Validación
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = document.getElementById('user').value;
    const clave = passInput.value;

    // Requerimientos: 8+ carac, 1 Mayús, 1 Núm, 1 Símbolo
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (usuario === "admin" && clave === "Admin123*" && regex.test(clave)) {
        // Guardar sesión
        sessionStorage.setItem('sesionActiva', 'true');

        // Mostrar éxito
        loginTitle.classList.add('hidden');
        loginInputs.classList.add('hidden');
        successMsg.classList.remove('hidden');
    } else {
        errorMsg.textContent = "Error: Verifica usuario o requisitos de clave.";
        errorMsg.classList.remove('hidden');
    }
});