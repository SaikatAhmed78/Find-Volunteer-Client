# Volunteer Management System 🌟

Welcome to the **Volunteer Management System**! This platform helps organizations efficiently manage volunteer opportunities and allows users to sign up for volunteer work. The system provides an intuitive interface for posting volunteer needs, managing requests, and participating in volunteering activities.

## Features ✨

- **User Authentication** 🔒: 
  - Secure login and registration with password-based authentication.
  - Supports Google and GitHub login.

- **JWT Authentication** 🛡️: 
  - Secure access to private routes using JWT token-based authentication.

- **Volunteer Needs Management** 📝: 
  - Add, update, and delete volunteer need posts with ease.

- **Volunteer Request Management** 📋: 
  - Submit and manage volunteer requests for various posts.

- **Responsive Design** 📱💻: 
  - Fully responsive and optimized for both desktop and mobile devices.

- **Dark/Light Theme Toggle** 🌙🌞: 
  - Switch between dark and light themes for a personalized experience.

## Pages & Routes 🚀

### 1. **Navbar** 📍
- Displays the website name/logo.
- Links to **Home** and **All Volunteer Need Posts**.
- Conditional rendering of "Login" and "Logout" options.
- **My Profile** dropdown with links to "Add Volunteer Need Post" and "Manage My Posts".

### 2. **Home Page** 🏠
- **Banner/Slider**: 
  - Eye-catching slider displaying important information about volunteer opportunities.
  
- **Volunteer Needs Now Section**: 
  - Displays a maximum of 6 cards, sorted by upcoming deadlines.
  
- **See All Button**: 
  - Redirects users to the **All Volunteer Need Posts** page.
  
- **Extra Sections**: 
  - Two additional meaningful sections related to volunteering opportunities.

### 3. **Authentication System** 🔑
- **Login Page**: 
  - Email and password-based authentication with Google and GitHub login support.
  
- **Register Page**: 
  - Registration with **name**, **email**, **photoURL**, and **password** verification.

### 4. **Add Volunteer Need Post Page (Private Route)** ➕
- Form to add a new volunteer need post, including fields like:
  - **Thumbnail**, **Post Title**, **Description**, **Category**, **Location**, **Number of Volunteers Needed**, **Deadline**, **Organizer Name**, **Organizer Email**.
  
- Data is saved to the database with a success message using **Toast** or **SweetAlert**.

### 5. **Volunteer Need Post Details Page (Private Route)** 📄
- Displays all the details of a volunteer need post.
- A **"Be a Volunteer"** button allows users to submit a request to volunteer.

### 6. **Be a Volunteer Page/Modal (Private Route)** 🤝
- A form with pre-filled post details and editable fields for suggestions or comments.
- Clicking the **"Request"** button stores the volunteer request and decreases the number of volunteers needed.

### 7. **All Volunteer Need Posts Page** 🌍
- Displays all volunteer need posts in a card format.
- Includes a **search functionality** to filter posts by title.
- **View Details** button redirects to the Volunteer Need Post Details page.

### 8. **Manage My Posts Page (Private Route)** ⚙️
- Displays two sections:
  - **My Volunteer Need Posts**: 
    - Allows users to update or delete their posts.
  
  - **My Volunteer Request Posts**: 
    - Displays the posts where the user has volunteered.

## Tech Stack 🛠️

- **Frontend**: 
  - React.js, React Router, Material UI, Tailwind CSS, DaisyUI.
  
- **Backend**: 
  - Firebase (Authentication, Firestore).
  
- **Other Libraries**: 
  - Axios, Framer Motion, React Spinners, Lottie React, SweetAlert2, React Icons.

## Live  🌐

Check out the live version of the project here:  
[**Live Demo Link**](https://example-live-link.com) 🚀


