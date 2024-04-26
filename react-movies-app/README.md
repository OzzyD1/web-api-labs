# Assingment 1 - React Movie App

This repository a movie database app built with React and Material UI. Below is a summary of the added features, including new API endpoints, MUI components, styling updates, implemented features, and other changes made to the project.

## API Endpoints

### Static

-   Discover Movies Page
-   Popular Movies Page
-   Now Playing Movies Page
-   Search (calls successful but no page)
-   Popluar People Page

### Parameterised

-   People Details
-   People Credits

### Caching

-   All except for search endpoint

## New MUI Componenets

-   Box
-   List
-   ListItemButton
-   Avatar
-   Gridv2
-   Modal
-   Alert
-   Divider
-   Snackbar

## Styling

-   Updated colours
-   Installed the Roboto font
-   Removed favourite icon from card header and changed colour of favourite icon instead

## Features

-   Favourites
-   Watchlist
-   Movie Credits
-   Actor/People Credits
-   Clicking on an actor will bring you to the actor page
-   Clicking on a movie in the actor details page will bring you to the movie
-   Firebase Authentication
-   Error handling (https://blog.appsignal.com/2022/06/15/how-to-handle-errors-in-react.html)
-   Most pages are responsive
-   Pagination
-   Only render favourites and watchlist buttons if logged in

## Other Chnages

-   Deleted Storybook
-   Removed redundant useMovie custom hook
-   Used custom hook for Firebase state observer
-   React useNavigate (https://reactrouter.com/en/main/hooks/use-navigate)
-   Watchlist and favourite icons are now on all pages
-   Made the entire movie card clickable
-   Only deisplay 1 decimal point for movie rating

## To Do

-   Filter by Year
-   Firebase: invalid credentials notification

### Installation

1. Get a free API Key at [The Internet Movie Databse](https://www.themoviedb.org)
2. Clone the repo
    ```sh
    git clone https://github.com/OzzyD1/react-movie-labs.git
    ```
3. Install NPM packages
    ```sh
    npm install
    ```
4. Enter your API in `.env`
    ```js
    REACT_APP_TMDB_KEY=;
    ```
