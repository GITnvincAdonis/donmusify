//import { useEffect } from "react";
import "./IntroPageStyles.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
export default function IntroPage() {
  const navigate = useNavigate();
  //   useEffect(() => {
  //     setTimeout(() => {
  //         navigate("/music-interface");
  //     }, 5000);
  //   });
  return (
    <>
      <div className="border vh-100 vw-100 d-flex  justify-content-center  ">
        <div className=" intro-container">
          <div className="intro-image"></div>
          <div className="intro-text">
            <h1 className="logo-text">DON-musify</h1>
            <h2 className="logo-text-2">powered by the Spotify API</h2>
            <button
              type="button"
              onClick={() => {
                navigate("/music-interface");
              }}
              className="btn btn-primary"
            >
              navigate to music page
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
