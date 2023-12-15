// Importación de módulos necesarios de Three.js
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// Selección del elemento canvas en la página HTML
const canvas = document.querySelector('#webgl')
// Creación de un nuevo renderizador WebGL para este canvas
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
// Configuración del tamaño del renderizador para que coincida con el tamaño de la ventana del navegador
renderer.setSize(window.innerWidth, window.innerHeight)
// Establecimiento del formato de salida a sRGB para una mejor calidad de color
renderer.outputEncoding = THREE.sRGBEncoding

// Creación de una nueva escena y establecimiento de su color de fondo
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x3e3c3c)

// Creación de una nueva cámara PerspectiveCamera y establecimiento de su posición
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight
)
camera.position.set(0, 1, 20)

// Creación de un nuevo cargador GLTF y carga de un modelo 3D desde un archivo 'shiba.glb'
const loader = new GLTFLoader()
loader.load('.../module/scene.gltf', function (gltf) {
  scene.add(gltf.scene)
})

// Creación de tres luces de punto y una luz ambiental, y su adición a la escena

const light1 = new THREE.DirectionalLight(0xffffff, 20, 100)
light1.position.set(6, 6, 6)
scene.add(light1)

const light2 = new THREE.DirectionalLight(0xffffff, 10, 100)
light2.position.set(-50, 30, 50)
scene.add(light2)

const light3 = new THREE.PointLight(0xffffff, 2, 100)
light3.position.set(0, 30, -5)
scene.add(light3)
const light4 = new THREE.AmbientLight(0xffffff, 1)
scene.add(light4)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambientLight)

// Creación de controles de órbita para permitir al usuario rotar y acercar/alejar la escena
const controls = new OrbitControls(camera, canvas)

// Definición de una función de animación que se llama a sí misma en cada cuadro de animación
// Esta función renderiza la escena desde la perspectiva de la cámara
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

// Llamada a la función de animación para comenzar la animación
animate()
