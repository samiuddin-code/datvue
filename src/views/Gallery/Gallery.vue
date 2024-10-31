<template>
  <section class="main">
    <div class="gallery">
      <div class="main-image">Gallery</div>
      <div class="gallery-cards">
        <GalleryCard
          v-for="(image, index) in images"
          :key="index"
          :text="image.title"
          :pic="image.gallery_images"
        />
      </div>
    </div>
  </section>
</template>

<script type="module" src="./Gallery.ts"></script>

<style scoped lang="scss">
@import "./Gallery";
</style>