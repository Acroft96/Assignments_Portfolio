Project Overview: Node/Express/Mongo Backend Website

Description
This project focuses on creating a Node.js and Express backend integrated with MongoDB, designed to handle user account management and banking transactions. The backend supports a RESTful API, which will be utilized by a frontend to be developed in a later phase. The main functionalities include user registration, authentication, and account operations for checking and savings accounts.

Assignment Overview
The purpose of this assignment is to build the backend infrastructure for a banking application with the following capabilities:

User Account Management:
Create new user accounts with details such as first name, last name, email address (as username), phone number, and password.
Ensure email uniqueness and handle plain text passwords (security to be handled in future assignments).
Manage user roles (customer, manager, administrator), although roles are initially left blank.
Authentication:
Verify user login credentials (email and password) and return appropriate success or failure messages.
Account Operations:
Retrieve all user accounts, excluding passwords but including roles and account balances.
Display detailed information for a specific user based on the email address.
Update user roles.
Handle deposits into checking or savings accounts.
Process withdrawals from checking or savings accounts, ensuring no overdrafts.
Transfer funds between checking and savings within the same account, with overdraft protection.

RESTful API Routes
POST /create-account: 
Accepts a new account profile and initializes checking and savings balances to 0.
POST /login: 
Checks email/password pair and returns success or failure.
GET /users: 
Retrieves all user accounts.
GET /user/:email: 
Displays information for a specific account.
POST /update-role: 
Updates the role of a user based on their email.
POST /deposit: 
Deposits money into checking or savings.
POST /withdraw: 
Withdraws money from checking or savings.
POST /transfer: 
Transfers money between checking and savings within the same account.

Technologies Used
Node.js: Server-side runtime environment.
Express.js: Web framework for Node.js to handle routing and middleware.
MongoDB: NoSQL database to store user and account information.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
Postman: Tool for testing RESTful APIs.

Technical Challenges
Data Validation and Error Handling:
Ensuring that user inputs are validated and appropriate error messages are returned for invalid or duplicate data entries.
Database Operations:
Implementing efficient CRUD operations using Mongoose, managing schema definitions, and handling relational data (e.g., user accounts and transactions).
Transaction Logic:
Handling complex operations like deposits, withdrawals, and transfers with precision, ensuring no overdrafts and correct balance updates.
JSON Handling:
Ensuring that all API endpoints accept and return JSON data, requiring careful handling of request and response objects.

My Contributions
For this project, I was responsible for:
Backend Development:
Setting up the Node.js server and Express framework.
Designing and implementing RESTful API routes to handle user and account operations.
Database Integration:
Configuring MongoDB and Mongoose to store and manage user data.
Implementing schema definitions and data validation.
Authentication and Authorization:
Developing the login system and ensuring secure user authentication.
Testing and Debugging:
Using Postman to test all API routes, ensuring correct functionality and debugging issues as they arose.