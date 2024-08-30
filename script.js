document.getElementById('login-form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please enter both username and password.');
        event.preventDefault(); // Prevent form submission
    } else {
        // Store username and password in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Redirect to next page
        window.location.href = 'next-page.html';
    }
});