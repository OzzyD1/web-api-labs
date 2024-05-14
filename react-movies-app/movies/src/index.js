import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AuthContextProvider from "./contexts/authContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import WatchlistMoviesPage from "./pages/watchlistMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import PopularPeople from "./pages/popularPeoplePage";
import PeopleDetailsPage from "./pages/peopleDetailsPage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import LoginPage from "./pages/loginPage";
import ProtectedRoutes from "./protectedRoutes";
import SignUpPage from "./pages/signUpPage";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false,
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AuthContextProvider>
                    <SiteHeader />
                    <MoviesContextProvider>
                        <Routes>
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/signup" element={<SignUpPage />} />
                            <Route
                                path="/people/:id"
                                element={<PeopleDetailsPage />}
                            />
                            <Route
                                path="/movies/:id"
                                element={<MovieDetailsPage />}
                            />
                            <Route
                                path="/reviews/form"
                                element={<AddMovieReviewPage />}
                            />

                            <Route
                                path="/movies/upcoming"
                                element={<UpcomingMoviesPage />}
                            />
                            <Route
                                path="/movies/popular"
                                element={<PopularMoviesPage />}
                            />

                            <Route
                                path="/reviews/:id"
                                element={<MovieReviewPage />}
                            />
                            <Route
                                path="/movies/nowPlaying"
                                element={<NowPlayingMoviesPage />}
                            />
                            <Route
                                path="/movies/people"
                                element={<PopularPeople />}
                            />
                            <Route element={ProtectedRoutes}>
                                <Route
                                    path="/movies/watchlist"
                                    element={<WatchlistMoviesPage />}
                                />
                                <Route
                                    path="/movies/favorites"
                                    element={<FavoriteMoviesPage />}
                                />
                            </Route>
                            <Route path="/movies/:id" element={<MoviePage />} />
                            <Route path="/" element={<HomePage />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </MoviesContextProvider>
                </AuthContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
