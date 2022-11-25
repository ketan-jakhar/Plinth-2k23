import React from 'react'

function Zipper() {
    return (
        <>
        <mesh position={[0,-220,400]}>
            <boxGeometry args={[80, 250, 10]}/>
            <meshLambertMaterial color= "white" flatShading={true}/>
        </mesh>
        </>
    )
}

export default Zipper
