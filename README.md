# React Shopping Website Project

## Project Overview
This project is a fully functional **React + TypeScript shopping website** built using **React, Tailwind CSS, and React Router**. It features a modern UI, responsive design, and essential e-commerce functionalities like product listings, detailed product pages, cart management, and user authentication.

---

## Features Implemented

### 1. Navbar
- Responsive navigation bar with **desktop and mobile menus**.
- Menu links: Home, About, Products, Reviews, Contact.
- Active link highlighting.
- **Search bar** that expands on hover.
- **Login/Signup modal** with toggle functionality.
- **Cart icon** with live item count.

### 2. Product Pages
- **Products page** showing all available products.
- **ProductDetail page** with:
  - Product image, name, price, description.
  - Add to cart functionality.
  - Back button navigation.
  - Related products section with clickable cards.
- Clicking a related product dynamically updates the ProductDetail page.

### 3. Cart Management
- Global cart context (`CartContext`) for managing cart state.
- Add to cart from **product detail page** or **related product cards**.
- Display total items in the navbar cart icon.

### 4. Login & Signup Modal
- Premium modal for **Login** and **Sign Up**.
- Toggle between login and signup forms.
- Sign up includes a **Full Name field**.
- Modal overlay with background opacity for focus.

### 5. Mobile Responsiveness
- Hamburger menu for mobile devices.
- Smooth slide-down/up animation for mobile menu.

### 6. Styling & Animations
- Tailwind CSS used for all styling.
- Smooth transitions for hover effects, modal, and search bar.

---

## Project Structure
src/
├─ assets/ # Images and static assets
├─ components/ # Navbar, Footer, Cart, etc.
├─ context/ # CartContext.js
├─ data/ # ProductArray.js
├─ pages/ # Home, Products, ProductDetail, About, Reviews, Contact
└─ App.jsx # Main app

## How to Run
1. Clone the repository:
```bash
git clone https://github.com/yourusername/project-repo.git

2. Navigate to project folder:
cd project-repo


Install dependencies:
npm install


Run the development server:
npm run dev

Open your browser at http://localhost:5173.

Technologies Used

React.js + React Router

Tailwind CSS

React Context API (for Cart)

Lucide-react icons

Vite (React project setup)

Author

developed by: Rubat Shaikh.
suggested by: CoreTech innovations.







