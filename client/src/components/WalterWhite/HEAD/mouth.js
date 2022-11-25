import React from 'react'

function Mouth() {
    return (
        <mesh position={[0,-30,480]}>
        <boxGeometry args={[90 ,60, 20]}/>
        <meshLambertMaterial color= "#e0bea5" flatShading={true}/>
        </mesh>
    )
}

export default Mouth
