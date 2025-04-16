# 🔖 NewsFeed App

A full-stack **NewsFeed application** where users can create posts, view all posts, and comment on each post. Built with **React.js**, **Tailwind CSS**, **Express.js**, and **MongoDB**.

---

## 🔗 Live Demo

> Coming soon...

---

## 📸 Features

- 🔹 Create a post (name, title, body)
- 🔹 View all posts on homepage
- 🔹 Add comments on each post
- 🔹 Styled with TailwindCSS
- 🔹 REST API built with Express.js + MongoDB

---

## 🧹 Tech Stack

| Frontend      | Backend         | Database | Styling     |
|---------------|-----------------|----------|-------------|
| React.js      | Node + Express  | MongoDB  | TailwindCSS |

---

## 🚀 How to Run Locally

### 🔧 1. Clone the repository

```bash
git clone https://github.com/yourusername/newsfeed-app.git
cd newsfeed-app
```

### 💻 2. Setup Backend (Express + MongoDB)

```bash
cd backend
npm install
```

Create a `.env` file with:

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/newsfeedDB
```

Start the backend:

```bash
npm start
```

### 🌐 3. Setup Frontend (React)

```bash
cd frontend
npm install
npm start
```

---

## 📂 Folder Structure

```
newsfeed-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
```

---

## 📌 Routes Overview

### Backend API

| Method | Route                              | Description              |
|--------|------------------------------------|--------------------------|
| GET    | `/api/v1/posts`                    | Get all posts            |
| POST   | `/api/v1/create/post`                    | Create a new post        |
| POST   | `/api/v1/comments/comment`   | Add a comment to a post  |

---

## 📷 UI Preview

> Coming soon – Add screenshots here for homepage, create post, comment section

---

## 💡 TODO (Optional Features)

- [ ] Like & Reaction System
- [ ] User Authentication (JWT)
- [ ] Infinite Scroll / Pagination
- [ ] Avatar and Timestamps
- [ ] Post Edit/Delete

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📃 License

MIT License
