
// import React, { useState, useRef } from 'react';
// import ReactPlayer from 'react-player';
// import { useSwipeable } from 'react-swipeable';
// import './css/youtube.css';
// import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
// import { MdOutlineInsertComment } from "react-icons/md";
// import { AiTwotoneLike } from "react-icons/ai";
// import { AiTwotoneDislike } from "react-icons/ai";


// const YouTubeShortsPlayer = ({ videos }) => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [likedVideos, setLikedVideos] = useState(348);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [played, setPlayed] = useState(0);

//   const playerRef = useRef(null);

//   const handleSwipe = (direction) => {
//     console.log("Swipe direction:", direction);
//     if (direction === 'up' && currentVideoIndex < videos.length - 1) {
//       setCurrentVideoIndex((prevIndex) => prevIndex + 1);
//       setIsPlaying(true);
//       console.log("swipe up pressed");
//     } else if (direction === 'down' && currentVideoIndex > 0) {
//       setCurrentVideoIndex((prevIndex) => prevIndex - 1);
//       setIsPlaying(true);
//       console.log("swipe down pressed");
//     }
//   };

//   const handleLikeClick = () => {
//     setLikedVideos(likedVideos + 1);
//   };

//   const handleVideoProgress = (state) => {
//     setPlayed(state.played);
//   };

//   const handleNextVideo = () => {
//     if (currentVideoIndex < videos.length - 1) {
//       setCurrentVideoIndex((prevIndex) => prevIndex + 1);
//       setIsPlaying(true);
//     } else {
//       setCurrentVideoIndex(0);
//       setIsPlaying(true);
//     }
//   };

//   const handlePrevVideo = () => {
//     if (currentVideoIndex > 0) {
//       setCurrentVideoIndex((prevIndex) => prevIndex - 1);
//       setIsPlaying(true);
//     } else {
//       console.log("first video");
//     }
//   };

//   const handlers = useSwipeable({
//     onSwiped: (event) => {
//       const { deltaY } = event;
//       const direction = deltaY < 0 ? 'up' : 'down';
//       handleSwipe(direction);
//     },
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true,
//     trackTouch: true,
//   });

//   return (
//     <>
//     <div style={{ height: "90vh" }} className="youtube-shorts-player" {...handlers}>
//       <ReactPlayer
//         ref={playerRef}
//         url={videos[currentVideoIndex].url}
//         config={{
//           youtube: {
//             playerVars: { showinfo: 1 }
//           },}}
//         playing={isPlaying}
//         controls={false}
//         onProgress={handleVideoProgress}
//         width="100%"
//         height="100%"
//         style={{ touchAction: 'none' }}
//       />

//       <div className="progress-bar">
//         <div style={{ width: `${played * 100}%`, backgroundColor: "red", height: "5px" }} className="progress-bar-filled"></div>
//       </div>
//       <div className="shortsVideoSideIcons">
//         <div className="shortsVideoSideIcon">
//           <AiTwotoneLike onClick={handleLikeClick} className='icons' size={30} />
//           <p>{likedVideos}</p>
//         </div>
//         <div className="shortsVideoSideIcon">
//           <AiTwotoneDislike className='icons' size={30} />
//           <p>dislike</p>
//         </div>
//         <div className="shortsVideoSideIcon">
//           <MdOutlineInsertComment className='icons' size={30} />
//           <p>20</p>
//         </div>

       
//       </div>
//       <FaArrowUpLong onClick={handlePrevVideo} className="TopIcon" />
//       <FaArrowDownLong onClick={handleNextVideo} className="DownIcon" />
//     </div>
   
//     </>
//   );
// };

// export default YouTubeShortsPlayer;


import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './css/youtube.css';
import { FaArrowUpLong, FaArrowDownLong } from 'react-icons/fa6';
import { MdOutlineInsertComment } from 'react-icons/md';
import { AiTwotoneLike } from 'react-icons/ai';
import { AiTwotoneDislike } from 'react-icons/ai';
import { RiShareForwardFill } from 'react-icons/ri';

const YouTubeShortsPlayer = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [likedVideos, setLikedVideos] = useState(348);
  const [isPlaying, setIsPlaying] = useState(true);
  const [played, setPlayed] = useState(0);

  const playerRef = useRef(null);
  const swipeStartY = useRef(null);
 
  useEffect(() => {
    const handleSwipeDirection = (direction) => {
      if (direction === 'up' && currentVideoIndex < videos.length - 1) {
        setCurrentVideoIndex((prevIndex) => prevIndex + 1);
        setIsPlaying(true);
        console.log('swipe up pressed');
      } else if (direction === 'down' && currentVideoIndex > 0) {
        setCurrentVideoIndex((prevIndex) => prevIndex - 1);
        setIsPlaying(true);
        console.log('swipe down pressed');
      }
    };
    const handleSwipe = (event) => {
      const deltaY = event.clientY - swipeStartY.current;

      if (Math.abs(deltaY) > 50) {
        const direction = deltaY < 0 ? 'up' : 'down';
        handleSwipeDirection(direction);
      }
    };

    const handleSwipeStart = (event) => {
      swipeStartY.current = event.clientY;
    };

    const handleSwipeEnd = () => {
      swipeStartY.current = null;
    };

    document.addEventListener('mousedown', handleSwipeStart);
    document.addEventListener('mousemove', handleSwipe);
    document.addEventListener('mouseup', handleSwipeEnd);

    return () => {
      document.removeEventListener('mousedown', handleSwipeStart);
      document.removeEventListener('mousemove', handleSwipe);
      document.removeEventListener('mouseup', handleSwipeEnd);
    };
  }, []);



  const handleLikeClick = () => {
    setLikedVideos(likedVideos + 1);
  };

  const handleVideoProgress = (state) => {
    setPlayed(state.played);
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
      setIsPlaying(true);
    } else {
      setCurrentVideoIndex(0);
      setIsPlaying(true);
    }
  };

  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex((prevIndex) => prevIndex - 1);
      setIsPlaying(true);
    } else {
      console.log('first video');
    }
  };

  return (
    <div style={{ height: '90vh' }} className="youtube-shorts-player">
      <ReactPlayer
        ref={playerRef}
        url={videos[currentVideoIndex].url}
        playing={isPlaying}
        controls={false}
        onProgress={handleVideoProgress}
        width="100%"
        height="100%"
      />

      <div className="progress-bar">
        <div style={{ width: `${played * 100}%`, backgroundColor: 'red', height: '5px' }} className="progress-bar-filled"></div>
      </div>
      <div className="shortsVideoSideIcons">
        <div className="shortsVideoSideIcon">
          <AiTwotoneLike onClick={handleLikeClick} className='icons' size={30} />
          <p>{likedVideos}</p>
        </div>
        <div className="shortsVideoSideIcon">
          <AiTwotoneDislike className='icons' size={30} />
          <p>dislike</p>
        </div>
        <div className="shortsVideoSideIcon">
          <MdOutlineInsertComment className='icons' size={30} />
          <p>20</p>
        </div>

        <div className="shortsVideoSideIcon">
          <RiShareForwardFill className='icons' size={30} />
          <p>share</p>
        </div>
      </div>
      <FaArrowUpLong onClick={handlePrevVideo} className="TopIcon" />
      <FaArrowDownLong onClick={handleNextVideo} className="DownIcon" />
    </div>
  );
};

export default YouTubeShortsPlayer;
