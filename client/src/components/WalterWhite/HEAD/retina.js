import React from 'react'

function Retina() {
    return (
        <>
        <mesh position={[-80,105,460]}>
            <boxGeometry args={[25, 25, 5]}/>
            <meshLambertMaterial color= "#333" flatShading={true}/>
        </mesh>
        <mesh position={[80,105,460]}>
            <boxGeometry args={[25, 25, 5]}/>
            <meshLambertMaterial color= "#333" flatShading={true}/>
        </mesh>
        </>
    )
}

export default Retina
