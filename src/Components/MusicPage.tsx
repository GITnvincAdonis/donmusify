import "./MusicPageStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./MusicPageComponents/SearchBar";
import ArtistInfo from "./MusicPageComponents/ArtistInfo";
import MusicResults from "./MusicPageComponents/MusicResults";
export default function MusicPage() {
  return (
    <>
      <div className="vw-100 vh-100 border d-flex justify-content-center align-items-center">
        <div className="grid-container">
          <div className="grid-item grid-item-1"><SearchBar /></div>
          <div className="grid-item grid-item-2"><ArtistInfo /></div>
          <div className="grid-item grid-item-3"><MusicResults /></div>
          <div className="grid-item grid-item-4"></div>
        </div>
      </div>
    </>
  );
}
