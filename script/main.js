// Al cargar la página, verificar si hay sesión activa
window.onload = () => {
    const sesion = sessionStorage.getItem('sesionActiva');
    if (sesion === 'true') {
        document.getElementById('auth-zone').innerHTML = 
            `<button onclick="cerrarSesion()" class="btn-logout">Cerrar Sesión</button>`;
    }
    renderCatalog();
};

// RF-L03: Cerrar Sesión
function cerrarSesion() {
    sessionStorage.removeItem('sesionActiva');
    location.reload();
}

// Navegación entre módulos
function showMod(id) {
    document.querySelectorAll('.module').forEach(m => m.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

// Función de validación de seguridad
function estaLogueado() {
    if (sessionStorage.getItem('sesionActiva') !== 'true') {
        alert("🔒 Acceso Restringido: Debes iniciar sesión para realizar esta acción.");
        window.location.href = "paginas/iniciar.html";
        return false;
    }
    return true;
}

// Lógica de Registro (RF-R01, RF-R02)
function handleRegistro(e) {
    e.preventDefault();
    if (!estaLogueado()) return;

    const tabla = document.getElementById('lista-tabla');
    const fila = `<tr>
        <td>${document.getElementById('d-nombre').value}</td>
        <td>${document.getElementById('m-nombre').value}</td>
        <td>${document.getElementById('m-especie').value}</td>
    </tr>`;
    
    tabla.innerHTML += fila;
    alert("✅ Registro guardado con éxito.");
    e.target.reset();
}

// Lógica de Agenda (RF-A01)
function handleAgenda(e) {
    e.preventDefault();
    if (!estaLogueado()) return;
    alert("📅 Cita agendada correctamente.");
    e.target.reset();
}

// Lógica de Carrito (RF-C01)
function renderCatalog() {
    const catalog = document.getElementById('catalog');
    if (!catalog) return;
    const prods = [
        {id: 1, n: "Shampoo Mascota", p: 15},
        {id: 2, n: "Cepillo Pro", p: 10},
        {id: 3, n: "Hueso Juguete", p: 5}
    ];
    prods.forEach(p => {
        catalog.innerHTML += `
            <div class="product-card">
                <h4>${p.n}</h4>
                <p>$${p.p}</p>
                <button onclick="intentarCompra(${p.p})">Comprar</button>
            </div>`;
    });
}

function intentarCompra(precio) {
    if (!estaLogueado()) return;
    const totalEl = document.getElementById('total');
    let actual = parseInt(totalEl.innerText);
    totalEl.innerText = actual + precio;
}