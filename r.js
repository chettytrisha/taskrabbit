function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Password must include uppercase, lowercase, number, and special character.");
        return false;
    }
    if (username.length < 3 || username.length > 15) {
        alert("Username must be between 3 and 15 characters.");
        return false;
    }
    return true;
}