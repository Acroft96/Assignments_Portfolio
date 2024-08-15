Project Overview: Expanded Banking App

Description
This project involves expanding a previously implemented basic banking app into a more comprehensive application using the MERN (MongoDB, Express, React, Node.js) stack. The project is divided into two main parts: designing a clean and functional React frontend, and then implementing the backend functionalities. The app includes a robust login system, role-based access control, and comprehensive banking features.

Frontend Implementation
Login System:
Users log in with a username and password.
Verification of credentials is handled, and feedback is provided on success or failure.
User Roles:
Administrator:
Access to all screens.
Can manage roles (elevate/demote users).
Customer:
Assigned a bank customer ID number.
Can deposit/withdraw money into/from savings, checking, and investment accounts.
Can transfer money between their accounts.
View full and individual account transaction histories.
Employee:
Can view any customer’s account, perform deposits/withdrawals, and transfer money between accounts.
Can transfer money to another customer's account with their ID.
Can create new accounts.
Clean UI

The frontend uses a consistent theme and CSS, likely utilizing Bootstrap for a polished look.
The design ensures proper alignment and justification of items, spacious textboxes, and an overall professional appearance.

Backend Implementation
User Management:
Registration: Create new accounts with hashed passwords (SHA-256) stored in the database.
Login: Verify credentials by hashing the input password and comparing it with the stored hash.
Role Management: Administrators can change user roles.
Banking Operations:
Deposit/Withdrawal: Users can deposit or withdraw money from their accounts.
Transfers: Users can transfer money between their accounts and employees can transfer money to other customers' accounts.
Transaction History: Display full and individual account transaction histories.
Security

Passwords are hashed using SHA-256 before storage.
Sessions are managed securely, with session info stored in MongoDB.

RESTful API Routes
POST /register: Register a new user.
POST /login: Authenticate user and start a session.
POST /logout: End the user session.
POST /role: Update user roles.
POST /deposit: Deposit money into an account.
POST /withdraw: Withdraw money from an account.
POST /transfer: Transfer money between accounts.
GET /transactions: Retrieve transaction history.

Technologies Used
MongoDB: Database to store user and account information.
Express.js: Web framework for building the backend and handling routes.
React: Frontend library for building user interfaces and managing state.
Node.js: Server-side runtime environment.
Mongoose: ODM for MongoDB and Node.js.
Bootstrap: CSS framework for styling the frontend.
Express-Session: Middleware for managing user sessions.

Technical Challenges
Session Management:
Implementing secure and efficient session management using express-session and storing session data in MongoDB.
Password Hashing:
Hashing passwords using SHA-256 and securely storing them in the database.
Role-Based Access Control:
Implementing logic to handle different user roles and permissions.
UI Consistency:
Ensuring the frontend design is consistent, user-friendly, and visually appealing.
State Management in React:
Managing component state and props efficiently to reflect real-time changes in the user interface.

My Contributions
For this project, I was responsible for the Customer section:
Account Management:
Implemented the features allowing customers to deposit, withdraw, and transfer money between their savings, checking, and investment accounts.
Ensured that transactions were reflected accurately in the customer's account balances.
Transaction History:
Developed the functionality to display both full and individual account transaction histories.
Included date times and money changes for each transaction to provide clear and detailed records for the customers.
User Interface:
Designed and implemented the UI components for the customer dashboard, ensuring a clean and intuitive layout.
Used Bootstrap for consistent styling and professional appearance.
State Management:
Managed the state within the React components to ensure real-time updates and accurate data display.
Implemented logic to handle user interactions and data fetching from the backend.