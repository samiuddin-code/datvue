<template>
  <div class="globe-container" ref="globeContainer">
    <section class="globe-top">
      <div class="globe-header">
        <span class="header-first-half">Designs</span>
        <span class="header-second-half">That Inspire</span>
      </div>
      <div class="globe-para">
        <p>Step into a world where imagination shapes reality. Your inspiration. Your masterpiece.</p>
        <p>Explore the map below and take a journey to our communities.</p>
      </div>
      <nav class="globe-nav">
        <button
          v-for="(land, index) in lands"
          :key="index"
          class="globe-nav-item hover-underline-animation"
          v-html="land.continent"
          @click="setContinent(index)"
          :class="{ 'router-link-exact-active': selectedContinent === index }"
        ></button>
      </nav>
    </section>
    <section class="globe">
      <!-- Three.js Globe will be rendered here -->
      <div class="location-data">
        <div class="nav">
          <button @click="previousPlace" class="nav-previous">&#8592;</button>
          <button @click="nextPlace" class="nav-next">&#8594;</button>
        </div>

        <div class="weather">
          <div class="temperature">
            <button>&#9788;</button>
            <div class="value text-grey" v-html="lands[selectedContinent].locations[selectedPlace].temperature"></div>
          </div>
          <div class="winds">
            <button>&#x2634;</button>
            <div class="value text-grey" v-html="lands[selectedContinent].locations[selectedPlace].winds"></div>
          </div>
          <div class="compass">
            <button>&#129517;</button>
            <div class="value text-grey" v-html="lands[selectedContinent].locations[selectedPlace].compass"></div>
          </div>
        </div>

        <div class="location">
          <div class="title text-grey" v-html="lands[selectedContinent].locations[selectedPlace].locationTitle"></div>
          <div class="subtitle" v-html="lands[selectedContinent].locations[selectedPlace].locationSubtitle"></div>
        </div>

        <div class="coordinates">
          <location-pin color="#fff" />
          <span class="coordinate text-grey" v-html="lands[selectedContinent].locations[selectedPlace].coordinate"></span>
        </div>

        <div
          class="image"
          :style="{ backgroundImage: 'url(' + lands[selectedContinent].locations[selectedPlace].image + ')' }"
        ></div>
      </div>
    </section>
  </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Vue } from 'vue-class-component';
import earthTexture from '@/assets/Globe/globals.jpg';

export default class Globe extends Vue {
  lands = [
    {
      continent: 'dip',
      globeImage: require('@/assets/Globe/globe.jpg'),
      locations: [
        {
          latitude: 19.3830,
          longitude: -70.0407,
          locationTitle: 'Dip dubai office',
          locationSubtitle: 'Dat Artitecture',
          coordinate: '19.3830° N / 70.0407° W',
          image: '/assets/globe/img-1.jpg',
        },
      ],
    },
    {
      continent: 'opal tower',
      globeImage: require('@/assets/Globe/globe.jpg'),
      locations: [
        {
          latitude: 19.3830,
          longitude: -70.0407,
          locationTitle: 'Opus Tower',
          locationSubtitle: 'Dat Artitecture',
          coordinate: '19.3830° N / 70.0407° W',
          image: '/assets/globe/img-2.jpg',
        },
      ],
    },
    {
      continent: 'opus tower',
      globeImage: require('@/assets/Globe/globe.jpg'),
      locations: [
        {
          latitude: 19.3830,
          longitude: -70.0407,
          locationTitle: 'Opal Tower Office',
          locationSubtitle: 'Opal Tower',
          coordinate: '19.3830° N / 70.0407° W',
          image: '/assets/globe/img-3.jpg',
        },
      ],
    },
  ];

  selectedContinent = 0;
  selectedPlace = 0;

  setContinent(index) {
    this.selectedPlace = 0;
    this.selectedContinent = index;
  }

  nextPlace() {
    const totalPlaces = this.lands[this.selectedContinent].locations.length;
    this.selectedPlace = (this.selectedPlace + 1) % totalPlaces;
  }

  previousPlace() {
    const totalPlaces = this.lands[this.selectedContinent].locations.length;
    this.selectedPlace = (this.selectedPlace + totalPlaces - 1) % totalPlaces;
  }
  initGlobe() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#f3f3f3');
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.7 / window.innerHeight, 0.11, 1000);
  camera.position.set(0, 0, 4.5);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth * 0.7, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.setClearColor(new THREE.Color('#f3f3f3'), 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMappingExposure = 2.0;

  if (this.$refs.globeContainer) {
    this.$refs.globeContainer.appendChild(renderer.domElement);
  }

  const textureLoader = new THREE.TextureLoader();
  const textures = [];
  for (let i = 1; i <= 4; i++) {
    const texture = textureLoader.load(`/assets/globe/img-${i}.jpg`);
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    textures.push(texture);
  }

  const geometry = new THREE.SphereGeometry(3, 2048, 2048);
  const material = new THREE.MeshStandardMaterial({
    map: textures[0],
    metalness: 0.3,
    roughness: 0.5,
    emissive: new THREE.Color(0x111111),
    emissiveIntensity: 0.5,
  });

  const globe = new THREE.Mesh(geometry, material);
  globe.position.set(-0.7, -0.5, 0); // Set initial fixed position
  scene.add(globe);
  globe.updateMatrixWorld(true)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 2.5);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 0, 10);
  scene.add(directionalLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false; // Disable zooming
  controls.zoomSpeed = 0.8;
  controls.enableDamping = true; // Enable smooth movement
  controls.dampingFactor = 0.25;
  controls.rotateSpeed = 0.08; // Adjust rotation speed

  // Fix the target position to the globe's position and disable pan and rotate adjustments

  globe.position.set(-0.7, -0.5, 0);
  scene.add(globe);
  controls.target.set(globe.position.x, globe.position.y, globe.position.z);
  controls.enablePan = false;
  controls.enableRotate = true;

  // Lock the camera in place (avoid automatic camera updates)
  camera.position.set(0, 0, 4.5);  // Reset camera position if needed

  // Function to convert lat/long to 3D position on the globe
  const latLonToVector = (lat, lon) => {
    const radius = 3; // Same as the globe's radius
    const phi = (lat + 90) * (Math.PI / 180); // Latitude to radians
    const theta = (lon + 180) * (Math.PI / 180); // Longitude to radians

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    return new THREE.Vector3(x, y, z);
  };

  // Add location markers as small spheres/icons
  this.lands.forEach((land) => {
    land.locations.forEach((location) => {
      const { latitude, longitude } = location; // You can add latitude and longitude to each location

      // Calculate the position for each marker
      const position = latLonToVector(latitude, longitude);

      // Create a small sphere for the location marker
      const markerGeometry = new THREE.SphereGeometry(0.1, 8, 8); // Small sphere for marker
      const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red color
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.copy(position); // Position the marker on the globe's surface

      scene.add(marker);
    });
  });

  // Animate the scene
  const animate = () => {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.002; // Slow rotation of the globe
    renderer.render(scene, camera);
  };
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = (window.innerWidth * 0.7) / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth * 0.7, window.innerHeight);
  });


}

 addLocationMarkers(scene, globe) {
    const geometry = new THREE.SphereGeometry(0.05, 16, 16);  // Small sphere to represent location icons
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red color for the icon
    const marker = new THREE.Mesh(geometry, material);
    
    this.lands.forEach(land => {
      land.locations.forEach(location => {
        const latitude = location.latitude;
        const longitude = location.longitude;

        // Convert latitude and longitude to spherical coordinates
        const phi = THREE.MathUtils.degToRad(90 - latitude); // Latitude: 90 - latitude
        const theta = THREE.MathUtils.degToRad(longitude); // Longitude: same as it is
        
        // Position the marker on the globe
        marker.position.setFromSphericalCoords(3, phi, theta);

        // Add the marker to the globe
        scene.add(marker);
      });
    });
  }
  mounted() {
    if (this.$refs.globeContainer) {
      this.initGlobe();
    }
  }
}
</script>

<style scoped lang="scss">
@use "./Globe";
</style>
