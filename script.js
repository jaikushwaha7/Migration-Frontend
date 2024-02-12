window.addEventListener('load', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const option1 = urlParams.has('option1');
    const option2 = urlParams.has('option2');
    const option3 = urlParams.has('option3');

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Option 1: ${option1}</p>
                           <p>Option 2: ${option2}</p>
                           <p>Option 3: ${option3}</p>`;
});
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the username and password values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if the username and password are correct (you would replace this with your own authentication logic)
        const isLoggedIn = authenticateUser(username, password);

        if (isLoggedIn) {
            // Redirect to the next page (checkbox page)
            window.location.href = 'checkbox-page.html';
        } else {
            // Display an error message or handle unsuccessful login
            alert('Invalid username or password. Please try again.');
        }
    });

    // Dummy authentication function - replace this with your own authentication logic
    function authenticateUser(username, password) {
        // Dummy username and password for demonstration purposes
        const validUsername = 'user';
        const validPassword = 'password';

        // Check if the entered username and password match the valid credentials
        return username === validUsername && password === validPassword;
    }
});
function checkRequirements() {
    const urlInput = document.getElementById('urlInput').value;
    
    // Check if URL is empty
    if (urlInput.trim() === '') {
        alert('Please enter a valid URL.');
        return;
    }

    // Check if URL starts with 'https://'
    if (!urlInput.startsWith('https://')) {
        alert('URL must start with "https://".');
        return;
    }

    // Check if URL ends with '.com'
    if (!urlInput.endsWith('.com')) {
        alert('URL must end with ".com".');
        return;
    }

    // All requirements met, show pop-up message
    alert('Requirements completed successfully!');
}
