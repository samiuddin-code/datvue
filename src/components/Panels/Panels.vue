<template>
  <div class="panels">
    <!-- Panel buttons to select content -->
    <a href="#" @click.prevent="expandPanel('experiences')">
      <div class="panels-content panels-image1">
        <h4>Concept</h4>
        <button>&#8594;</button>
      </div>
    </a>
    <a href="#" @click.prevent="expandPanel('lifestyle')">
      <div class="panels-content panels-image2">
        <h4>Design</h4>
        <button>&#8594;</button>
      </div>
    </a>
    <a href="#" @click.prevent="expandPanel('wellness')">
      <div class="panels-content panels-image3">
        <h4>Build</h4>
        <button>&#8594;</button>
      </div>
    </a>

    <!-- Expandable Content -->
    <div v-if="isExpanded" class="experience-section">
      <!-- Background Video -->
      <video autoplay muted loop class="background-video">
        <source :src="currentContent.videoUrl" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <!-- Close Icon -->
      <button class="close-button" @click="closePanel">
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>

      <!-- Content Display -->
      <div class="content">
        <h2>{{ currentContent.title }}</h2>
        <p>{{ currentContent.description }}</p>
        <button class="explore-button" @click="exploreContent">Explore</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Panels.ts"></script>

<style scoped>
.experience-section {
  position: relative;
  width: 100%;
  height: 100vh; /* Full screen height */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
}

.content {
  margin-left: 5%;
  max-width: 40%;
  z-index: 1;
}

.content h2 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.content p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.explore-button {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.explore-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.panels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100vh;
}

.panels-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  background-color: #000;
  background-blend-mode: normal;
}

a {
  text-decoration: none;
}

h4 {
  font-size: 2.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin: 0;
  color: #fff;
}

button {
  margin: 0 auto;
  padding: 0;
  height: 4rem;
  width: 4rem;
  font-size: 2.5rem;
  border: 0.02rem solid #fff;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  background: transparent;
  color: #fff;
}

.panels-image1 {
  background-image: url("../../assets/Panels/p1.jpg");
  background-position: center 25%;
}

.panels-image2 {
  background-image: url("../../assets/Panels/p2.jpg");
  background-position: center 25%;
}

.panels-image3 {
  background-image: url("../../assets/Panels/p3.jpg");
  background-position: center 25%;
}

@media screen and (max-width: 750px) {
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

@media screen and (min-width: 500.1px) and (max-width: 1000px) {
  height: 50vh;
}
</style>
