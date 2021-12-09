import React from 'react';
import styled, { keyframes } from 'styled-components';


const kf = keyframes`
  50% {
      transform: scale(0.75);
  }  
  100% {
    opacity: 1;  
    transform: scale(1);
  }
`;

const StyledBottom = styled.div`

img {
    width: 50%;
    height: auto;
    margin: 25px;
    border: 5px solid orange;
    border-radius: 25%;
}
p {
    width: 80%;
    margin: 15px auto;
}
button {
    background-color: black;
    padding: 20px;
    color: orange;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 25%;
    margin-top: 20px;

    &:hover {
        transform: scale(1.5);
        background-color: lightblue;
    }
}
transform: scale(0.2);
opacity: 1;
animation: ${kf} 0.5s ease-in-out forwards;

`;

function Bottom(props) {
    const { url, explanation } = props;
      return (
          <StyledBottom>
            <img src={url} alt="Today's picture" />
            <p>{explanation}</p>
            <a href='https://apod.nasa.gov/apod/archivepix.html'><button>Picture of the Day Archive</button></a>
          </StyledBottom>
      );
}
 
  export default Bottom;
