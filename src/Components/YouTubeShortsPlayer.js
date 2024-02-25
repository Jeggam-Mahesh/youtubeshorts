
import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useSwipeable } from 'react-swipeable';
import './css/youtube.css'
// import { RxAvatar } from "react-icons/rx";
// import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { RiShareForwardFill } from "react-icons/ri";
const YouTubeShortsPlayer = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [likedVideos, setLikedVideos] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [played, setPlayed] = useState(0);

  const playerRef = useRef(null);

  const handleSwipe = (direction) => {
    if (direction === 'up' && currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
      setIsPlaying(true);
    } else if (direction === 'down' && currentVideoIndex > 0) {
      setCurrentVideoIndex((prevIndex) => prevIndex - 1);
      setIsPlaying(true);
    }
  };

  const handleLikeClick = () => {
    const currentVideo = videos[currentVideoIndex];
    const isAlreadyLiked = likedVideos.includes(currentVideo.id);

    if (isAlreadyLiked) {
      setLikedVideos(likedVideos.filter((likedId) => likedId !== currentVideo.id));
    } else {
      setLikedVideos([...likedVideos, currentVideo.id]);
    }
  };

  const handleVideoProgress = (state) => {
    setPlayed(state.played);
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
      setIsPlaying(true);
    }
  };

  const handlers = useSwipeable({
    onSwiped: (event) => {
      const { deltaY } = event;
      const direction = deltaY < 0 ? 'up' : 'down';
      handleSwipe(direction);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true,
  });

  return (
    <div style={{ height:"90vh" }} className="youtube-shorts-player" {...handlers}>
      <ReactPlayer
        ref={playerRef}
        url={videos[currentVideoIndex].url}
        playing={isPlaying}
        // controls={false}
        onProgress={handleVideoProgress}
        width="100%"
        height="100%"
      />
       
       <div className="progress-bar">
          <div style={{ width: `${played * 100}%`,backgroundColor:"red",height:"5px" }}  className="progress-bar-filled"></div>
        </div>
        <div className="shortsVideoSideIcons">
          <div className="shortsVideoSideIcon">
            <AiTwotoneLike className='icons' size={40}/>
            <p>349</p>
          </div>
          <div className="shortsVideoSideIcon">
            <AiTwotoneDislike className='icons' size={40}/>
            <p>dislike</p>
          </div>
          <div className="shortsVideoSideIcon">
            <MdOutlineInsertComment className='icons' size={38}/>
            <p>20</p>
          </div>

          <div className="shortsVideoSideIcon">
            <RiShareForwardFill className='icons' size={40} />
            <p>share</p>
          </div>
        </div>
        
      <div className="video-controls">
        <button onClick={handleLikeClick} className={`like-button ${likedVideos.includes(videos[currentVideoIndex].id) ? 'liked' : ''}`}>
          Like
        </button>
        <span className="video-title">{videos[currentVideoIndex].title}</span>
       
        <button onClick={handleNextVideo} className="next-button">
          Next
        </button>
      </div>
      {/* <div className="shortsContainer">
        <div className="shortsVideoTop">
          <div className="shortsVideoTopIcon">
            <FaArrowLeft className='icons' size={40}/>
          </div>
         
        </div>
          <div className="shortDetails1">
            <RxAvatar size={105}/>
            <p >channel for the tutorials</p>
            <button
              style={{
                color:"white",
                backgroundColor: "orangered",
              height:"30px",
              border:"orangered"
              }}>
            subscribe
            </button>
          </div>
        </div> */}
      </div>
    
  );
};

export default YouTubeShortsPlayer;


