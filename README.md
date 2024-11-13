# FinTracker App Server

This is the backend of the FinTracker application, providing APIs for managing user spaces, transactions, and financial data. It is built using Express, with a PostgreSQL database and Sequelize ORM for data management.

## Getting Started

To set up and run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/neilchauhan2/fintracker-server
   cd fintracker-server
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory of the project and add the following variables:
   ```bash
   DATABASE_URL=<url_to_your_postgresql_database>
   PORT=<port_number_for_server>
   ```
4. **Run the server locally:**
   ```bash
   npm run dev
   ```

## Project Structure

- `/models`: This folder contains the DB schema for Space and Transaction models.
- `/routes`: This folder contains all the routes for the server app.
  `/controllers`: This folder contains all the DB methods for handling DB operations.
- `/config`: This folder contains the database configuration file.

## Technologies Used

- **Node.js** with **Express**
- **PostgreSQL** for database
- **Sequelize ORM** for data models and queries
- **dotenv** for environment variables management
- **cors** for handling cross-origin requests
- **nodemon** for automatic server restarts (as a dev dependency).
