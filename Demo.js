import React from 'react'

const Demo = (props) => {
    console.log(props);
    return (
        <div>{props.number}</div>
    )
}

export default Demo;