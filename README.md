# 🚀 Management System Server

## 📌 Overview
This is the backend server for the Management System project, built using **MongoDB** and **Express.js**. It provides APIs to manage companies and users.

## 📂 Repository
[🔗 GitHub Repository](https://github.com/papiabhowmik/management-system-server.git)

## 📖 API Documentation
You can find the detailed API documentation on Postman:
[📜 Postman Documentation](https://documenter.getpostman.com/view/39581114/2sAYdcsCJD)

## ⚙️ Setup Instructions
You can run the project on the live URL or locally.
Follow these steps to set up and run the project locally:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/papiabhowmik/management-system-server.git
cd management-system-server
```

### 2️⃣ Set Environment Variables
Create a `.env` file in the root directory and add the following variables:
```
PORT = Your PORT
MONGO_URL = mongodb+srv://<yourusername>:<YourPassword>@mydb.hclzo.mongodb.net/management_system
```

### 3️⃣ Install Dependencies
```sh
npm install
```

### 4️⃣ Run the Server
```sh
npm run start
```

## 🌐 API Endpoints

### ➕ Create a Company
**Endpoint:** `POST /api/v1/companies`
- **URL:** `https://management-system-server-red.vercel.app/api/v1/companies`
- **Body:**
```json
{
    "name": "Anjali Inc",
    "parentCompanyId": ""
}
```

### 👤 Create a User
**Endpoint:** `POST /api/v1/users`
- **URL:** `https://management-system-server-red.vercel.app/api/v1/users`
- **Body:**
```json
{
    "name": "Papia Bhowmik",
    "email": "bhowmikpapia7@gmail.com",
    "companyId": "67bb0195a270e130159198b8",
    "role": "CEO"
}
```

### 🏢 Get Company Details
**Endpoint:** `GET /api/v1/companies/{companyId}`
- **URL:** `https://management-system-server-red.vercel.app/api/v1/companies/67bb0195a270e130159198b8`

### 👥 Get User Details
**Endpoint:** `GET /api/v1/users/{userId}`
- **URL:** `https://management-system-server-red.vercel.app/api/v1/users/67bb0283a270e130159198bd`

### 🔍 Search
**Endpoint:** `GET /api/v1/search`
- **URL:** `https://management-system-server-red.vercel.app/api/v1/search?query=a&page=1`
- **Query Parameters:**
  - `query`: Search term (e.g., `a`)
  - `page`: Page number (e.g., `1`)

## 🤝 Contribution Guide
1. 🍴 Fork the repository.
2. 📥 Clone your fork.
3. 🌿 Create a new branch for your changes.
4. 💾 Commit and push your changes.
5. 🔃 Submit a pull request.

