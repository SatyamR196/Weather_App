import Button from "@mui/material/Button";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import TravelExploreTwoToneIcon from "@mui/icons-material/TravelExploreTwoTone";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {

    let [city,setCity] = useState("");

    function handleText(event){
        setCity(event.target.value);
        console.log(event.target.value);
    }

    async function handleSearch(event){
        event.preventDefault();
        console.log(city);
        let apiKey= "3a0a84816a0f49bc82854256242407" ;
        let apiURL=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes&alerts=yes`;
        console.log(apiURL);
        let response = await fetch(apiURL);
        let result= await response.json();

        result = result.error ? {...result,isfound:false} : {...result, isfound: true}
        console.log(result);
        console.log(result.isfound);

        updateInfo(result);
    }
  return (
    <>
      <h1 style={{textAlign:"center"}}>Weather App</h1>
      <div className="contain-form">
        <form onSubmit={handleSearch} id="form-box">
          <TextField
            id="textbox"
            style={{width:`calc(80%)`,marginRight: "2%"}}
            label="City or (latitude,longitude)"
            variant="filled"
            helperText="Try to name well known city near you"
            required
            name="location"
            value={city}
            onChange={handleText}
            color="secondary"
          />
          <Button
            size="large"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Search <MapTwoToneIcon fontSize="large" />
          </Button>
        </form>
      </div>

    </>
  );
}
