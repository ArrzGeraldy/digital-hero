"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

const vertexShader = `
  varying vec2 vertexUV;
  varying vec3 vertexNormal;
  
  void main() {
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D globeTexture;
  varying vec2 vertexUV;
  varying vec3 vertexNormal;
  void main(){
    float intensity = 1.05 - dot(vertexNormal, vec3(0.0,0.0,1.0));
    vec3 atmosphere = vec3(0.3,0.6,1.0) * pow(intensity,1.5);

    gl_FragColor = vec4(atmosphere + texture2D(globeTexture,vertexUV).xyz,1.0);
  } 
`;

const atmosphereVertex = `
  varying vec3 vertexNormal;
  void main(){
    vertexNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,0.9);

  }
`;

const atmosphereFragment = `
  varying vec3 vertexNormal;
  void main(){
    float intensity = pow(0.75 - dot(vertexNormal, vec3(0.0,0.0,1.0)),2.0);
    gl_FragColor = vec4(0.3,0.6,1.0,1.0) * intensity;
}
`;

const Globe = () => {
  const mountRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const innerHeight = mountRef.current.clientHeight;
    const innerWidth = mountRef.current.clientWidth;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );
    if (innerWidth > 640) {
      camera.position.z = 1;
    } else {
      camera.position.z = 10;
    }

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create sphere
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load("/textures/globe.jpg"),
          },
        },
      })
    );

    // Create atmosphere
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertex,
        fragmentShader: atmosphereFragment,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
    );

    atmosphere.scale.set(1.1, 1.1, 1.1);
    scene.add(atmosphere);

    // Group setup
    const group = new THREE.Group();
    group.add(sphere);
    scene.add(group);

    // Mouse movement handler
    const handleMove = (event) => {
      const x = event.touches ? event.touches[0].clientX : event.clientX;
      const y = event.touches ? event.touches[0].clientY : event.clientY;
      mouseRef.current = {
        x: (x / innerWidth) * 2 - 1,
        y: -(y / innerHeight) * 2 + 1,
      };
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("touchmove", handleMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      sphere.rotation.y += 0.002;

      gsap.to(group.rotation, {
        y: mouseRef.current.x * 0.5,
        x: -mouseRef.current.y * 0.5,
        duration: 2,
      });
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("touchmove", handleMove);
      window.removeEventListener("resize", handleResize);
      sphere.geometry.dispose();
      sphere.material.dispose();
      atmosphere.geometry.dispose();
      atmosphere.material.dispose();

      renderer.dispose();
      // Remove canvas from DOM
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="aspect-square w-full rounded-full" />;
};

export default Globe;
