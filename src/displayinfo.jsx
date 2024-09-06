import "./displayinfo.css";

export default function Displayinfo({ info }) {
    console.log(info.isfound);
  return (
    <>
      {/* <h1>
        All the data will be displayed here {info.isfound}
      </h1> */}
      {info.isfound ? 
      <div className="content">
        <div>{info.location.name}</div>
        <div>{info.location.region}</div>
        <div>{info.location.country}</div>
        <div>{info.location.localtime}</div>
        <div>{info.current.condition.text}</div>
        <img src={info.current.condition.icon} />
        <div>Temperature : {info.current.temp_c} &deg;C</div>
        <div>Feels like : {info.current.feelslike_c} &deg;C</div>
        <div>Rainfall : {info.current.precip_mm} mm</div>
        <div>Humidity : {info.current.humidity} %</div>
        <div>Cloud : {info.current.cloud} %</div>
        <div>Wind Direction : {info.current.wind_dir}</div>
        
      </div>
      : <div>{info.error.message}</div>}
    </>
  );
}
// {info.location.country}
{/* <div>{info.location.country}</div> : <div>Place not found</div> */}

