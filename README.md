<img width="2842" height="1481" alt="image" src="https://github.com/user-attachments/assets/c3127b4e-8646-407e-b808-6ccc655d742a" /><img width="2837" height="1489" alt="image" src="https://github.com/user-attachments/assets/5c582812-1f2e-402f-9863-7aae3539c0af" /># OlderFood — React Food Ordering App

A full-stack food ordering web app built with React. Browse meals, manage a shopping cart, and submit orders through a checkout form.

## 📸 Preview

<img width="2842" height="1481" alt="image" src="https://github.com/user-attachments/assets/d84a8e9c-496f-4ec6-a146-602c7d357d0f" />

<img width="620" height="1267" alt="image" src="https://github.com/user-attachments/assets/419631c1-01b9-4aae-8064-797f51d3961d" />

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

This project is for learning and portfolio use.
