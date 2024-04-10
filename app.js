/** @format */

document.addEventListener('DOMContentLoaded', function () {
	const signupForm = document.getElementById('signupForm');
	const signinForm = document.getElementById('signinForm');

	if (signupForm) {
		signupForm.addEventListener('submit', function (e) {
			e.preventDefault();
			const username = document.getElementById('username').value;
			const password = document.getElementById('password').value;

			const dateOfBirth = document.getElementById('dateOfBirth').value;
			const gender = document.getElementById('gender').value;
			const favoriteGenre = document.getElementById('favoriteGenre').value;

			// Store user data in localStorage
			localStorage.setItem(
				username,
				JSON.stringify({ password, dateOfBirth, gender, favoriteGenre })
			);
			alert('Signup successful. Please login.');
			window.location.href = 'signin.html';
		});
	}

	if (signinForm) {
		signinForm.addEventListener('submit', function (e) {
			e.preventDefault();
			const username = document.getElementById('loginUsername').value;
			const password = document.getElementById('loginPassword').value;

			const userData = JSON.parse(localStorage.getItem(username));
			if (userData && userData.password === password) {
				// Simulate user session
				sessionStorage.setItem('user', username);
				alert('Login successful!');
				window.location.href = 'blog.html'; // Redirect to a dashboard or home page
			} else {
				alert('Login failed! Please check your username and password.');
			}
		});
	}
});
