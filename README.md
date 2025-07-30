# Advanced Database Systems Project - Group 1

## Project Title:

**Bank Marketing Dataset CRUD API**

## Description:

This project is a full-stack implementation of a RESTful API designed to manage a **Bank Marketing Dataset** using **Node.js**, **Express**, and **PostgreSQL**. It also includes full **API documentation with Swagger UI**.


## Technologies Used:

* **Node.js + Express** – Backend server
* **PostgreSQL** – Relational database
* **Swagger (OpenAPI 3.0)** – API documentation
* **pg** – PostgreSQL client for Node.js
* **dotenv** – Environment variable management
* **CORS + Body-Parser** – Middleware for API requests

## Features:

* Add a new client
* Get all clients
* Get a client by ID
* Update client information
* Delete client
* Timestamp trigger for `last_modified`
* Indexed columns for optimized querying

## API Documentation:

Run the project locally and visit:
**[http://localhost:3000/docs](http://localhost:3000/docs)**
You will find the full Swagger UI with endpoint testing.

## How to Run Locally:

### 1. Clone the repository

```bash
git clone https://github.com/BSCLMR147323/Group-1.git
cd Group-1
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

Create a `.env` file in the root directory with your DB settings:

```env
DB_USER=your_db_user
DB_HOST=localhost
DB_DATABASE=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=5432
PORT=3000
```

### 4. Start the server

```bash
node index.js
```

### 5. Import Database

Use `pgAdmin` or `psql` to import the dataset (`bank-full.csv`) into the `clients` table.
Make sure your table matches the fields defined in `clientHandler.js`.

---

## Folder Structure

```
├── views/               # API routes (clientAPI.js)
├── Handler/             # Controller logic (clientHandler.js)
├── db/                  # PostgreSQL pool setup (db.js)
├── docs/                # Swagger config (swagger.js)
├── sql/                 # SQL queries
├── index.js             # Entry point
├── .env                 # Environment variables
├── .gitignore├── .env
└── README.md
```

---

## GitHub Repository

[Group 1 GitHub Repo](https://github.com/BSCLMR147323/Group-1)

---

