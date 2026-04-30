# QurbaniHat – Livestock Booking Platform

## Live URL
(Add your deployed live site link here)

## Project Overview
QurbaniHat is a modern livestock marketplace where users can explore cows and goats for Qurbani. Users can view animal details and place bookings after authentication.

## Key Features

### Authentication
- Email and Password Login & Registration using Better Auth
- Google Login button included
- Error and success notifications using toast

### Animal Management
- View all available animals
- Sort animals by price
- Filter animals by breed (Top Breeds section)
- Detailed animal information page

### Booking System
- Private booking form (login required)
- Form resets after submission
- Success notification after booking

### User Features
- My Profile page displaying user information
- Update profile (name and image)

### UI & Design
- Fully responsive for mobile, tablet, and desktop
- Clean and modern UI design
- Animate.css used for animations
- Structured layout with Navbar and Footer

### Additional Features
- Loading indicator
- Not Found (404) page
- Toast notifications
- Clickable UI components

## Technologies Used

### Frontend
- React
- React Router DOM
- Tailwind CSS
- Animate.css
- React Hot Toast

### Backend
- Node.js
- Express.js
- Better Auth
- SQLite (better-sqlite3)

## Environment Variables

Create a `.env` file with the following:
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:5000



## Installation

git clone https://github.com/your-username/qurbanihat.git

cd qurbanihat
npm install
npm run dev




## Deployment

- Frontend: Vercel
- Backend: Render or Railway

## Assignment Requirements Covered

- Navbar with authentication state
- Footer with contact and social info
- JSON data with minimum 6 animals
- Home page with Hero, Tips, and Top Breeds
- All Animals page with sorting
- Animal details and booking form
- Authentication system
- Private routes
- Profile and update feature
- Animation using Animate.css
- Responsive design
- Loading and Not Found page
- Toast notifications

## Developer
Galib Dev

