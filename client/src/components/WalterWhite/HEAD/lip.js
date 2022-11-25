import React from 'react'

function Lip() {
    return (
        <mesh position={[0,-30,470]} >
        <boxGeometry args={[40 ,20, 50]}/>
        <meshLambertMaterial color= "#333" flatShading={true}/>
        </mesh>
    )
}

export default Lip
