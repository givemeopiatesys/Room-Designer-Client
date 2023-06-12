import React, {useRef} from "react";
import {OrthographicCamera, PerspectiveCamera, useGLTF} from "@react-three/drei";
export function Model(props) {
    const {nodes, materials} = useGLTF("/modern_bedroom.glb");
    return (
        <group {...props} dispose={null}>
            <group
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.34}
                userData={{name: "Sketchfab_model"}}
            >
                <group
                    userData={{name: "RootNode"}}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}
                >
                    <group
                        position={[0, 845.38, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={850}
                        userData={{name: "ModernBedroom"}}
                    >
                        <PerspectiveCamera position={[2, 3, 0.7]} makeDefault {...props}/>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.ModernBedroom_Meshes_0.geometry}
                            material={materials.Meshes}
                            userData={{name: "ModernBedroom_Meshes_0"}}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.ModernBedroom_BedFrame_0.geometry}
                            material={materials.BedFrame}
                            userData={{name: "ModernBedroom_BedFrame_0"}}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.ModernBedroom_Painting_0.geometry}
                            material={materials.Painting}
                            userData={{name: "ModernBedroom_Painting_0"}}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.ModernBedroom_Duvet_0.geometry}
                            material={materials.Duvet}
                            userData={{name: "ModernBedroom_Duvet_0"}}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.ModernBedroom_EndTables_0.geometry}
                            material={materials.EndTables}
                            userData={{name: "ModernBedroom_EndTables_0"}}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.ModernBedroom_EndLamps_0.geometry}
                            material={materials.EndLamps}
                            userData={{name: "ModernBedroom_EndLamps_0"}}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.ModernBedroom_Chair_0.geometry}
                            material={materials.Chair}
                            userData={{name: "ModernBedroom_Chair_0"}}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.ModernBedroom_Structure_0.geometry}
                            material={materials.Structure}
                            userData={{name: "ModernBedroom_Structure_0"}}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.ModernBedroom_Pillows_0.geometry}
                            material={materials.Pillows}
                            userData={{name: "ModernBedroom_Pillows_0"}}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.ModernBedroom_Carpet_0.geometry}
                            material={materials.Carpet}
                            userData={{name: "ModernBedroom_Carpet_0"}}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/modern_bedroom.glb");
