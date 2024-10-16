//import { useEffect } from "react";
import "./IntroPageStyles.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import { motion } from "framer-motion";

const ANimationStates = {
  initial: {
    y: "20vw",
  },
  animate: {
    opacity: 1,
    y: "0",
  },
};

export default function IntroPage() {
  const navigate = useNavigate();
  const words = ["DON", "-", "Musify"];
  const words2 = "Powered by the Spotify API".split(" ");
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0 }}
        className="border vh-100 vw-100 d-flex  justify-content-center  "
      >
        <div className=" intro-container">
          <div className="intro-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g id="页面-1" stroke="none" stroke-width="1" fill="none">
                <g id="headphone_line">
                  <path
                    d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                    id="MingCute"
                    fill-rule="nonzero"
                  ></path>
                  <path
                    className="comp-SVG"
                    d="M12,2 C17.5168,2 22,6.44539 22,11.9425 C22,13.3049 21.831,14.284 21.5738,15.0761 C20.9627,16.9584 19.7003,18.5415 18.2717,19.8765 C17.2903,20.7935 15.8332,20.6539 14.9584,19.7841 C13.7164,18.5493 13.3758,16.6316 14.7226,15.2935 L15.6426,14.3794 C16.5979,13.4302 18.1333,13.4083 19.1153,14.3297 C19.3925,14.5898 19.5286,14.8989 19.6716,14.4585 C19.8534,13.8984 20,13.1324 20,11.9425 C20,7.56202 16.4243,4 12,4 C7.57567,4 4,7.56202 4,11.9425 C4,13.1324 4.14659,13.8984 4.32843,14.4585 C4.47144,14.8989 4.60748,14.5898 4.88468,14.3297 C5.8667,13.4083 7.4021,13.4302 8.35736,14.3794 L9.27736,15.2935 C10.6242,16.6316 10.2836,18.5493 9.04161,19.7841 C8.16679,20.6539 6.70971,20.7935 5.72834,19.8765 C4.29036,18.5328 3.04086,16.9692 2.42619,15.0761 C2.169,14.284 2,13.3049 2,11.9425 C2,6.44539 6.4832,2 12,2 Z M17.0523,15.7981 C16.4744,16.3723 15.2616,17.2653 16.1321,18.1307 C16.3241,18.3217 16.6235,18.6793 16.9062,18.4151 C17.5442,17.8189 18.1687,17.1449 18.5889,16.5783 C18.2586,16.2684 17.5628,15.2909 17.0523,15.7981 Z M6.94771,15.7981 C6.43716,15.2909 5.74142,16.2684 5.41107,16.5783 C5.83127,17.1449 6.45577,17.8189 7.09384,18.4151 C7.37647,18.6793 7.67589,18.3217 7.86794,18.1307 C8.73842,17.2653 7.52563,16.3723 6.94771,15.7981 Z"
                    id="形状结合"
                
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="intro-text">
            <motion.div className="logo-text overflow-hidden">
              {words.map((item, index) => {
                return (
                  <motion.h2
                    key={index}
                    variants={ANimationStates}
                    initial="initial"
                    animate="animate"
                    transition={{
                      delay: 0.1 * index,
                      type: "tween",
                      ease: "circOut",
                      duration: 2,
                    }}
                  >
                    {item}
                  </motion.h2>
                );
              })}
            </motion.div>
            <motion.div className="logo-text-2 overflow-hidden ">
              {words2.map((item, index) => {
                const string = item + " ";
                return (
                  <motion.h3
                    key={index}
                    className={
                      "logo-text-2-word logo-text-2-word-" + (index + 1)
                    }
                    variants={ANimationStates}
                    initial="initial"
                    animate="animate"
                    transition={{
                      delay: 0.1 * index,
                      type: "tween",
                      ease: "circOut",
                      duration: 2,
                    }}
                  >
                    {string}
                  </motion.h3>
                );
              })}
            </motion.div>
            <motion.div className=" nav-button overflow-hidden ">
              {" "}
              <motion.button
                initial={{ opacity: 0, y: "200px" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  mass: 2,
                  velocity: 3,
                  damping: 40,
                  restDelta: 0.000001,
                }}
                onClick={() => {
                  navigate("/music-interface");
                }}
                className=""
              >
                navigate to music page
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
