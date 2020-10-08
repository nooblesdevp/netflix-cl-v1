import React from "react";

import "./App.scss";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";
import Raw from "./Components/Row/Row";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Raw
        title="NETFLIX ORIGINALS  "
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Raw title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Raw title="Top Rated" fetchUrl={requests.fetchRomanceMovies} />
      <Raw title="Action Movies" fetchUrl={requests.fetchActionmovies} />
      <Raw title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Raw title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Raw title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Raw title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
