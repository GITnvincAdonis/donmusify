interface GeneralSong {
  Image: string;
  song_name: string;
  song_duration: number;
  artist_name: string;
}

export default function MusicResults(props: { songObject: GeneralSong[] }) {
  const { songObject } = props;

  // console.log(songObject);
  return (
    <>
      <div className="upper-song-container"></div>
      <div className="retrieved-songs">
        {songObject.map((item, index) => {
          const minutes = Math.floor(item.song_duration / 60000);
          const seconds = Math.floor((item.song_duration % 60000) / 1000);

          const isDivisible = seconds / 10 >= 1;
          const time = `${minutes}:${isDivisible ? seconds : "0" + seconds}`;
          const songName = item.song_name;
          const artistName = item.artist_name;
          const songImage = item.Image;

          return (
            <div key={index} className={`  main-song-info`}>
              <div className="text-white  number-column">{index + 1}.</div>

              <img
                className={`main-song-image main-song-image-${index + 1}`}
                src={songImage}
                alt=""
              />
              <div className={`  main-song-info-text`}>
                <div className={`main-song-name`}>
                  {" "}
                  <h3>{songName}</h3>
                  <div>{artistName} </div>
                  <div className={`hover-text hover-text-${index + 1}`}>
                    <h4>{songName}</h4>
                  </div>
                </div>

                <div className={`main-song-duration`}>
                  {" "}
                  <h5></h5>
                  <h5>{time} </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
