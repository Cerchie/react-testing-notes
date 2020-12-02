import React from 'react';

function BrokenComponent(props){
    return (
        <>
        <p>{props.favNum}</p>
        <p>{props.favNum}</p>
        <p>{props.favNum++}</p>
        </>
    )
}

BrokenComponent.defaultProps = {
    favNum: 42
}

export default BrokenComponent;