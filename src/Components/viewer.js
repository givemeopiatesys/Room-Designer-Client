import React, {Suspense, useLayoutEffect, useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stage} from '@react-three/drei'

export default function Viewer({scene}) {
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
        <Canvas gl={{preserveDrawingBuffer: true}} shadows dpr={[1, 1.5]} camera={{position: [0, 0, 150], fov: 50}}>
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
