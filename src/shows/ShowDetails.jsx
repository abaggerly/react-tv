import "./shows.css";
import { useState } from "react";
import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  console.log(show);
  if (!show) {
    return (
      <section className="show-details">
        <h2>Show Details</h2>
        <p>Select a show to learn more.</p>
      </section>
    );
  }
  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <section>
        <EpisodeDetails episode={selectedEpisode} />
      </section>
    </div>
  );
}