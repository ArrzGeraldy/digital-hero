"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const EarthVisualization = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Cleanup any existing scene/renderer
    if (rendererRef.current) {
      containerRef.current.removeChild(rendererRef.current.domElement);
      rendererRef.current.dispose();
    }
    if (sceneRef.current) {
      while (sceneRef.current.children.length > 0) {
        const object = sceneRef.current.children[0];
        sceneRef.current.remove(object);
      }
    }
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    // Get container dimensions
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    rendererRef.current = renderer;

    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    // Setup Earth group
    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = (-23.4 * Math.PI) / 180;
    scene.add(earthGroup);

    // Setup Earth mesh
    const detail = 12;
    const geometry = new THREE.IcosahedronGeometry(1, detail);

    // Load textures
    const loader = new THREE.TextureLoader();
    const baseTexture = loader.load("/textures/00_earthmap1k.jpg");
    const lightsTexture = loader.load("/textures/03_earthlights1k.jpg");
    const cloudsTexture = loader.load("/textures/04_earthcloudmap.jpg");
    const cloudsAlphaTexture = loader.load(
      "/textures/05_earthcloudmaptrans.jpg"
    );

    // Create materials and meshes
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: baseTexture,
      bumpScale: 0.04,
    });

    const earthMesh = new THREE.Mesh(geometry, earthMaterial);
    earthGroup.add(earthMesh);

    const lightsMaterial = new THREE.MeshBasicMaterial({
      map: lightsTexture,
      blending: THREE.AdditiveBlending,
    });

    const lightsMesh = new THREE.Mesh(geometry, lightsMaterial);
    earthGroup.add(lightsMesh);

    const cloudsMaterial = new THREE.MeshStandardMaterial({
      map: cloudsTexture,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      alphaMap: cloudsAlphaTexture,
    });

    const cloudsMesh = new THREE.Mesh(geometry, cloudsMaterial);
    cloudsMesh.scale.setScalar(1.003);
    earthGroup.add(cloudsMesh);

    // Add lighting
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(-2, 0.5, 1.5);
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Animation
    function animate() {
      frameRef.current = requestAnimationFrame(animate);

      earthMesh.rotation.y += 0.001;
      lightsMesh.rotation.y += 0.001;
      cloudsMesh.rotation.y += 0.00115;

      renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    function handleResize() {
      if (!containerRef.current || !renderer || !camera) return;

      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.forceContextLoss();
        containerRef.current?.removeChild(rendererRef.current.domElement);
      }

      // Dispose materials and geometries
      geometry.dispose();
      earthMaterial.dispose();
      lightsMaterial.dispose();
      cloudsMaterial.dispose();

      // Clear scene
      while (scene.children.length > 0) {
        const object = scene.children[0];
        scene.remove(object);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full aspect-square" />;
};

export default EarthVisualization;
