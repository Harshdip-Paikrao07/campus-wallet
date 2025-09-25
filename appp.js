// Sample students data
const students = [
   
];

// Display students in table
const table = document.getElementById("students-table");
students.forEach(student => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.name}</td><td>₹${student.contribution}</td>`;
    table.appendChild(row);
});

// Calculate total expense
let totalExpense = students.reduce((sum, s) => sum + s.contribution, 0);
document.getElementById("total-expense").innerText = "₹" + totalExpense;

// Event details data
const events = {
   

// Show event details on click
function showEvent(eventName) {
    const detailsDiv = document.getElementById("event-details");
    const event = events[eventName];
    if(event) {
        detailsDiv.innerHTML = `<h3>${eventName}</h3>
                                <p>Items Bought: ${event.items.join(", ")}</p>
                                <p>Total Cost: ₹${event.cost}</p>`;
    }
}
