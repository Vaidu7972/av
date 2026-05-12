document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const messageEl = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');

    const userData = {
        name: name,
        email: email,
        phone: phone
    };

    // UI Feedback
    submitBtn.textContent = 'Registering...';
    submitBtn.disabled = true;

    // Simulate AJAX POST using fetch (we use JSONPlaceholder as a fake API)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        // Upon successful AJAX POST, save to Local Storage
        let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        
        // Push new user to array
        users.push({
            id: data.id || Date.now(),
            name: userData.name,
            email: userData.email,
            phone: userData.phone
        });

        // Save back to local storage
        localStorage.setItem('registeredUsers', JSON.stringify(users));

        messageEl.textContent = 'Registration successful!';
        messageEl.className = 'success';
        
        // Reset form
        document.getElementById('registrationForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        messageEl.textContent = 'Registration failed due to network error.';
        messageEl.className = 'error';
    })
    .finally(() => {
        submitBtn.textContent = 'Register via AJAX';
        submitBtn.disabled = false;
    });
});
