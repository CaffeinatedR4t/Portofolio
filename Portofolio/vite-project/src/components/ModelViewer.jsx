import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './ModelViewer.css'

function ModelViewer() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 6)

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: false 
    })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1
    mountRef.current.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
    scene.add(ambientLight)

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight1.position.set(5, 5, 5)
    scene.add(directionalLight1)

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.7)
    directionalLight2.position.set(-5, 3, -5)
    scene.add(directionalLight2)

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight3.position.set(0, -3, 5)
    scene.add(directionalLight3)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.minPolarAngle = Math.PI / 2
    controls.maxPolarAngle = Math.PI / 2
    controls.target.set(0, 0, 0)
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.5
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    const loader = new GLTFLoader()
    
    loader.load(
      '/models/game_boy_classic.glb',
      (gltf) => {
        const model = gltf.scene
        
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
            
            if (child.material) {
              child.material.needsUpdate = true
              
              if (child.material.map) {
                child.material.map.encoding = THREE.sRGBEncoding
                child.material.map.needsUpdate = true
                child.material.map.anisotropy = renderer.capabilities.getMaxAnisotropy()
              }
              
              if (child.material.normalMap) {
                child.material.normalMap.encoding = THREE.LinearEncoding
              }
              
              if (child.material.emissiveMap) {
                child.material.emissiveMap.encoding = THREE.sRGBEncoding
                child.material.emissive = new THREE.Color(0x88ff00)
                child.material.emissiveIntensity = 0.4
              }
              
              if (child.material.metalness !== undefined) {
                child.material.metalness = 0
              }
              if (child.material.roughness !== undefined) {
                child.material.roughness = 0.4
              }
            }
          }
        })
        
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        
        const maxDim = Math.max(size.x, size.y, size.z)
        const targetSize = 4
        const scale = targetSize / maxDim
        
        model.scale.set(scale, scale, scale)
        
        const scaledCenter = center.multiplyScalar(scale)
        model.position.set(
          -scaledCenter.x,
          -scaledCenter.y,
          -scaledCenter.z
        )
        
        scene.add(model)
      },
      undefined, // ✅ Removed progress callback - no more loading percentage spam
      (error) => {
        console.error('❌ Error loading model:', error)
        
        // Fallback cube if model fails to load
        const geometry = new THREE.BoxGeometry(2, 3, 0.5)
        const material = new THREE.MeshStandardMaterial({ 
          color: 0x888888,
          metalness: 0.2,
          roughness: 0.7
        })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
      }
    )

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose()
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => {
              if (material.map) material.map.dispose()
              if (material.normalMap) material.normalMap.dispose()
              if (material.roughnessMap) material.roughnessMap.dispose()
              if (material.metalnessMap) material.metalnessMap.dispose()
              if (material.emissiveMap) material.emissiveMap.dispose()
              material.dispose()
            })
          } else {
            if (object.material.map) object.material.map.dispose()
            if (object.material.normalMap) object.material.normalMap.dispose()
            if (object.material.roughnessMap) object.material.roughnessMap.dispose()
            if (object.material.metalnessMap) object.material.metalnessMap.dispose()
            if (object.material.emissiveMap) object.material.emissiveMap.dispose()
            object.material.dispose()
          }
        }
      })
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="model-viewer" />
}

export default ModelViewer