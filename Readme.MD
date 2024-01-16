## 🛢Backend README

This repository contains the backend code for a Form Builder application that provides form integration without code. The application is built using Express, TypeScript, MongoDB, and other related technologies.

## Installation

**1. Clone the repository from GitHub:**

```bash 
git clone https://github.com/integration-tech/backend.git 
```

**2. Install dependencies:**


```bash 
npm install 
```

**3. Create a '.env' file in the root directory and set the required environment variables. Refer to the '.env.example' file for reference.**

## Usage
To start the server, run the following command:

```bash
npm start
```
This will start the server at 'http://localhost:8001/'.

For development with automatic restart on code changes, you can use:

```bash
npm run dev
```
## API Routes
## GET /:

Returns a simple "Hello World!" message.

## POST /register:

Registers a user. Requires a JSON body with user information.

## Project Structure
**src/:** Contains the source code.

- **api/v1/:**

  - **controllers/:** Contains controller logic for different routes.

  - **models/:** Defines MongoDB models.
 
  - **routers/:** Defines API routes using Express Router.

- **index.ts:** Entry point of the application.

## Configuration
The application uses the dotenv library for environment variable configuration. Create a .env file in the root directory with the following variables:

```bash
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
PORT=8001
```
## Scripts
**npm start:** Start the server using ts-node.

**npm run build:** Build the TypeScript code using tsc.

**npm run dev:** Start the server in development mode using nodemon.

## Dependencies
**Express:** Web framework for Node.js.

**Mongoose:** MongoDB object modeling tool.

**jsonwebtoken:** JSON Web Token (JWT) implementation.

**dotenv:** Loads environment variables from a '.env' file.

**body-parser:** Middleware to parse incoming request bodies.

## Development Dependencies
**typescript:** TypeScript compiler.

**ts-node:** TypeScript execution environment for Node.js.

**nodemon:** Monitor for changes and automatically restart the server.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

Author
Apurv Jha
Repository
GitHub Repository