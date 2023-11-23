$(document).ready(function () {
    // Simulated user data array (replace with server logic)
    var userData = [];

    // Handle Sign Up form submission
    $('#form').submit(function (event) {
      event.preventDefault();

      // Get form data
      var firstName = $('input[name="firstName"]').val();
      var email = $('input[name="email"]').val();
      var password = $('input[name="password"]').val();

      // Simple client-side validation
      if (!firstName  !email  !password) {
        alert('Please fill in all fields.');
        return;
      }

      // Check if the email is already registered
      var existingUser = userData.find(function (user) {
        return user.email === email;
      });

      if (existingUser) {
        alert('Email already registered. Please use a different email.');
        return;
      }

      // Simulate storing user data on the client side (replace with server logic)
      userData.push({ firstName: firstName, email: email, password: password });

      // Show a success message
      alert('Signed up successfully!');

      // You can redirect the user after showing the alert
      // window.location.href = 'index.html';
    });

    // Handle Login form submission
    $('#login-form').submit(function (event) {
      event.preventDefault();

      // Get login data
      var loginEmail = $('input[name="loginEmail"]').val();
      var loginPassword = $('input[name="loginPassword"]').val();

      // Find the user in the simulated data
      var user = userData.find(function (user) {
        return user.email === loginEmail && user.password === loginPassword;
      });

      if (user) {
        // Successful login
        window.location.href = 'index.html';
      } else {
        // Incorrect email or password
        alert('Incorrect email or password. Please try again.');
      }
    });
  });