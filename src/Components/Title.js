import React from 'react';

const Title = props => {
    const { title, date } = props;
    return (
        <div>
            <h2>{props.data.title}</h2>
            <h3>{props.data.date}</h3>
        </div>
    )
}

export default Title;