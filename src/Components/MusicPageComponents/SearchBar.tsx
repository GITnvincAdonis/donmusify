import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";

export default function SearchBar(props: {
  setError: any;
  setLoading: any;
  setArtistName: any;
  setArtistGenre: any;
  setArtistImage: any;
  setArtistSongs: any;
  setArtistAlbums: any;
  setSong: any;
  setSearchString: any;
}) {
  const {
    setError,
    setLoading,
    setArtistName,
    setArtistSongs,
    setArtistImage,
    setArtistGenre,
    setArtistAlbums,
    setSong,
    setSearchString,
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
    setLoading(true);
    const searchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    };
    try {
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
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  const regex = /[a-zA-Z0-9]/g;

  const [inputString, updateString] = useState("");
  function ValidateString(input: String) {
    const matches = input.match(regex); // Match all alphanumeric groups
    const newString = matches ? matches.join("") : ""; // Join them back together // Join them back together
    console.log(newString); // Log the cleaned string without special characters
    return newString;
  }

  return (
    <>
      <nav data-bs-theme="dark" className="navbar p-0 m-0 bg-body-primary ">
        <form className="container-fluid">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              //
            </span>
            <input
              id="searchField"
              type="text"
              autoComplete="off"
              className="form-control search-bar"
              placeholder="Search Our API"
              aria-label="Search Our API"
              onChange={(e) => {
                setSearchString(e.target.value);
                updateString(ValidateString(e.target.value));
                if (inputString != "") {
                  fetchAPI(inputString).then((response) => {
                    //console.log("artist");
                    if (response != undefined) {
                      setArtistName(response[0].name);
                      setArtistGenre(response[0].genres);
                      setArtistImage(response[0].images[0].url);
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
                    }
                  });
                }

                console.log(e.target.value);
              }}
            />
          </div>
        </form>
      </nav>
    </>
  );
}
