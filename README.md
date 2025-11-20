# Health & Lifestyle App

## Project Description

The Healthy Lifestyle App is a full-stack web application that informs users about healthy lifestyle and lifestyle habits. Users can register, log in, and interact with features such as posting comments and ratings about their experiences, purchase health books, and read blogs. The app is designed to be responsive and user-friendly, supporting CRUD operations for user accounts and comments.

---

## Technologies Used

## Technologies

---

- Frontend: React, Vite, JS, CSS
- Backend: Spring Boot (Java), Maven
- Database: MySQL
- API Test: Postman
- AI: Google Gemini API

---

## Prerequisites

- Node.js (v18+)
- Java 17+
- Maven
- MySQL running locally
- Google Gemini API key (from Google AI Studio)
- Git

---

## Installation Steps

1. **Clone the repository:**

`https://github.com/baharlawter/Health_Lifestyle_App`

### 1. Frontend env file

Create: `FrontEnd/.env.local`

Properties:

```
VITE_API_BASE_URL=http://localhost:8081
You need to get Google Gemini api key from this website

`https://ai.google.dev/gemini-api/docs/api-key?gclsrc=aw.ds&gad_source=1&gad_campaignid=20866959509&gbraid=0AAAAACn9t64eu4QLzt8WC6YX9ntHOdjNZ&gclid=CjwKCAiAlfvIBhA6EiwAcErpyTOZu60HfWmM6viPw0zjo507MSu6qDuSskZ1msntpiR41guRFbKNaxoCJNwQAvD_BwE`
```

1. **Backend Setup:**

   - Navigate to the backend folder.
   - Install dependencies and run the Spring Boot server:
     ```bash
     mvn install
     mvn spring-boot:run
     ```
   - Make sure MySQL is running and the database is set up.

2. **Frontend Setup:**
   - Navigate to the UI folder.
   - Install dependencies and start the React app:
     ```bash
     npm install
     npm start
     ```
3. **Access the app:**
   - Open your browser and go to `http://localhost:5173`

---

## Wireframes

## `https://www.canva.com/design/DAG0YTEz1vs/HQD4iIXKIIAsTjbTiI57iA/edit?utm_content=DAG0YTEz1vs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton `

## ER Diagram

## `https://www.canva.com/design/DAG0YnD_Xms/dBTbEnEgv6e-dAKy-PDNbw/edit?utm_content=DAG0YnD_Xms&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`

## Unsolved Problems & Future Features

- **Unsolved Problems:**

  - in user authentication may need better error handling.
  - Fasting Tracker could be impemented
  - Better user friendly login where the user experience
  - The checkout is set up only in UI. It is not legit. It does not take real credit card

- **Setting Up GoogleGemini:**
- Since I used VS code for the backend, the configuration was different to set up Google Gemini
- I made a mistake of setting up backend, instead of getting Client from Google Gemini I was getting from Spring boot
- It is fixed works fine

- **Future Features:**
  - Add user profile pages.Extend it
  - Implement password reset functionality.
  - Add more health tracking features (intermitten fasting, quitting sugar).
  - Improve accessibility and add dark mode.

---
