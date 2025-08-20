# 🐳 Docker Practice Project - Login App

This project is a simple **Login Application** built with **Vite + React (Frontend)**, **Node.js (Backend)**, and **MongoDB (Database)**, all containerized using **Docker**.  

On successful login, the app greets the user with:

`Hello <username>`

User data is stored dynamically in MongoDB.  
The project also includes **Mongo Express** for easy database management.

## 🚀 Features
- **Frontend**: Vite + React login page  
- **Backend**: Node.js with Express API  
- **Database**: MongoDB with persistent storage  
- **Admin Panel**: Mongo Express to manage DB  
- Fully Dockerized with `docker-compose`  
- Available as a prebuilt image on Docker Hub  


## 📦 Getting Started

You can run this project in **two ways**:

### 1️⃣ Pull Prebuilt Image from Docker Hub
To quickly try the backend app:

```bash
docker pull krishnachaitanya2005/mydockerapp
docker run -p 3000:3000 krishnachaitanya2005/mydockerapp
```
Backend will now run at:
`http://localhost:3000`

### 2️⃣ Build and Run with Docker Compose (Recommended)
Clone this repository and navigate to the root folder:
```bash
git clone https://github.com/krishnachaitanya2005/mydockerapp.git
cd mydockerapp
```
Run all services (frontend, backend, MongoDB, and Mongo Express):
```bash
docker-compose up --build
```
This will start:
Frontend (Vite React) → `http://localhost:5173`
Backend (Node.js) → `http://localhost:3000`
MongoDB → Internal port `27017`
Mongo Express → `http://localhost:8081`

### 🛠️ Usage
Open `http://localhost:5173` in your browser.  
Enter a username and password.  
On login, you’ll see:  
`Hello <username>`  
Data is stored in MongoDB.  
To check stored users, open Mongo Express at: `http://localhost:8081`  

### 🧹 Stopping the App
To stop all containers:  
```bash
docker-compose down
```
### 🐳 Docker Hub  
You can also find this project’s backend image on Docker Hub:  
👉 `krishnachaitanya2005/mydockerapp`

### 📌 Notes  
Default MongoDB credentials:  
**Username:** `delta_admin`  
**Password:** `delta_password`  
Frontend runs on 5173 (Vite default)  
Backend runs on 3000  
MongoDB runs on 27017  
Mongo Express runs on 8081  

### 🖥️ Tech Stack  
**Frontend**: React, Vite, JavaScript  
**Backend:** Node.js, Express  
**Database:** MongoDB, Mongo Express  
**Containerization:** Docker, Docker Compose  
