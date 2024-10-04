import "bootstrap/dist/css/bootstrap.css";

interface Album {
  firstImage: string;
  name: string;
  track_number: string;
  // add more properties as needed
}
interface Song {
  Image: string;
  song_name: string;
  song_duration: number;
}
export default function ArtistInfo(props: {
  name?: any;
  genre?: any;
  image?: any;
  artistAlbums: Album[];
  artistSongs: Song[];
}) {
  const { name, genre, image, artistAlbums, artistSongs } = props;
  // console.log("structured songs");
  //console.log(artistSongs);
  // const songs = [1, 1, 1, 1, 1];
  // const albums = [1, 1, 1];
  return (
    <>
      <div className="card text-bg-dark my-card-container">
        <img src={image} className="card-img artist-image" />
        <div className="card-img-overlay artist-text-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{genre}</p>
        </div>
      </div>

      <div className="top-songs">
        <h2>TOP songs</h2>

        {artistSongs.map((name, index) => {
          const minutes = Math.floor(name.song_duration / 60000);
          const seconds = Math.floor((name.song_duration % 60000) / 1000);

          const isDivisible = seconds / 10 >= 1;
          const time = `${minutes}:${isDivisible ? seconds : "0" + seconds}`;
          return (
            <div key={index} className={`side-song-info`}>
              <div className="song-number">{index + 1}.</div>
              <img
                className={`side-song-image side-song-image-${index + 1}`}
                src={name.Image}
                alt=""
              />
              <div className={`  side-song-info-text`}>
                <p className={`side-song-name`}> {name.song_name} </p>
                <p className={`side-song-duration`}>{time}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="top-songs">
        <h2>Albums</h2>
        {artistAlbums.map((name, index) => {
          return (
            <div key={index} className={`side-song-info`}>
              <div className="song-number">{index + 1}.</div>

              <img
                className={`side-song-image side-song-image-${index + 1}`}
                src={name.firstImage}
                alt=""
              />
              <div className={`  side-song-info-text`}>
                <p className={`side-song-name`}> {name.name} </p>
                <p className={`side-song-duration`}>
                  {name.track_number}-songs
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
