# Data Fetching UI

A simple data-fetching application that demonstrates:

- Fetching data from an API on page load
- Loading state handling
- Error state handling
- Rendering fetched data in a responsive card layout

## Features

- Loading indicator while fetching data
- Error message if API request fails
- Product listing view
- Responsive design

## API Used

https://fakestoreapi.com/products

## Project Structure

```text
data-fetch-ui/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Download the project.
2. Open `index.html` in your browser.

OR

Use VS Code Live Server:

1. Install Live Server extension.
2. Right-click `index.html`.
3. Click "Open with Live Server".

## States Handled

### Loading State

Displays a loading spinner while data is being fetched.

### Success State

Displays products in a card layout.

### Error State

Displays an error message if fetching fails.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
