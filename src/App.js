import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
//import Title from './Title';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-12-08`)
      .then(resp => {
        console.log(resp);
        setData(resp.data)
        console.log(data);
      })
      .catch(err => {
        debugger
      })
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1> Astronomy Picture of the Day </h1>
      {/* <Title />
      <Date />
      <Image />
      <Explanation /> */}

    </div>
  );
}

export default App;


// <p>
// Read through the instructions in the README.md file to build your NASA
// app! Have fun <span role="img" aria-label='go!'>🚀</span>!
// </p>