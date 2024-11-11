<template>
  <video class="main-bg" autoplay muted loop :style="{ backgroundImage: `url(${imageBg})` }">
    <source :src="video" type="video/mp4" />
  </video>

  <!-- Scroll Down Button -->
  <button class="round-button" @click="scrollToNextSection">
    <!-- Down Arrow -->
    <span class="arrow-down">&#8595;</span>
  </button>

  <main class="title">
    <span class="bold-text">{{ bText }}</span>
    <span class="light-text">{{ lText }}</span>
    <!-- <span class="scroll-text">Scroll to explore</span> -->
  </main>
</template>

<script type="module" src="./Title.ts"></script>

<style lang="scss" scoped>
@use "./Title";

.main-bg {
  width: 100%; /* Full width */
  height: 300px; /* Set a specific height */
  object-fit: 
  cover; /* Cover the area without distortion */
}
.round-button {
  position: absolute; /* Fixes it to the viewport */
  bottom: 90px; /* Distance from the bottom of the viewport */
  left: 93%; /* Center horizontally */

  width: 3.5rem; /* Set width */
  height: 3.5rem; /* Set height */
  border-radius: 100%; /* Makes it circular */
  border: 0; /* No border */
  outline: 0; /* No outline */
  cursor: pointer; /* Pointer cursor */
  background-color: white; /* White background */
  color: black; /* Black color */

  font-size: 2rem; /* Font size of the arrow */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.round-button:hover {
  background-color: rgba(255, 255, 255, 0.9); /* Hover effect */
}

/* Adjust the arrow size */
.arrow-down {
  font-size: 2rem; /* Adjust the size of the arrow */
}
</style>
