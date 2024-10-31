<template>
  <div class="gallery-card">
    <img class="gallery-img" :src="pic" :alt="text" />
    <div class="gallery-text">{{ text }}</div>
  </div>
</template>

<script type="module" src="./GalleryCard.ts"></script>

<style scoped lang="scss">
 @import "./GalleryCard"
</style>