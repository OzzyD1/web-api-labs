export const getMovies = () => {
    return fetch(`http://localhost:8080/api/movies`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

export const getUpcomingMovies = () => {
    return fetch(`http://localhost:8080/api/movies/tmdb/upcoming`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

// export const getMovie = (args) => {
//     const [, idPart] = args.queryKey;
//     const { id } = idPart;
//     return fetch(
//         `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     )
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.json().message);
//             }
//             return response.json();
//         })
//         .catch((error) => {
//             throw error;
//         });
// };

export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

export const getGenres = () => {
    return fetch(`http://localhost:8080/api/movies/tmdb/genres`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

export const getMovieReviews = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
        .then((res) => res.json())
        .then((json) => {
            return json.results;
        });
};

export const getPopularMovies = () => {
    return fetch(`http://localhost:8080/api/movies/tmdb/popular`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

export const getMovieCredits = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

export const getNowPlayingMovies = () => {
    return fetch(`http://localhost:8080/api/movies/tmdb/nowplaying`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

export const getPeopleDetails = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

export const searchMovies = ({ search }) => {
    return fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

export const getPopularPeople = ({ queryKey }) => {
    const [, pagePart] = queryKey;
    const { page } = pagePart;
    return fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

export const getPeopleCredits = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

export const login = async (username, password) => {
    const response = await fetch("http://localhost:8080/api/users", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({ username: username, password: password }),
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch(
        "http://localhost:8080/api/users?action=register",
        {
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify({ username: username, password: password }),
        }
    );
    return response.json();
};
