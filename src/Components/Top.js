import React from 'react';

function Top(props) {
  const { title, date, url, copyright } = props;
    return (
        <div >
            <h1><a className='App-link' href={url}>{title}</a></h1>
            <p>{date}</p>
            <p>{copyright}</p>
        </div>
    );
}


// const Card = ( { title, date, url, explanation} ) => {
// return (
//     <div >
//         <h2>Title: {title}</h2>
//         <p>Date: {date}</p>
//         <img src={url} alt="" />
//         <p>Explanation: {explanation}</p>
//     </div>
// );
// }

export default Top;

