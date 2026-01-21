Wanderlust
A full-stack web application for travel enthusiasts to share and discover listings of places to stay, built with Node.js, Express, MongoDB, and EJS.

Features
User authentication (signup, login, logout) using Passport.js
Create, view, edit, and delete listings
Upload images to Cloudinary for listings
Leave and delete reviews on listings
Responsive UI with Bootstrap
Flash messages for user feedback
Data validation with Joi
Session management
Installation
Clone the repository:
git clone <repository-url>
cd major_project
Install dependencies:
npm install
Set up environment variables:
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Create a .env file in the root directory with the following:
Start MongoDB locally or update the connection string in app.js.
Run the application:
npm start
Open your browser and navigate to http://localhost:8080.

Usage
Visit the home page to see all listings.
Sign up or log in to create new listings, edit existing ones, or leave reviews.
Use the navigation bar to access different sections.
Technologies Used
Backend: Node.js, Express.js
Database: MongoDB with Mongoose
Authentication: Passport.js with Local Strategy
Templating: EJS with ejs-mate
Validation: Joi
File Upload: Multer with Cloudinary
Styling: Bootstrap, Font Awesome
Other: connect-flash, express-session, method-override
Project Structure
app.js: Main application file
controllers/: Route handlers
models/: Mongoose schemas
routes/: Express routes
views/: EJS templates
public/: Static assets (CSS, JS, images)
utils/: Utility functions
init/: Database initialization scripts
Contributing
Fork the repository.
Create a new branch for your feature.
Commit your changes.
Push to the branch.
Open a pull request.
License
This project is licensed under the ISC License. See package.json for details.6. Open your browser and navigate to http://localhost:8080.

Usage
Visit the home page to see all listings.
Sign up or log in to create new listings, edit existing ones, or leave reviews.
Use the navigation bar to access different sections.
Technologies Used
Backend: Node.js, Express.js
Database: MongoDB with Mongoose
Authentication: Passport.js with Local Strategy
Templating: EJS with ejs-mate
Validation: Joi
File Upload: Multer with Cloudinary
Styling: Bootstrap, Font Awesome
Other: connect-flash, express-session, method-override
Project Structure
app.js: Main application file
controllers/: Route handlers
models/: Mongoose schemas
routes/: Express routes
views/: EJS templates
public/: Static assets (CSS, JS, images)
utils/: Utility functions
init/: Database initialization scripts
Contributing
Fork the repository.
Create a new branch for your feature.
Commit your changes.
Push to the branch.
Open a pull request.
License
This project is licensed under the ISC License. See package.json for details.

Run the application:
