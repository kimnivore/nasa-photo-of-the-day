import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Top from '../src/Components/Top.js';
import Bottom from '../src/Components/Bottom.js';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-12-08`)
      .then(resp => {
        console.log(resp);
        setData(resp.data)
        // console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <h1> Astronomy Picture of the Day </h1>
          <Top
            title={data.title}
            date={data.date}
          />
          <Bottom
            url={data.url}
            explanation={data.explanation}
          />
    </div>
  );
}

export default App;


// <p>
// Read through the instructions in the README.md file to build your NASA
// app! Have fun <span role="img" aria-label='go!'>🚀</span>!
// </p>