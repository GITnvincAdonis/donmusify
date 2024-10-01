export default function MusicResults() {
  const songs = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <>
      <div className="upper-song-container"></div>
      <div className="retrieved-songs">
        {songs.map((item, index) => {
          console.log(item);
          return (
            <div key={index} className={`  main-song-info`}>
              {index + 1}.
              <img
                className={`main-song-image main-song-image-${index + 1}`}
                src="..."
                alt=""
              />
              <div className={`  main-song-info-text`}>
                <div className={`main-song-name`}>
                  {" "}
                  <h3>fetched Song Name</h3>
                  <div>simba/adsv/ad</div>
                </div>
                <h4 className={`main-song-duration`}>1:20</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
