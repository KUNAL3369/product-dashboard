# Product Dashboard — React Assignment

## Overview
This project is a small React application built to display product data from a public API. It renders the data in a table, supports inline editing of product titles, and loads additional records as the user scrolls. The goal of the implementation was to demonstrate state management, API interaction, and use of browser APIs without relying on external table libraries.

## Live Application
https://productdashboard-api.netlify.app/

## Technologies Used
* React (functional components + hooks)
* Vite
* JavaScript (ES6+)
* HTML / CSS
* Intersection Observer API

## Features
* Fetch paginated product data from API
* Render data in a structured table
* Editable product title field
* Infinite scrolling data loading
* Responsive layout for different screen sizes
* Clean component separation

## Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/KUNAL3369/product-dashboard.git
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## Project Structure
```
src/
├── components/   → Table and UI components
├── hooks/        → Custom data-fetching hook
├── App.jsx       → Main layout
└── main.jsx      → App entry
```

## Configuration Notes
* No API keys or environment variables required
* Uses public dummy product API
* Deployed via Netlify

## Author
Kunal Prabhakar
