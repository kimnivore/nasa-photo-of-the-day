import React from 'react';
import styled from 'styled-components';


const StyledTop = styled.div`
    width: 70%;
    padding: 10px;
    border: 2px orange solid;
    border-radius: 10%;
    background-color: coral;
    color: black;
    margin: auto;

    h1 {
        font-size: 3rem;
    }
    p {
        font-size: 1rem;
        font-style: italic;
    }
    h3 {
        font-size: 1.5rem;
    }
    &:hover {
    transition: all 0.2s ease-in-out;
    background-color: lightblue;
    }

`;

function Top(props) {
  const { title, date, copyright } = props;
    return (
        <StyledTop >
            <h1>{title}</h1>
            <p>Date: {date}</p>
            <h3>{copyright}</h3>
        </StyledTop>
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

