import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
export default function SearchBar(props: {
  setArtistName: any;
  setArtistGenre: any;
  setArtistImage: any;
  setArtistSongs: any;
  setArtistAlbums: any;
  setSong: any;
}) {
  const {
    setArtistName,
    setArtistSongs,
    setArtistImage,
    setArtistGenre,
    setArtistAlbums,
    setSong,
  } = props;
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${
        import.meta.env.VITE_CLIENT_ID
      }&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`,
    };
    fetch(`https://accounts.spotify.com/api/token`, authParameters)
      .then((response) => response.json())
      .then((data) => {
        console.log(`${data.access_token}`);
        setAccessToken("" + data.access_token);
      });
  }, []);

  async function fetchAPI(searchString: any) {
    const searchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    };

    var generalSongs = await fetch(
      `https://api.spotify.com/v1/search?q=${searchString}&type=track`,
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        return data;
      });
    //console.log(generalSongs);

    const artist = await fetch(
      `https://api.spotify.com/v1/search?q=${searchString}&type=artist`,
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.artists.items[0].id);
        return data.artists.items[0];
      });

    //console.log(artist);

    const artistAlbums = await fetch(
      `https://api.spotify.com/v1/artists/${artist.id}/albums?include_groups=album&market=US&limit=3`,
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.items);
        return data.items;
      });

    var artistTopTracks = await fetch(
      `https://api.spotify.com/v1/artists/${artist.id}/top-tracks`,
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        return data;
      });
    return [artist, artistAlbums, artistTopTracks, generalSongs];
  }

  return (
    <>
      <nav data-bs-theme="dark" className="navbar bg-body-primary ">
        <form className="container-fluid">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              //
            </span>
            <input
              id="searchField"
              type="text"
              className="form-control"
              placeholder="Search Our API"
              aria-label="Search Our API"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                fetchAPI(e.target.value).then((response) => {
                  //console.log("artist");
                  setArtistName(response[0].name);
                  setArtistGenre(response[0].genres);
                  setArtistImage(response[0].images[0].url);

                  // console.log("artist albums");

                  const namesArray = response[1].map(
                    (item: {
                      images: { url: string }[];
                      name: string;
                      total_tracks: string;
                    }) => ({
                      firstImage:
                        item.images.length > 0 ? item.images[0].url : null,
                      name: item.name,
                      track_number: item.total_tracks,
                    })
                  );
                  setArtistAlbums(namesArray);
                  //console.log(response[1]);

                  //console.log("artist top tracks");
                  const songArray = response[2].tracks.map(
                    (item: {
                      name: string;
                      duration_ms: number;
                      album: any;
                    }) => ({
                      song_name: item.name,
                      song_duration: item.duration_ms,
                      Image:
                        item.album.images.length > 0
                          ? item.album.images[0].url
                          : null,
                    })
                  );
                  setArtistSongs(songArray);
                  //console.log("tracks");
                  //console.log(response[2].tracks);

                  console.log("general song search");
                  const generalSong = response[3].tracks.items.map(
                    (item: {
                      name: string;
                      duration_ms: number;
                      album: any;
                      artists: any;
                    }) => ({
                      song_name: item.name,
                      song_duration: item.duration_ms,
                      Image:
                        item.album.images.length > 0
                          ? item.album.images[0].url
                          : null,
                      artist_name: item.artists[0].name,
                    })
                  );
                  setSong(generalSong);
                  console.log(generalSong);
                  console.log(response[3].tracks.items);
                });

                console.log(e.target.value);
              }}
            />
          </div>
        </form>
      </nav>
    </>
  );
}
