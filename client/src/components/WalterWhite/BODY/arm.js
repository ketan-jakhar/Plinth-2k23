import React from 'react'

function Arm() {
    return (
        <>
        <mesh position={[-170,-200,200]}>
            <boxGeometry args={[50, 250, 100]}/>
            <meshLambertMaterial color= "#333" flatShading={true}/>
        </mesh>

        <mesh position={[170,-200,200]}>
            <boxGeometry args={[50, 250, 100]}/>
            <meshLambertMaterial color= "#333" flatShading={true}/>
        </mesh>
        </>
    )
}

export default Arm
