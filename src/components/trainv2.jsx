import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const Trainv2 = () => {

    const scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(100))

    const playerTrain = PlayerTrain();
    scene.add(playerTrain);

    //LIGHT
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
    dirLight.position.set(100,100,100);
    scene.add(dirLight)

    //CAMERA
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    //RENDERER
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render( scene, camera );
    document.body.appendChild(renderer.domElement);
    const controls= new OrbitControls(camera, renderer.domElement)
    controls.target.set(0,0,0);

    /////////////// CAR ////////////////
    function PlayerTrain(){
        const train = new THREE.Group();

        const trainFrontTexture = getTrainFrontTexture();

        //BACK WHEEL
        const backWheel = new THREE.Mesh(
            new THREE.BoxGeometry(12,10,30),
            new THREE.MeshLambertMaterial({
                color: 0x333333
            })
        )
        backWheel.position.z = 0;
        backWheel.position.x = -18;
        train.add(backWheel)

        //FRONT WHEEL
        const frontWheel = new THREE.Mesh(
            new THREE.BoxGeometry(12,10,30),
            new THREE.MeshLambertMaterial({
                color: 0x333333
            })
        )
        frontWheel.position.z = 0;
        frontWheel.position.x = 18;
        train.add(frontWheel)

        //MAIN
        const main = new THREE.Mesh(
            new THREE.BoxGeometry(80,30,26),
            new THREE.MeshLambertMaterial({
                color: 0xffffff
            })
        )
        main.position.y = 13;
        train.add(main)

        //TRAIN FRONT CABINE
        const frontCabin = new THREE.Mesh(
            new THREE.CylinderGeometry(13,13,30,32,34,false,false,3.14),[
                new THREE.MeshLambertMaterial({map: trainFrontTexture}),
                new THREE.MeshLambertMaterial({color: 0xffffaa}),
                new THREE.MeshLambertMaterial({color: 0xffaaff}),
            ]
        )
        frontCabin.position.x = 40
        frontCabin.position.y = 13
        train.add(frontCabin)

        //TRAIN FRONT CABINE
        const backCabin = new THREE.Mesh(
            new THREE.CylinderGeometry(13,13,30,32,34,false,false,3.14),
            new THREE.MeshLambertMaterial({
                color: 0xffffff
            })
        )
        backCabin.rotation.y = - Math.PI
        backCabin.position.x = -40
        backCabin.position.y = 13
        train.add(backCabin)

        //CATENAIRE
        const catenaire = new THREE.Mesh(
            new THREE.BoxGeometry(10,5,2),
            new THREE.MeshLambertMaterial({
                color: 0xffffaa
            })
        )
        catenaire.position.z = 30
        train.add(catenaire)

        const rightDoor = new THREE.Mesh(
            new THREE.BoxGeometry(10,10,10),
            new THREE.MeshLambertMaterial({
                color: 0xffbbaa
            })
        )
        rightDoor.position.z = 10
        rightDoor.position.y = 11
        train.add(rightDoor)

        const leftDoor = new THREE.Mesh(
            new THREE.BoxGeometry(15,10,10),
            new THREE.MeshLambertMaterial({
                color: 0xffbbaa
            })
        )
        leftDoor.position.z = 10
        leftDoor.position.y = -11
        train.add(leftDoor)


        return train;
    }

    //CANVA
    function getTrainFrontTexture(){
        const canvas = document.createElement("canvas");
        canvas.width = 64;
        canvas.height = 32;
        const context = canvas.getContext("2d");

        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, 64, 32);

        context.fillStyle = "#666666";
        context.fillRect(8,8,48,24);

        return new THREE.CanvasTexture(canvas)
    }

    camera.position.z = 100
    camera.position.y = 10
    camera.position.x = 100

    function animate() {
        requestAnimationFrame(animate)
        renderer.render( scene, camera );
    }
    animate()

}

export default Trainv2;