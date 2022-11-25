import React from 'react'

function LegsMiddle() {
    return (
        <>
        <mesh position={[0,-580,248]}>
            <boxGeometry args={[10, 130, 5]}/>
            <meshLambertMaterial color= "#222" flatShading={true}/>
        </mesh>
        </>
    )
}

export default LegsMiddle
