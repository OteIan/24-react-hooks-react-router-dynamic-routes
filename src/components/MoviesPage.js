// .src/components/MoviesPage.js
import React from "react";
// import the custom `useRouteMatch` hook from React Router
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
// import the MovieShow component
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();

  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>
      
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  );
}

export default MoviesPage;