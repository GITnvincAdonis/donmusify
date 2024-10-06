import "./MusicPageStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./MusicPageComponents/SearchBar";
import ArtistInfo from "./MusicPageComponents/ArtistInfo";
import MusicResults from "./MusicPageComponents/MusicResults";
import { useState } from "react";

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
interface GeneralSong {
  Image: string;
  song_name: string;
  song_duration: number;
  artist_name: string;
}

export default function MusicPage() {
  const [searchString, setSearchString] = useState("");
  const [artistName, setArtistName] = useState("");
  const [artistGenre, setGenre] = useState("");
  const [artistImage, setImage] = useState("");
  const [artistSongs, setArtistSongs] = useState<Song[]>([]);
  const [artistAlbums, setArtistAlbums] = useState<Album[]>([]);
  const [fetchedSongs, setSongs] = useState<GeneralSong[]>([]);

  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);
  if (error) {
    return (
      <>
        <div className="vw-100 vh-100 d-flex justify-content-center align-items-center error-container">
          <h2>
            <span className="fetching-text">ERROR FETCHING</span> from spotify
            API:{" "}
          </h2>
          <h2>{error}</h2>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="vw-100 bg-black d-flex justify-content-center align-items-center">
        <div className="grid-container">
          <div className="grid-item grid-item-1">
            <SearchBar
              setError={setError}
              setLoading={setLoading}
              setSearchString={setSearchString}
              setArtistName={setArtistName}
              setArtistGenre={setGenre}
              setArtistSongs={setArtistSongs}
              setArtistAlbums={setArtistAlbums}
              setSong={setSongs}
              setArtistImage={setImage}
            />
          </div>
          <div></div>
          {!isLoading && (
            <>
              {" "}
              <div className="grid-item grid-item-2">
                {searchString != "" ? (
                  <ArtistInfo
                    name={artistName}
                    genre={artistGenre}
                    image={artistImage}
                    artistAlbums={artistAlbums}
                    artistSongs={artistSongs}
                  />
                ) : (
                  <ArtistInfo
                    name=""
                    genre=""
                    image=""
                    artistAlbums={[]}
                    artistSongs={[]}
                  />
                )}
              </div>
              <div className="grid-item grid-item-3">
                {searchString != "" ? (
                  <MusicResults songObject={fetchedSongs} />
                ) : (
                  <div className="blank-text">
                    <div className="find-svg-container">
                      <svg
                        className="find-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        height="800px"
                        width="800px"
                        version="1.1"
                        id="Layer_1"
                        viewBox="0 0 50 50"
                        enableBackground="new 0 0 50 50"
                      >
                        <path
                          className="svg-path"
                          d="M20.921,31.898c2.758,0,5.367-0.956,7.458-2.704l1.077,1.077l-0.358,0.358  c-0.188,0.188-0.293,0.442-0.293,0.707s0.105,0.52,0.293,0.707l8.257,8.256c0.195,0.195,0.451,0.293,0.707,0.293  s0.512-0.098,0.707-0.293l2.208-2.208c0.188-0.188,0.293-0.442,0.293-0.707s-0.105-0.52-0.293-0.707l-8.257-8.256  c-0.391-0.391-1.023-0.391-1.414,0l-0.436,0.436l-1.073-1.073c1.793-2.104,2.777-4.743,2.777-7.537c0-3.112-1.212-6.038-3.413-8.239  s-5.127-3.413-8.239-3.413s-6.038,1.212-8.238,3.413c-2.201,2.201-3.413,5.126-3.413,8.239c0,3.112,1.212,6.038,3.413,8.238  C14.883,30.687,17.809,31.898,20.921,31.898z M38.855,37.385l-0.794,0.793l-6.843-6.842l0.794-0.793L38.855,37.385z M14.097,13.423  c1.823-1.823,4.246-2.827,6.824-2.827s5.002,1.004,6.825,2.827c1.823,1.823,2.827,4.247,2.827,6.825  c0,2.578-1.004,5.001-2.827,6.824c-1.823,1.823-4.247,2.827-6.825,2.827s-5.001-1.004-6.824-2.827  c-1.823-1.823-2.827-4.247-2.827-6.824C11.27,17.669,12.273,15.246,14.097,13.423z"
                        />
                      </svg>
                    </div>
                    <h1>ENTER</h1>
                    <h1>Artist / Song</h1>
                  </div>
                )}
              </div>
              <div className="grid-item grid-item-4"></div>
            </>
          )}

          {isLoading && (
            <>
              {" "}
              <div className="grid-item grid-item-2"></div>
              <div className="grid-item grid-item-3">
                <div className="spinner-container">
                  <div className="spinner-border " role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
              <div className="grid-item grid-item-4"></div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
