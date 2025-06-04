# Nxt Watch

A React-based video streaming application that allows users to authenticate, browse, search, and watch videos across various categories, with support for light and dark themes, and features like saving videos and interactive video controls.

---

Website Link: [https://ytclonenxtwtch.ccbp.tech](https://ytclonenxtwtch.ccbp.tech)

---

## Features

- *User Authentication*
  - Login with valid credentials to access the app
  - Error messages displayed for invalid login attempts
  - Redirects to login for unauthenticated users trying to access protected routes
  - Redirects authenticated users from login page to home

- *Theme Support*
  - Toggle between light and dark themes using the theme icon button
  - Persists theme-specific background colors across routes

- *Home Page*
  - Displays a banner with a close button and Nxt Watch logo
  - Search videos by title using a search input
  - Displays a list of videos with thumbnails and channel details
  - Shows loader during API calls
  - Handles no search results and failure states with retry options

- *Trending Page*
  - Fetches and displays trending videos
  - Shows loader during API calls
  - Handles failure states with retry options
  - Navigates to video details on video click

- *Gaming Page*
  - Fetches and displays gaming videos
  - Shows loader during API calls
  - Handles failure states with retry options
  - Navigates to video details on video click

- *Video Details Page*
  - Displays video details including title, channel, view count, and description
  - Plays video using react-player
  - Interactive buttons for Like, Dislike, and Save (toggles between Save/Saved)
  - Handles loading and failure states with retry
  - Like and Dislike buttons are mutually exclusive

- *Saved Videos Page*
  - Displays a list of saved videos
  - Shows no saved videos view when the list is empty
  - Navigates to video details on video click

- *Navigation and Routing*
  - Protected routes for Home, Trending, Gaming, Saved Videos, and Video Details
  - Not Found page for invalid routes
  - Header with logo, theme toggle, and logout button
  - Sidebar with navigation links to Home, Trending, Gaming, and Saved Videos
  - Logout popup with confirm and cancel options

---

*Login Credentials*

- Username: rahul
- Password: rahul@2021

---

*Technologies Used*

- React.js                  # Frontend UI library
- React Router             # Client-side routing and protected routes
- React Player             # For video playback
- REST APIs                # For authentication and fetching video data
- JavaScript               # Modern JavaScript features and async operations
- CSS                      # Styling with Styled Components for design
- date-fns                 # For formatting published dates

---

## API Endpoints

| API Endpoint                               | Method | Description                                    | Query Parameters                           |
|--------------------------------------------|--------|-----------------------------------------------|--------------------------------------------|
| https://apis.ccbp.in/login               | POST   | Authenticate user with username and password  | N/A                                        |
| https://apis.ccbp.in/videos/all          | GET    | Fetch list of all videos                      | search (search text)                     |
| https://apis.ccbp.in/videos/trending     | GET    | Fetch list of trending videos                 | N/A                                        |
| https://apis.ccbp.in/videos/gaming       | GET    | Fetch list of gaming videos                   | N/A                                        |
| https://apis.ccbp.in/videos/:id          | GET    | Fetch details for a specific video            | :id — Video ID as path parameter         |

---

## Project Structure

src/
├── components/     # Reusable UI components, Route components (Login, Home, Trending, Gaming, VideoDetails, SavedVideos, NotFound)
├── App.js          # Main component with route definitions
├── index.js        # Entry point wrapping App with BrowserRouter
