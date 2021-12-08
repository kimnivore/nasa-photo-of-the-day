import React from 'react';

const Bottom = ( { url, explanation } ) => {
  
    return (
        <div>
            <img src={url} alt="" />
            <p>Explanation: {explanation}</p>
        </div>
    );
}

export default Bottom;