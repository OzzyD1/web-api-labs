export const getMovies = ({ queryKey }) => {
    const [, pagePart] = queryKey;
    const { page } = pagePart;
    return fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}}`
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

export const getUpcomingMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
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

export const getGenres = async () => {
    return fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
            process.env.REACT_APP_TMDB_KEY +
            "&language=en-US"
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

export const getPopularMovies = ({ queryKey }) => {
    const [, pagePart] = queryKey;
    const { page } = pagePart;
    return fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}}`
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

export const getNowPlayingMovies = ({ queryKey }) => {
    const [, pagePart] = queryKey;
    const { page } = pagePart;
    return fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
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
