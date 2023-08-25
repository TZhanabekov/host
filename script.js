// Mock AJAX call to get coffee machines from the database
function fetchCoffeeMachines() {
    // This is a mock database query. In a real scenario, you'd make an actual AJAX call.
    return [
        { name: "Machine A", description: "Description A", brand: "Brand A", model: "Model A" },
        { name: "Machine B", description: "Description B", brand: "Brand B", model: "Model B" }
        // ... more machines
    ];
}

// Populate coffee machines on the page
function populateCoffeeMachines() {
    const machines = fetchCoffeeMachines();
    const machineList = document.getElementById('machineList');
    
    machines.forEach(machine => {
        const machineDiv = document.createElement('div');
        machineDiv.innerHTML = `
            <h2>${machine.name}</h2>
            <p>${machine.description}</p>
            <strong>Brand:</strong> ${machine.brand} | <strong>Model:</strong> ${machine.model}
        `;
        machineList.appendChild(machineDiv);
    });
}

populateCoffeeMachines();

// TODO: Implement filter functionality using the brandFilter and modelFilter elements
