# 🛍️ Shopping Website - Front-End Internship Assignment

This is a fully responsive shopping website built using **React.js** and integrated with the [Fake Store API](https://fakestoreapi.com/). It was developed as part of a front-end internship assignment.

## 🚀 Features

1. **Login Page**
   - Authenticates using Fake Store API's `/auth/login` endpoint.
   - Stores JWT token in `localStorage` on success.
   - Redirects to product listing after login.

2. **Product Listing Page**
   - Fetches and displays all products.
   - Allows filtering by category.
   - Includes a search bar.
   - Mobile-first responsive grid layout.

3. **Product Detail Page**
   - Shows product image, title, description, and price.
   - "Add to Cart" functionality.

4. **Cart Page**
   - Displays added products with quantity controls.
   - Allows item removal.
   - Calculates and shows total price.
   - Checkout button shows a success popup and clears the cart.

5. **Navigation**
   - Header with links: Home | Cart | Logout.
   - Displays number of items in the cart.
   - Logout clears the token and redirects to login.

---

## 🧪 Test Credentials

Use the following credentials to log in (provided by Fake Store API):

- **Username**: `mor_2314`  
- **Password**: `83r5^_`

---

## 🛠 Tech Stack

- **React.js** (with Vite)
- **React Router v6**
- **React Hooks**
- **Context API** (for global cart state)
- **Plain CSS** (mobile-first responsive)

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/A-Tetarwal/Assignment-Grey-Scientific-Labs.git
cd Assignment-Grey-Scientific-Labs
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

---

## 🌐 Deployment

This project is deployed on **Vercel**  
🔗 **Live Demo:** [Click Here](shopping-website-dun-eight.vercel.app)

---

## 📁 Folder Structure

```
src/
├── components/      # Reusable UI components
├── pages/           # All route-based pages
├── context/         # Cart context
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

---

## 📄 License

This project is licensed for educational purposes only.

---

## ✨ Acknowledgements

- [FakeStoreAPI](https://fakestoreapi.com/) for providing product and authentication APIs.
```
Happy shipping! 🚀