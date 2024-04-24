import { useState, useEffect } from "react";

// COMPONENTS
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Box from "./components/Box";
import Movielist from "./components/Movielist";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList";
import MovieDetails from "./components/MovieDetails";
import Main from "./components/Main";

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
export const KEY = "e8ba335e";

export default function App() {
  const [watched, setWatched] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok) throw new Error("Something went wrong with fetching");

          const data = await res.json();
          console.log(data);
          if (data.Response === "False") throw new Error(`movie not found`);

          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      setTimeout(() => {
        fetchMovies();
      }, 500);
    },
    [query]
  );

  return (
    <>
      <Navbar movies={movies}>
        <Search query={query} setQuery={setQuery}></Search>
        <NumResults movies={movies}></NumResults>
      </Navbar>
      <Main>
        <Box>
          {isLoading ? (
            <Loader />
          ) : movies.length ? (
            <Movielist
              movies={movies}
              onSelectMovie={handleSelectMovie}
            ></Movielist>
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <ErrorMessage message={"Try searching something"} />
          )}

          <Movielist
            movies={movies}
            onSelectMovie={handleSelectMovie}
          ></Movielist>
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched}></WatchedSummary>
              <WatchedMoviesList watched={watched}></WatchedMoviesList>
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
