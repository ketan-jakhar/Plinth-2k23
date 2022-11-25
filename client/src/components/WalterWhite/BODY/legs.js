import React from 'react'

function Legs() {
    return (
        <>
        <mesh position={[0,-500,100]}>
            <boxGeometry args={[200, 300, 300]}/>
            <meshLambertMaterial color= "#333" flatShading={true}/>
        </mesh>
        </>
    )
}

export default Legs
