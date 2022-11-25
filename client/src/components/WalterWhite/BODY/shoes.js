import React from 'react'

function Shoes() {
    return (
        <>
        <mesh position={[0,-680,100]}>
            <boxGeometry args={[200, 50, 400]}/>
            <meshLambertMaterial color= "#585858" flatShading={true}/>
        </mesh>
        </>
    )
}

export default Shoes
