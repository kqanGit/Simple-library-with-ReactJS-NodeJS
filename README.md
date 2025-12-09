# Book Management System

A full-stack CRUD application for managing books, built with
**Node.js**, **Express**, and **React**, following a clean **3-Layer
Architecture** consisting of:
- **Presentation Layer** (Client -- React)
- **Business Logic Layer** (Services)
- **Data Access Layer** (Repositories)

------------------------------------------------------------------------

## 📌 3-Layer Architecture Overview

This architecture ensures:
✔ Clear separation of concerns
✔ Better maintainability and scalability
✔ Easy unit testing at each layer

------------------------------------------------------------------------

## 🏛 Architecture Layers

### 🔶 1. Presentation Layer (Client -- React)

**Directory:** `client/`
**Responsibilities:** - Render UI
- Communicate with backend (Axios, React Router loaders/actions)
- Handle user interactions
- Implement navigation

------------------------------------------------------------------------

### 🔶 2. Business Logic Layer -- BLL (Server Services)

**Directory:** `server/src/services/`
**Responsibilities:** - Validate input data
- Apply business rules
- Handle domain logic
- Call the Repository layer for data access
- Does **not** interact directly with JSON/files

------------------------------------------------------------------------

### 🔶 3. Data Access Layer -- DAL (Server Repositories)

**Directory:** `server/src/repositories/`
**Responsibilities:** - Directly access and manipulate JSON data
- Implement CRUD operations
- Contain no business logic

------------------------------------------------------------------------

## 🧩 Architecture Diagram

                       ┌──────────────────────────┐
                       │     Presentation Layer   │
                       │         (Client)         │
                       │       React + Router     │
                       └──────────────▲──────────┘
                                      │
                              HTTP Requests
                                      │
                       ┌──────────────┴──────────┐
                       │   Business Logic Layer   │
                       │         (BLL)            │
                       │        Services          │
                       └──────────────▲──────────┘
                                      │
                            Calls Repository
                                      │
                       ┌──────────────┴──────────┐
                       │  Data Access Layer (DAL) │
                       │       Repositories       │
                       │    JSON File Storage     │
                       └──────────────▲──────────┘
                                      │
                                  books.json

------------------------------------------------------------------------

# 🖥️ Tech Stack

## Backend

-   Node.js v24.9.0
-   Express.js
-   CORS
-   JSON File Storage

## Frontend

-   React 18
-   Vite
-   React Router v6 (loaders + actions)
-   Axios
-   Tailwind CSS

------------------------------------------------------------------------

# 📁 Backend Structure

    server/
    ├── index.js
    └── src/
        ├── repositories/
        │   └── bookRepo.js          # DAL – Data Access Layer
        ├── services/
        │   └── bookService.js       # BLL – Business Logic Layer
        ├── controllers/
        │   └── bookController.js    # API handlers
        ├── routes/
        │   └── bookRoutes.js        # API route definitions
        └── data/
            └── books.json           # JSON file database

------------------------------------------------------------------------

# 🎨 Frontend Structure

    client/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── loaders/
    │   ├── actions/
    │   └── App.jsx

------------------------------------------------------------------------

# 🔗 API Endpoints

  Method   Endpoint           Description
  -------- ------------------ ----------------------
  GET      `/api/books`       Get all books
  GET      `/api/books/:id`   Get book by ID
  POST     `/api/books`       Create new book
  PUT      `/api/books/:id`   Update existing book
  DELETE   `/api/books/:id`   Delete book

------------------------------------------------------------------------

# 🚀 Installation

### Backend

``` bash
cd server
npm install
npm start
```

Server runs at: `http://localhost:3000`

### Frontend

``` bash
cd client
npm install
npm run dev
```

Client runs at: `http://localhost:5173`

------------------------------------------------------------------------

# 📚 Sample Data (`books.json`)

``` json
{
  "books": [
    {
      "id": "1",
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "year": 1960
    },
    {
      "id": "2",
      "title": "1984",
      "author": "George Orwell",
      "year": 1949
    },
    {
      "id": "3",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "year": 1925
    },
    {
      "id": "4",
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "year": 1813
    },
    {
      "id": "5",
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "year": 1951
    }
  ]
}
```

------------------------------------------------------------------------

# 🛡 Validation Rules

### Book Creation / Update

-   `title`: required, non-empty
-   `author`: required
-   `year`: must be \> 0 and ≤ current year
-   Title must be **unique** (case-insensitive)

------------------------------------------------------------------------

# ⚠ Error Handling

### Backend

-   Try/catch in controllers
-   Correct HTTP status codes

### Frontend

-   Errors shown using `useActionData()`
-   Optimistic UI for delete operations

------------------------------------------------------------------------

# 🎯 Highlights

-   Clean 3-layer architecture
-   React Router Data APIs
-   Fully structured backend
-   Professional, maintainable design
-   Complete CRUD system

------------------------------------------------------------------------
