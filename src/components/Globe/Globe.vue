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

export default class Globe extends Vue {
  lands = [
    {
      continent: 'dip',
      globeImage: require('../../../public/assets/Globe/img-1.jpg'),
      locations: [
        {
          latitude: 19.3830,
          longitude: -70.0407,
          locationTitle: 'Dip Dubai Office',
          locationSubtitle: 'Dat Architecture',
          coordinate: '19.3830° N / 70.0407° W',
          image: '/assets/globe/img-1.jpg',
        },
      ],
    },
    {
      continent: 'opal tower',
      globeImage: require('../../../public/assets/Globe/img-3.jpg'),
      locations: [
        {
          latitude: 19.3830,
          longitude: -70.0407,
          locationTitle: 'Opus Tower',
          locationSubtitle: 'Dat Architecture',
          coordinate: '19.3830° N / 70.0407° W',
          image: '/assets/globe/img-2.jpg',
        },
      ],
    },
    {
      continent: 'opus tower',
      globeImage: require('../../../public/assets/Globe/img-3.jpg'),
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
    // Update the globe texture when the continent changes
    this.updateGlobeTexture();
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
    const camera = new THREE.PerspectiveCamera(80, window.innerWidth * 0.60 / window.innerHeight, 0.5, 1000);
    camera.position.set(0,0 ,5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth * 0.64, window.innerHeight);
    
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMappingExposure =3.0;

    if (this.$refs.globeContainer) {
      this.$refs.globeContainer.appendChild(renderer.domElement);
    }

    const textureLoader = new THREE.TextureLoader();
    const textures = [];

    // Load textures for the globe
    for (let i = 1; i <= 11; i++) {
      const texture = textureLoader.load(`/assets/Globe/img-${i}.jpg`);
      texture.minFilter = THREE.LinearMipMapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      textures.push(texture);
    }

    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: textures[0],
      metalness: 0.3,
      roughness: 0.5,
      emissive: new THREE.Color(0x111111),
      emissiveIntensity: 0.5,
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Increase intensity from 0.6 to 1
scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;

    // Animate the scene
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Adjust on window resize
    window.addEventListener('resize', () => {
      camera.aspect = (window.innerWidth * 0.7) / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 0.7, window.innerHeight);
    });

    // Store references for later updates
    this.scene = scene;
    this.globe = globe;
    this.textures = textures;
  }

  updateGlobeTexture() {
    if (this.globe && this.textures) {
      const newTexture = this.textures[this.selectedContinent % this.textures.length];
      this.globe.material.map = newTexture;
      this.globe.material.needsUpdate = true;
    }
  }

  addLocationMarkers() {
    if (!this.scene || !this.globe) return;

    const markerGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    this.lands.forEach(land => {
      land.locations.forEach(location => {
        const latitude = location.latitude;
        const longitude = location.longitude;

        const phi = THREE.MathUtils.degToRad(90 - latitude);
        const theta = THREE.MathUtils.degToRad(longitude);

        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        marker.position.setFromSphericalCoords(3, phi, theta);
        this.scene.add(marker);
      });
    });
  }

  mounted() {
    if (this.$refs.globeContainer) {
      this.initGlobe();
      this.addLocationMarkers();
    }
  }
}
</script>

<style scoped lang="scss">
@use "./Globe";
</style>
