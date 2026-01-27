# 🌍 **Wanderlust**

**_Wanderlust_** is a **full-stack web application** for travel enthusiasts to **discover, share, and review places to stay**.  
Built using **Node.js, Express, MongoDB, and EJS**, the platform supports **user authentication, image uploads, reviews, and a responsive UI**.

---

## ✨ **Features**

- 🔐 **User authentication** (Sign up, Login, Logout) using **Passport.js**
- 🏠 **Create, view, edit, and delete listings**
- 📸 **Upload listing images** using **Cloudinary**
- ⭐ **Add and delete reviews** on listings
- 🎨 **Responsive UI** built with **Bootstrap**
- ⚡ **Flash messages** for user feedback
- ✅ **Server-side data validation** using **Joi**
- 🧠 **Session management**
- 🛠 **RESTful routing** with **MVC architecture**

---

## 🛠️ **Technologies Used**

### **Backend**
- **Node.js**
- **Express.js**

### **Database**
- **MongoDB**
- **Mongoose**

### **Authentication**
- **Passport.js (Local Strategy)**

### **Frontend**
- **EJS (with ejs-mate)**
- **Bootstrap**
- **Font Awesome**

### **File Upload**
- **Multer**
- **Cloudinary**

### **Other Libraries**
- **Joi**
- **connect-flash**
- **express-session**
- **method-override**
- **dotenv**

---

## 📂 **Project Structure**
major_project/
│
├── app.js # Main application file

├── controllers/ # Route handlers

├── models/ # Mongoose schemas

├── routes/ # Express routes

├── views/ # EJS templates

├── public/ # Static assets (CSS, JS, images)

├── utils/ # Utility/helper functions

├── init/ # Database initialization scripts

├── middleware.js # Custom middleware

├── cloudConfig.js # Cloudinary configuration

├── schema.js # Joi validation schemas

├── package.json

├── .env # Environment variables (not committed)

├── .gitignore

└── README.md


---

## ⚙️ **Installation & Setup**

### **1️⃣ Clone the repository**
```bash
git clone <repository-url>
cd major_project
2️⃣ Install dependencies
npm install
3️⃣ Set up environment variables

Create a .env file in the root directory and add:
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
4️⃣ Start MongoDB

Start MongoDB locally

OR update the MongoDB connection string in app.js

5️⃣ Run the application
npm start
6️⃣ Open in browser
http://localhost:8080
🚀 Usage

Visit the home page to browse all listings

Sign up or log in to:

Create new listings

Edit or delete your listings

Leave reviews on listings

Use the navigation bar to explore different sections

🤝 Contributing

Fork the repository

Create a new branch

git checkout -b feature-name


Commit your changes

git commit -m "Add new feature"


Push to the branch

git push origin feature-name


Open a Pull Request

📄 License

This project is licensed under the ISC License.
See package.json for more details.

