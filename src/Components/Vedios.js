// import { Avatar } from "@material-ui/core";
import { RxAvatar } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";
import { MdOutlineComment } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";

import React, { useRef, useState } from "react";
import "./css/Video.css";
// import Ticker from "react-ticker";

function Videos({
  id,
  src,  
  channel,
  description,
  like,
  dislike,
  share,
  comment,
}) {
  const [playing, setPlaying] = useState(false);
  const [subs, setSubs] = useState(false);
console.log(id,src,channel,description,share);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setPlaying((play) => !play);
    }
  };

  const handleSubscribe = () => {
    setSubs((sub) => !sub);
  };

  return (
    <div className="video">
      {/* <video
        id={id}
        className="video__player"
        onClick={handleVideoPress}
        loop
        ref={videoRef}
        src="https://youtube.com/shorts/Sb1bVum2ayQ?si=EVW2CRdBfYoKtOUN"
      /> */}
 <video
        className="video__player"
        onClick={handleVideoPress}
        loop
        ref={videoRef}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="shortsContainer">
        <div className="shortsVideoTop">
          <div className="shortsVideoTopIcon">
            <FaArrowLeft />
          </div>
          <div className="shortsVideoTopIcon">
            <IoMdMore />
          </div>
        </div>
        <div className="shortsVideoSideIcons">
          <div className="shortsVideoSideIcon">
            <FaThumbsUp />
            <p>{like}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <FaThumbsDown />
            <p>{dislike}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <MdOutlineComment/>
            <p>{comment}</p>
          </div>

          <div className="shortsVideoSideIcon">
            <RiShareForwardFill />
            <p>{share}</p>
          </div>
        </div>
        <div className="shortsBottom">
          {/* <div className="shortsDesc">
            <Ticker mode="smooth">
              {({ index }) => (
                <>
                  <p className="description">{description}</p>
                </>
              )}
            </Ticker>
          </div> */}
          <div className="shortDetails">
            <RxAvatar
              src={
                "https://lh3.googleusercontent.com/ogw/ADGmqu8BCzU8GejYorGqXeu98A1kfEFYKFT85I3_9KJBzfw=s32-c-mo"
              }
            />
            <p>{channel}</p>
            <button
              style={{
                background: subs ? "red" : "hsla(0,0%,69.4%,.609)",
              }}
              onClick={handleSubscribe}
            >
              {subs ? "SUBSCRIBED" : "SUBSCRIBE"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
