// Datos de ejemplo con al menos 10 usuarios
const usuarios = [
    { nombre: "Usuario 1", viajes: 10, montoTotal: 150 },
    { nombre: "Usuario 2", viajes: 8, montoTotal: 120 },
    { nombre: "Usuario 3", viajes: 15, montoTotal: 200 },
    { nombre: "Usuario 4", viajes: 20, montoTotal: 250 },
    { nombre: "Usuario 5", viajes: 12, montoTotal: 180 },
    { nombre: "Usuario 6", viajes: 18, montoTotal: 220 },
    { nombre: "Usuario 7", viajes: 9, montoTotal: 130 },
    { nombre: "Usuario 8", viajes: 25, montoTotal: 300 },
    { nombre: "Usuario 9", viajes: 16, montoTotal: 210 },
    { nombre: "Usuario 10", viajes: 14, montoTotal: 170 },
    // Puedes agregar más usuarios si lo deseas
  ];
  
  // Función para ordenar usuarios por cantidad de viajes
  function ordenarPorViajes(a, b) {
    return b.viajes - a.viajes;
  }
  
  // Función para mostrar el dashboard
  function mostrarDashboard(usuarios) {
    // Ordenar usuarios por cantidad de viajes
    usuarios.sort(ordenarPorViajes);
  
    // Seleccionar el elemento donde se mostrará el dashboard
    const dashboardElement = document.getElementById("dashboard");
  
    // Limpiar cualquier contenido existente en el dashboard
    dashboardElement.innerHTML = "";
  
    // Crear una tabla para mostrar los datos
    const table = document.createElement("table");
    table.innerHTML = `
      <tr>
        <th>Usuario</th>
        <th>Viajes Realizados</th>
        <th>Monto Total</th>
      </tr>
    `;
  
    // Iterar sobre cada usuario y agregarlo a la tabla
    usuarios.forEach((usuario) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${usuario.nombre}</td>
        <td>${usuario.viajes}</td>
        <td>${usuario.montoTotal}</td>
      `;
      table.appendChild(row);
    });
  
    // Agregar la tabla al dashboard
    dashboardElement.appendChild(table);
  }
  
  // Llamar a la función para mostrar el dashboard
  mostrarDashboard(usuarios);
  