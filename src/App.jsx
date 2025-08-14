/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import { useState } from "react";
import ShowSelection from "./shows/ShowSelection.jsx";
// import EpisodeDetails from "./episodes/EpisodeDetails.jsx";
import ShowDetails from "./shows/ShowDetails.jsx";
import { tvShows } from "./shows/data.js";

export default function App() {
  const [shows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}