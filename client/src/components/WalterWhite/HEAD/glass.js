import React from 'react'

function Glass() {
    return (
        <group>
        <mesh position={[-80,100,450]}>
            <boxGeometry args={[120, 78, 10]}/>
            <meshLambertMaterial color= "white" flatShading={true}/>
        </mesh>
        
        <mesh position={[80,100,450]}>
        <boxGeometry args={[120, 78, 10]}/>
        <meshLambertMaterial color= "white" flatShading={true}/>
        </mesh>
        <mesh position={[0,100,450]}>
            <boxGeometry args={[40, 10, 10]}/>
            <meshLambertMaterial color= "#333" flatShading={true}/>
        </mesh>
        </group>
    )
}

export default Glass
