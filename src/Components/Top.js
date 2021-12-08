import React from 'react';

const Card = ( { title, date, url, explanation} ) => {
  
    return (
        <div >
            <h2>Title: {title}</h2>
            <p>Date: {date}</p>
            <img src={url} alt="" />
            <p>Explanation: {explanation}</p>
        </div>
    );
}


export default Card;

