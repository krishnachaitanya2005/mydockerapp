import React from "react";
import { useLocation } from "react-router-dom";

function HelloPage() {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const name = query.get("name");

	return <h1>Hello, {name} 👋</h1>;
}

export default HelloPage;
