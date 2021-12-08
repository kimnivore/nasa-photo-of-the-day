import React from 'react';

const Top = ( { title, date} ) => {
  
    return (
        <div>
            <h2>Title: {title}</h2>
            <p>Date: {date}</p>
        </div>
    );
}

export default Top;