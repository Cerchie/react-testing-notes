import React from 'react';

function FixedComponent(props){
    return (
        <>
        <p>{props.favNum}</p>
        <p>{props.favNum + 2}</p>
        <p>{props.favNum + 1}</p>
        </>
    )
}

FixedComponent.defaultProps = {
    favNum: 42
}

export default FixedComponent;