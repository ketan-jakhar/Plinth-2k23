import React from 'react'

// import {mesh} from 'react-three-fiber'
function Beard() {
    return (
        <mesh position={[0,-30,450]}>
        <boxGeometry args={[140 ,130, 10]}/>
        <meshLambertMaterial color= "#bb7344" flatShading={true}/>
        </mesh>
    )
}

export default Beard
