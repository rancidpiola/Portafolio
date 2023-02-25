import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
import Cube from './cube';
export default function SceneIndex() {

    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const CubeScene = Cube()


    scene.add(CubeScene);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        CubeScene.rotation.x += 0.01;
        CubeScene.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}


