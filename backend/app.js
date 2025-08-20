const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (Make sure it's running)
mongoose
	.connect(
		"mongodb://delta_admin:delta_password@mongo:27017/sample_db?authSource=admin"
	)
	.then(() => console.log("✅ MongoDB connected"))
	.catch((err) => console.error("MongoDB connection error:", err));

// Schema & Model
const userSchema = new mongoose.Schema({
	username: String,
	password: String,
});
const User = mongoose.model("User", userSchema);

// POST /login
app.post("/login", async (req, res) => {
	const { username, password } = req.body;

	try {
		let user = await User.findOne({ username });

		if (!user) {
			user = new User({ username, password });
			await user.save();
			console.log(`✅ New user created: ${username}`);
		}

		res.json({ message: `Hello, ${user.username}` });
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).json({ message: "Server error" });
	}
});

app.listen(port, () => {
	console.log(`🚀 Server running on http://localhost:${port}`);
});
