// import Chart  from 'chart.js/auto';   
import { useState } from 'react';
import './App.css';
import Videos from './Components/Vedios'
import data from './Components/Data'
// import { Bar } from 'react-chartjs-2';
import vedioData from './Components/Data';
import YouTubeShortsPlayer from './Components/YouTubeShortsPlayer';
// const labels=['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec'];
// const data={
//   labels:labels,
//   datasets:[{
//     label:'Rainfall 2020',
//     data:[10,20,34,24,23,54,54,56,67,92,11,12]
// },
// {
// label:'Rainfall 2021',
// data:[10,29,84,94,23,54,14,56,97,92,41,12]
// }
// ]}
// const options={
//   plugins:{
//     legend:{postion:'bottom'},
//     title:{display:true,text:"Monthly Rainfall (mm)"}
// }
// }

function App() {
  const [ytVideo,setYtvedio]=useState(data)
  console.log("ytVideo==",ytVideo);
  return (
    // <div className="App" style={{height:"80vh",width:"70vw",alignContent:"center"}}>
    //  <Bar  options={options} data={data}/>
    // </div>
    <>
    <YouTubeShortsPlayer videos= {vedioData} />
   
    {/* <div className="app__videos">
        {ytVideo.map((vid) => (
          <Videos
            id={vid.id}
            src={vid.url} 
            channel={vid.channel}
            description={vid.description}
            like={vid.like}
            dislike={vid.dislike}
            share={vid.share}
            comment={vid.comment}
          />
        ))}
      </div> */}
    </>
  );
}

export default App;
