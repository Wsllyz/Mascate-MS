const hours = ["12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00", "14:20", "14:40", "15:00", "15:20", "15:40", "16:00", "16:20", "16:40", "17:00", "17:20", "17:40", "18:00"];
const tables = ["Mesa 1", "Mesa 2", "Mesa 3", "Mesa 4", "Mesa 5"];
let reservations = {};
let waitlists = {};

function initializeReservations() {
    tables.forEach(table => {
        reservations[table] = {};
        waitlists[table] = [];
        hours.forEach(hour => {
            reservations[table][hour] = "disponível";
        });
    });
}

function renderTables() {
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = '';

    tables.forEach(table => {
        const tableCard = document.createElement('div');
        tableCard.className = 'table-card';

        const tableTitle = document.createElement('h3');
        tableTitle.textContent = table;
        tableCard.appendChild(tableTitle);

        hours.forEach(hour => {
            const hourDiv = document.createElement('div');
            hourDiv.className = reservations[table][hour];
            hourDiv.textContent = `${hour} - ${reservations[table][hour]}`;
            hourDiv.onclick = () => handleReservation(table, hour);
            tableCard.appendChild(hourDiv);
        });

        tableContainer.appendChild(tableCard);
    });
}

function handleReservation(table, hour) {
    const currentStatus = reservations[table][hour];
    if (currentStatus === "disponível") {
        const clientName = prompt("Digite o nome do cliente:");
        if (clientName) {
            reservations[table][hour] = `reservado para ${clientName}`;
            renderTables();
        }
    } else {
        const clientName = prompt("Horário já reservado ou ocupado! Digite o nome do cliente para adicionar à fila de espera:");
        if (clientName) {
            const waitTime = calculateWaitTime(table, hour);
            addToWaitlist(table, clientName, waitTime);
        }
    }
}

function calculateWaitTime(table, baseHour) {
    let [baseHours, baseMinutes] = baseHour.split(':').map(Number);
    const additionalMinutes = (waitlists[table].length + 1) * 20;

    let totalMinutes = baseMinutes + additionalMinutes;
    let additionalHours = Math.floor(totalMinutes / 60);
    let finalMinutes = totalMinutes % 60;
    let finalHours = baseHours + additionalHours;

    const formattedHours = finalHours.toString().padStart(2, '0');
    const formattedMinutes = finalMinutes.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
}

function addToWaitlist(table, clientName, waitTime) {
    waitlists[table].push({ name: clientName, waitTime });
    renderWaitlist();
}

function renderWaitlist() {
    const waitlistContainer = document.getElementById('waitlist');
    waitlistContainer.innerHTML = '';

    tables.forEach(table => {
        const tableWaitlist = waitlists[table];
        if (tableWaitlist.length > 0) {
            const tableWaitlistTitle = document.createElement('h3');
            tableWaitlistTitle.textContent = table;
            waitlistContainer.appendChild(tableWaitlistTitle);

            tableWaitlist.forEach(client => {
                const waitlistItem = document.createElement('li');
                waitlistItem.className = 'waitlist-item';
                waitlistItem.textContent = `${client.name} - Esperando até ${client.waitTime}`;
                waitlistContainer.appendChild(waitlistItem);
            });
        }
    });
}

document.getElementById('waitlist-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const clientName = document.getElementById('client-name').value;
    const currentTime = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const waitTime = calculateWaitTime(currentTime);
    addToWaitlist(clientName, waitTime);
    document.getElementById('client-name').value = '';
});

initializeReservations();
renderTables();
renderWaitlist();
