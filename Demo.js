import React from 'react'

const Demo = (props) => {
    console.log(props);
    return (
        <h1>{props.number}</h1>
    )
}

export default Demo;