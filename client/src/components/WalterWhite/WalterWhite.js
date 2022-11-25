import React from 'react'
import {PerspectiveCamera } from "@react-three/drei";
import './WalterWhite.css'
import { Canvas } from '@react-three/fiber'
import Head from './HEAD/head'
import Body from './BODY/body'

export const WalterWhite = () => {


    return (
<div className="breakingbad">

            <Canvas gl={{ alpha: true, antialias: false }} >
                <hemisphereLight groundColor="#ffffff" skyColor="#ffffff" intensity={0.6} />
                <directionalLight color="white" intensity={0.8} position={[200,200,200]} castShadow={true} />
                <directionalLight color="white" intensity={0.2} position={[-200,-200,50]} castShadow={true} />
            <PerspectiveCamera  makeDefault fov={65} near={1} far={2000} aspect={window.innerWidth/window.innerHeight} position={[0, 0, 2000]} lookAt={[0,0,0]}  />
                <group  
                >
                    <Head />
                    <Body/>               
                </group>
            </Canvas>
                    </div>
    );
}