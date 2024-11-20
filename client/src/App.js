import { useEffect, useState } from "react";
import api from "./api/axiosConfig";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";
import NotFound from "./components/notFound/NotFound";

function App() {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState();
    const [reviews, setReviews] = useState([]);

    const getMovies = async () => {
        try {
            const response = await api.get("/api/v1/movies");
            console.log(response.data);
            setMovies(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getMovie = async (movieId) => {
        try {
            const response = await api.get(`/api/v1/movies/${movieId}`);
            const singleMovie = response.data;
            setMovie(singleMovie);
            setReviews(singleMovie.reviews);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home movies={movies} />} />
                    <Route path="trailer/:ytTrailerId" element={<Trailer />} />
                    <Route
                        path="reviews/:movieId"
                        element={
                            <Reviews
                                getMovieData={getMovie}
                                reviews={reviews}
                                setReviews={setReviews}
                                movie={movie}
                            />
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
