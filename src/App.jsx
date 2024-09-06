import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './SearchBox';
import Displayinfo from './displayinfo';

function App() {
  let [whetherInfo,setWhetherInfo] = useState({
    error:{ message : "something went wrong"},
    isfound: false});

  function updateInfo(result) {
    setWhetherInfo(result);
  }
  
  return (
    <>
      <SearchBox updateInfo={updateInfo}/>
      <br></br>
      <Displayinfo info={whetherInfo}/>
      {/* {whetherInfo.isfound ? <Displayinfo info={whetherInfo} /> : <h1>place not found </h1>} */}
      <br />
      <ul><b>Upcoming features:-</b>
        <li>Better UI, Dark mode</li>
        <li>Astronomy related details - Sunrise,Sunset...</li>
        <li>Whether Forcast upto 10 days(input:date)</li>
        <li>Future Whether upto 300 days(input:days)</li>
        <li>Embeded location of the city in the map</li>
      </ul>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5214.119769615199!2d80.70884667224983!3d22.056524426398912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a194ead90c349%3A0xe067ae45c543f9cf!2sMalanjkhand%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1721902856567!5m2!1sen!2sin" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
      <i style={{textAlign:"center"}}>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></i>
    </>
  )
}

export default App
