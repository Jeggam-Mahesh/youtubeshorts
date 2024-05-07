import React from 'react';
import './App.css';
import vedioData from './Components/Data';
import YouTubeShortsPlayer from './Components/YouTubeShortsPlayer';
import SampleComp from './new folder/SampleComp';


function App() {
  return (
    <>
   <h2>YOU TUBE SHORTS APP</h2>
      <YouTubeShortsPlayer videos={vedioData} />
      <SampleComp/>
    </>
  );
}

export default App;
