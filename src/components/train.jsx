import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const Train = () => {
    const scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(5))
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight)



    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animate );
    document.body.appendChild( renderer.domElement );

    new OrbitControls(camera, renderer.domElement)

    //CUBE
    const geometry = new THREE.BoxGeometry( 10, 1, 1 );
    const material = new THREE.MeshStandardMaterial( {
        color: 0x808080,
        transparent: true,
        opacity: 0.8
    } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    //SEAT
    const otherCubeGeo = new THREE.BoxGeometry(0.2,0.2,0.2);
    const otherCubemat = new THREE.MeshBasicMaterial({
        color: 0x8080ff,
    })
    const otherCube = new THREE.Mesh( otherCubeGeo, otherCubemat );
    scene.add( otherCube )
    otherCube.position.set(0,-0.3,0)

    const wireframeGeo = new THREE.BoxGeometry(10,1,1);
    const wireframeMat = new THREE.MeshBasicMaterial({
        color : 0xffffff,
        wireframe: true
    });
    const wireframe = new THREE.Mesh( wireframeGeo, wireframeMat );
    scene.add(wireframe)



    camera.position.z = 10;

    function animate() {
        requestAnimationFrame(animate)
        renderer.render( scene, camera );
    }
    animate()
}


export default Train;