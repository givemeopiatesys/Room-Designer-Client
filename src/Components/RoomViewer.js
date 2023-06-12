import React, {Suspense, useLayoutEffect, useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stage} from '@react-three/drei'

export default function RoomViewer({scene}) {
    const ref = useRef()
    useLayoutEffect(() => {
        scene.traverse((obj) => {
            if (obj.isMesh) {
                obj.castShadow = obj.receiveShadow = 1
                obj.material.envMapIntensity = 0.8
            }
        })
    }, [scene])

    return (
        // gl={{preserveDrawingBuffer: true}} shadows dpr={[1, 1.5]}
        <Canvas shadows dpr={[1, 1.5]} camera={ {focus: 0 ,far:0,position: [0, 0, 150]}}>
            <ambientLight intensity={0.25}/>
            <Suspense fallback={null}>
                <Stage
                    controls={ref}
                    preset={'rembrandt'}
                    intensity={1}
                    contactShadow={true}
                    shadow={true}
                    environment={'city'}
                >
                    <primitive object={scene}/>
                </Stage>
            </Suspense>
            <OrbitControls autoRotate={true}/>
        </Canvas>
    )
}
