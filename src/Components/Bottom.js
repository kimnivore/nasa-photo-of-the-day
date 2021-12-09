import React from 'react';


function Bottom(props) {
    const { url, explanation } = props;
      return (
          <div >
              <img src={url} alt="" />
              <p>Explanation: {explanation}</p>
          </div>
      );
  }
  
  export default Bottom;