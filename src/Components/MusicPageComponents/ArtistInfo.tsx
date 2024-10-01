import "bootstrap/dist/css/bootstrap.css";

export default function ArtistInfo() {
  const songs = [1, 1, 1, 1, 1];
  const albums = [1, 1, 1];
  return (
    <>
      <div className="card text-bg-dark my-card-container">
        <img src="..." className="card-img artist-image" />
        <div className="card-img-overlay artist-text-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>

      <div className="top-songs">
        <h2>TOP songs</h2>

        {songs.map((item, index) => {
          console.log(item);
          return (
            <div key={index} className={`side-song-info`}>
              {index + 1}.
              <img
                className={`side-song-image side-song-image-${index + 1}`}
                src="..."
                alt=""
              />
              <div className={`  side-song-info-text`}>
                <h3 className={`side-song-name`}> Song </h3>
                <h4 className={`side-song-duration`}>1:20</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className="top-songs">
        <h2>Albums</h2>
        {albums.map((item, index) => {
          console.log(item);
          return (
            <div key={index} className={`side-song-info`}>
              {index + 1}.
              <img
                className={`side-song-image side-song-image-${index + 1}`}
                src="..."
                alt=""
              />
              <div className={`  side-song-info-text`}>
                <h3 className={`side-song-name`}> Song </h3>
                <h4 className={`side-song-duration`}>1:20</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
