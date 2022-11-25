import React from 'react'
import Arm from './arm'
import Hand from './hand'
import Legs from './legs'
import LegsM from './legsMiddle'
import Shoes from './shoes'
import Zipper from './zipper'
function Body() {
    return (
        < >
            <mesh position={[0,-220,100]}>
                <boxGeometry args={[300, 250, 600]}/>
                <meshLambertMaterial color= "#333" flatShading={true}/>
            </mesh>
            <Arm /> 
         <Zipper/>
         <Hand/>
         <Legs/>
         <LegsM/>
         <Shoes/>  
        </>
    )
}

export default Body
