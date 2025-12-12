// Función para guardar y mostrar los datos
function guardarRegistroCompleto() {
    // Obtener datos del Dueño (RF-R01)
    const nombreDueño = document.getElementById('d-nombre').value;
    const telDueño = document.getElementById('d-telefono').value;
    const correoDueño = document.getElementById('d-correo').value;

    // Obtener datos de la Mascota (RF-R02)
    const nombreMascota = document.getElementById('m-nombre').value;
    const especieMascota = document.getElementById('m-especie').value;
    const razaMascota = document.getElementById('m-raza').value;

    // Validación simple
    if (nombreDueño === "" || nombreMascota === "") {
        alert("Por favor, completa los campos principales de dueño y mascota.");
        return;
    }

    // Crear la fila para la tabla
    const tabla = document.getElementById('lista-mascotas');
    const nuevaFila = document.createElement('tr');

    nuevaFila.innerHTML = `
        <td>${nombreDueño}</td>
        <td>${telDueño}</td>
        <td>${nombreMascota}</td>
        <td>${especieMascota} (${razaMascota})</td>
    `;

    // Agregar a la tabla
    tabla.appendChild(nuevaFila);

    // Limpiar formularios
    document.getElementById('form-dueño').reset();
    document.getElementById('form-mascota').reset();

    alert("✅ Registro guardado exitosamente.");
}