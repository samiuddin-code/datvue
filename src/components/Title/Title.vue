<template>
  <video class="main-bg" autoplay muted loop :style='{"background-image": `url(${imageBg})`}' >
    <source :src="video" type="video/mp4" />
  </video>

  <main class="title">
    <span class="bold-text">{{ bText }}</span>
    <span class="light-text">{{ lText }}</span>
    <span class="scroll-text">Scroll to explore</span>
  </main>
</template>

<script type="module" src="./Title.ts"></script>

<style lang="scss" scoped>
@import "./Title";

.main-bg {
  width: 100%; /* Full width */
  height: 300px; /* Set a specific height */
  object-fit: cover; /* Cover the area without distortion */
}
</style>
