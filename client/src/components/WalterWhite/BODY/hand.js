import React from 'react'

function Hand() {
    return (
        <>
        <mesh position={[-170,-350,220]}>
            <boxGeometry args={[50, 50, 50]}/>
            <meshLambertMaterial color= "#e0bea5" flatShading={true}/>
        </mesh>

        <mesh position={[170,-350,220]}>
            <boxGeometry args={[50, 50, 50]}/>
            <meshLambertMaterial color= "#e0bea5" flatShading={true}/>
        </mesh>
        </>
    )
}

export default Hand
