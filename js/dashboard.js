const trips = [
    { date: "2024-04-10", origin: "Casa", destination: "Trabajo", driver: "Juan" },
    { date: "2024-03-09", origin: "Trabajo", destination: "Casa", driver: "Maria" },
    { date: "2024-04-08", origin: "Casa", destination: "Supermercado", driver: "Carlos" },
    { date: "2024-02-07", origin: "Supermercado", destination: "Casa", driver: "Laura" },
    { date: "2024-01-06", origin: "Casa", destination: "Parque", driver: "Pedro" },
    { date: "2024-04-05", origin: "Parque", destination: "Casa", driver: "Ana" },
    { date: "2023-20-04", origin: "Casa", destination: "Gimnasio", driver: "Roberto" },
    { date: "2023-04-03", origin: "Gimnasio", destination: "Casa", driver: "Elena" },
    { date: "2023-14-02", origin: "Casa", destination: "Restaurante", driver: "Sofía" },
    { date: "2022-09-01", origin: "Restaurante", destination: "Casa", driver: "Javier" }
];


// Mantener una referencia a la lista completa de viajes
const allTrips = trips.slice();

// Función para mostrar los últimos 4 viajes
function showLastTrips() {
    const lastTripsList = document.getElementById("last-trips-list");
    lastTripsList.innerHTML = ""; // Limpiar lista

    // Obtener los últimos 4 viajes
    const ultimos4Viajes = trips.slice(0, 4);

    // Mostrar los últimos 4 viajes en la lista
    ultimos4Viajes.forEach(viaje => {
        const listItem = document.createElement("li");
        listItem.textContent = `${viaje.date}: ${viaje.origin} - ${viaje.destination}, Conductor: ${viaje.driver}`;
        lastTripsList.appendChild(listItem);
    });
}

// Función para mostrar todos los viajes
function showAllTrips() {
    const lastTripsList = document.getElementById("last-trips-list");
    lastTripsList.innerHTML = ""; // Limpiar lista

    // Mostrar todos los viajes en la lista completa
    allTrips.forEach(viaje => {
        const listItem = document.createElement("li");
        listItem.textContent = `${viaje.date}: ${viaje.origin} - ${viaje.destination}, Conductor: ${viaje.driver}`;
        lastTripsList.appendChild(listItem);
    });
}

// Mostrar los últimos 4 viajes al cargar el dashboard
showLastTrips();