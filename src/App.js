import React from 'react';
import './App.css';
import vedioData from './Components/Data';
import YouTubeShortsPlayer from './Components/YouTubeShortsPlayer';


function App() {
  return (
    <>
   
      <YouTubeShortsPlayer videos={vedioData} />
    </>
  );
}

export default App;
