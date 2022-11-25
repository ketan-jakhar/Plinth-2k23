import React from 'react'

function Hat() {
    return (
        <group>
        <mesh position={[0,270,280]}>
        <boxGeometry args={[320 ,120, 290]}/>
        <meshLambertMaterial color= "#333" flatShading={true}/>
        </mesh>
        <mesh position={[0,190,280]}>
            <boxGeometry args={[400 ,40, 380]}/>
            <meshLambertMaterial color= "#333" flatShading={true}/>
        </mesh>
        </group>
    )
}

export default Hat
