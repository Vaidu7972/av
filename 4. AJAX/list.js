document.addEventListener('DOMContentLoaded', function() {
    const tbody = document.querySelector('#usersTable tbody');
    
    // Get users from local storage
    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    if (users.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" style="text-align: center;">No users registered yet.</td></tr>';
        return;
    }

    // Loop through users array and append to table
    users.forEach(user => {
        const tr = document.createElement('tr');
        
        const tdName = document.createElement('td');
        tdName.textContent = user.name;
        
        const tdEmail = document.createElement('td');
        tdEmail.textContent = user.email;
        
        const tdPhone = document.createElement('td');
        tdPhone.textContent = user.phone;

        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdPhone);

        tbody.appendChild(tr);
    });
});
