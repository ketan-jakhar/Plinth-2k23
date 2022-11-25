import React from 'react'
import { useFrame } from "@react-three/fiber"
import {useRef} from 'react';
import Beard from './beard'
import Glass from './glass'
import Hat from './hat'
import Lip from './lip'
import Mouth from './mouth'
import Retina from './retina'
function Head() {
    let rotationx=0,rotationy=0
    var container = {
        width: 981.6,
        height: 745.6
    }
    var mousee = {
        x: {
            current: 0,
            previous: 0,
            calc: 0
        },
        y: {
            current: 0,
            previous: 0,
            calc: 0
        }
    }
    function calc(v, vmin, vmax, tmin, tmax) {
        var nv = Math.max(Math.min(v, vmax), vmin);
        var dv = vmax - vmin;
        var pc = (nv - vmin) / dv;
        var dt = tmax - tmin;
        var tv = tmin + (pc * dt);
        return tv;
    }
    const ref = useRef()
useFrame(({ mouse }) => {
        mousee.x.current=mouse.x
        mousee.y.current=mouse.y
        mousee.x.calc = (mousee.x.current - (container.width / 2)+490.7)*100
        mousee.y.calc = (mousee.y.current - (container.height / 2)+372.6)*100
        console.log(mousee.x.calc)
        const x =  calc(mousee.y.calc, -200, 200, -Math.PI / 4, Math.PI / 4)
        const y = calc(mousee.x.calc, -200, 200, -Math.PI / 4, Math.PI / 4)
        rotationy += (y - rotationy) ;
        rotationx += (x -rotationx) ;

        
        ref.current.rotation.set(-rotationx,rotationy,0)
})
return (
    <group ref={ref} >
        {/* <group> */}
            <mesh position={[0,50,250]} >
                <boxGeometry args={[300, 250, 280]} />
                <meshLambertMaterial color= "#e0bea5" flatShading={true} />
            </mesh>
            <Hat/>
            <Glass/>
            <Retina/>
            <Beard/>
            <Mouth/>
            <Lip/>
        </group>
    )
}

export default Head
