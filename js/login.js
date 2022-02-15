//Check Valid User Email and Password
document.getElementById('login-submit').addEventListener('click', function() {
    // get User Emails
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // set condition
    if (userEmail == 'meraj@gmail.com' && userPassword == 'meraj') {
        window.location.href = 'banking.html';
    }
})