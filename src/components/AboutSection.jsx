import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import './AboutSection.css';

const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
};

const AboutSection = () => {
  const containerRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const pointsRef = useRef();
  const controlsRef = useRef();
  const sectionRef = useRef(null);
  const spheresRef = useRef([]);
  const spritesRef = useRef([]);
  const animatingRef = useRef(false);
  const [webglSupported, setWebglSupported] = React.useState(true);
  
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.3
  });

  const skills = [
    { name: 'React', color: '#6d2323', position: [3, 2, 0] },
    { name: 'JavaScript', color: '#8b2e2e', position: [4, 0, 1] },
    { name: 'Node.js', color: '#6d2323', position: [-2, -1, 0] },
    { name: 'TypeScript', color: '#a13a3a', position: [1, -2, 1] },
    { name: 'Python', color: '#8b2e2e', position: [-3, -3, 0] },
    { name: 'SQL', color: '#6d2323', position: [-3, 2, 0] },
    { name: 'Blockchain', color: '#a13a3a', position: [0, -3, 0] },
    { name: 'DevOps', color: '#8b2e2e', position: [4, -2, 1] },
    { name: 'Data Science', color: '#6d2323', position: [2, -3, 0] }
  ];

  const getRandomPosition = () => {
    const distance = 20;
    return [
      (Math.random() - 0.5) * distance,
      (Math.random() - 0.5) * distance,
      (Math.random() - 0.5) * distance
    ];
  };

  const animateToSphere = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    const radius = 2.5;
    const duration = 2;

    skills.forEach((skill, index) => {
      const sphere = spheresRef.current[index];
      const sprite = spritesRef.current[index];

      if (!sphere || !sprite) return;

      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      
      const targetX = radius * Math.cos(theta) * Math.sin(phi);
      const targetY = radius * Math.sin(theta) * Math.sin(phi);
      const targetZ = radius * Math.cos(phi);

      gsap.to(sphere.position, {
        x: targetX,
        y: targetY,
        z: targetZ,
        duration: duration,
        ease: "elastic.out(1, 0.5)",
        onComplete: () => {
          if (index === skills.length - 1) {
            animatingRef.current = false;
            if (controlsRef.current) {
              controlsRef.current.autoRotate = true;
            }
          }
        }
      });

      gsap.to(sprite.position, {
        x: targetX * 1.2,
        y: targetY * 1.2,
        z: targetZ * 1.2,
        duration: duration,
        ease: "elastic.out(1, 0.5)"
      });

      gsap.to(sprite.material, {
        opacity: 1,
        duration: duration * 0.5,
        delay: duration * 0.5
      });
    });
  };

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f1e8);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 6;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 1;
    controlsRef.current = controls;

    // Points Group
    const points = new THREE.Group();
    spheresRef.current = [];
    spritesRef.current = [];
    
    skills.forEach((skill) => {
      // Sphere
      const geometry = new THREE.SphereGeometry(0.15, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: skill.color });
      const sphere = new THREE.Mesh(geometry, material);
      const [x, y, z] = getRandomPosition();
      sphere.position.set(x, y, z);
      
      // Label
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 256;
      canvas.height = 64;
      context.fillStyle = '#6d2323';
      context.font = 'bold 24px Arial';
      context.textAlign = 'center';
      context.fillText(skill.name, canvas.width / 2, canvas.height / 2);
      
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ 
        map: texture,
        opacity: 0
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.set(x * 1.2, y * 1.2, z * 1.2);
      sprite.scale.set(2, 0.5, 1);

      points.add(sphere);
      points.add(sprite);
      spheresRef.current.push(sphere);
      spritesRef.current.push(sprite);
    });
    
    scene.add(points);
    pointsRef.current = points;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Animation Loop
    const animate = () => {
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.remove(points);
      points.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (object.material.map) object.material.map.dispose();
          object.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    if (isInView && !animatingRef.current) {
      animateToSphere();
    }
  }, [isInView]);

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const underlineVariants = {
    hidden: {
      width: 0,
      opacity: 0
    },
    visible: {
      width: "30%",
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  if (!webglSupported) {
    return (
      <section className="about-section">
        <div className="about-content">
          <div className="about-right">
            <h1 className="main-title">We Are Offerist.</h1>
            <p style={{color: '#a13a3a', fontWeight: 'bold', fontSize: 18, marginTop: 24}}>
              当前设备或浏览器不支持 WebGL，3D 技能展示无法显示。<br />
              请升级浏览器或更换设备以获得完整体验。
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-content">
        <div className="about-left">
          <div className="skills-container" ref={containerRef} />
        </div>
        <div className="about-right">
          <motion.h1 
            className="main-title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            We Are Offerist.
            <motion.span 
              className="title-underline"
              variants={underlineVariants}
            />
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
