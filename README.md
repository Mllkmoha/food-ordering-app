# OlderFood — React Food Ordering App

A full-stack food ordering web app built with React. Browse meals, manage a shopping cart, and submit orders through a checkout form.

## 📸 Preview

<img width="2842" height="1481" alt="image" src="https://github.com/user-attachments/assets/d84a8e9c-496f-4ec6-a146-602c7d357d0f" />

## 🔗 Live Demo

- **Frontend:** [food-ordering-app-l2kv.vercel.app](https://food-ordering-app-l2kv.vercel.app)
- **Backend:** [food-ordering-app-1-hh7u.onrender.com](https://food-ordering-app-1-hh7u.onrender.com)

## Features

- Browse available meals fetched from a REST API
- Add and remove items from the cart
- View cart total with formatted currency
- Checkout modal with customer details form
- Order submission with loading and success states
- Error handling for failed API requests

## Tech Stack

**Frontend**
- React 19 + Vite
- Context API (CartContext, UserProgressContext)
- Custom useHttp hook
- React useActionState for form submission

**Backend**
- Node.js + Express
- JSON file storage

## Project Structure

\`\`\`
├── backend/
│   ├── app.js
│   └── data/
│       ├── available-meals.json
│       └── orders.json
├── src/
│   ├── components/
│   ├── hooks/useHttp.js
│   ├── store/
│   └── App.jsx
└── index.html
\`\`\`

## Getting Started

\`\`\`bash
# Frontend
npm install
npm run dev

# Backend
cd backend
npm install
npm start
\`\`\`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /meals | Returns available meals |
| POST | /orders | Submits a new order |

## Author

[Mllkmoha](https://github.com/Mllkmoha)

## License

This project is for learning and portfolio use
