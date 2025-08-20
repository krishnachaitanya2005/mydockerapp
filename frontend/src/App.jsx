import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		const username = e.target.username.value;
		const password = e.target.password.value;

		fetch("/api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, password }),
		})
			.then((res) => res.json())
			.then((data) => {
				navigate(`/hello?name=${username}`);
			})
			.catch((err) => console.error("Login error:", err));
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Register or Login</h2>
			<input name="username" placeholder="Username" required />
			<input name="password" type="password" placeholder="Password" required />
			<button type="submit">Submit</button>
		</form>
	);
}

export default App;
