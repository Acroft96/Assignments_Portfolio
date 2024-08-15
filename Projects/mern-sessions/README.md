Project Overview: Full MERN Stack Application with Session Tracking

Description
This project aims to implement a fully functioning MERN (MongoDB, Express, React, Node.js) stack application with session tracking to manage user authentication and banking transactions. The application includes user registration, login, logout, and account management features, and it stores session information in MongoDB. This project builds upon previous assignments by adding a React frontend to interact with the existing backend routes.

Assignment Overview
Backend Enhancements:
Session Tracking:
Implement session tracking for registration and login routes, storing the user's ID in req.session.id.
Add a logout route to destroy the session.
Frontend Implementation:
Account Registration Page:
Collects user information: first name, last name, email, phone number, and password.
Ensures unique email addresses.
Initializes accounts with 0 in savings and checking.
Displays an account summary page on successful registration or an error message if registration fails.
Login Page:
Authenticates users using email and password.
Redirects to account summary on successful login or shows an error message on failure.
Logout Page:
Destroys the user session and redirects to the login page.
Account Summary Page:
Displays user's first name, last name, email, and phone number.
Retrieves user information from the backend based on session data.
Redirects to login if the user is not authenticated.
Account Balance Page:
Shows account balances for checking and savings.
Allows users to deposit or withdraw money, with restrictions on overdrafts.
Redirects to account summary on successful transactions or login if the user is not authenticated.

RESTful API Routes
POST /register: Creates a new user account.
POST /login: Authenticates user and sets session.
POST /logout: Destroys the user session.
GET /account-summary: Retrieves user account summary.
GET /account-balance: Retrieves account balances.
POST /deposit: Deposits money into checking or savings.
POST /withdraw: Withdraws money from checking or savings.

Technologies Used
MongoDB: Database to store user and session information.
Express.js: Web framework for building the backend and handling routes.
React: Frontend library for building user interfaces and managing state.
Node.js: Server-side runtime environment.
Mongoose: ODM for MongoDB and Node.js.
Express-Session: Middleware to manage user sessions.

Technical Challenges
Session Management:
Implementing secure and efficient session management using express-session and storing session data in MongoDB.
Form Validation and Error Handling:
Ensuring all forms on the frontend are validated before submission and handling errors gracefully, providing meaningful feedback to users.

RESTful API Integration:
Creating and consuming RESTful API routes, ensuring smooth communication between the React frontend and Express backend.
User Authentication and Authorization:
Implementing robust authentication and protecting routes to ensure that only authenticated users can access certain pages.
State Management in React:
Managing component state and props efficiently to reflect real-time changes in the user interface.

My Contributions
For this project, I was responsible for:
Backend Development:
Enhancing the existing Node.js and Express backend to include session tracking and additional routes for login, logout, and user information retrieval.
Frontend Development:
Building React components and pages for user registration, login, account summary, and account balance management.
Ensuring seamless interaction between the frontend and backend using RESTful APIs.
Session Management:
Implementing session handling in the backend and integrating it with MongoDB to store session data securely.
Testing and Debugging:
Using Postman to test API routes and ensure correct functionality.
Debugging frontend and backend issues to ensure smooth user experience.