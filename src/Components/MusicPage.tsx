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
  const [artistName, setArtistName] = useState("");
  const [artistGenre, setGenre] = useState("");
  const [artistImage, setImage] = useState("");
  const [artistSongs, setArtistSongs] = useState<Song[]>([]);
  const [artistAlbums, setArtistAlbums] = useState<Album[]>([]);
  const [fetchedSongs, setSongs] = useState<GeneralSong[]>([]);
  return (
    <>
      <div className="vw-100 vh-100 border d-flex justify-content-center align-items-center">
        <div className="grid-container">
          <div className="grid-item grid-item-1">
            <SearchBar
              setArtistName={setArtistName}
              setArtistGenre={setGenre}
              setArtistSongs={setArtistSongs}
              setArtistAlbums={setArtistAlbums}
              setSong={setSongs}
              setArtistImage={setImage}
            />
          </div>
          <div className="grid-item grid-item-2">
            <ArtistInfo
              name={artistName}
              genre={artistGenre}
              image={artistImage}
              artistAlbums={artistAlbums}
              artistSongs={artistSongs}
            />
          </div>
          <div className="grid-item grid-item-3">
            <MusicResults songObject={fetchedSongs} />
          </div>
          <div className="grid-item grid-item-4"></div>
        </div>
      </div>
    </>
  );
}
