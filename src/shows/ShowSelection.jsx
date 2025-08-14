import "./shows.css";

/** links to show information about shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <a
          className="show"
          href=""
          key={show.name}
          onClick={(e) => {
            e.preventDefault();
            setSelectedShow(show);
          }}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}