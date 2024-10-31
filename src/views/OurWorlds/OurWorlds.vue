<template>
  <section class="main">
    <div class="our-worlds-cards">
      <OurWorldsCard
        v-for="(image, index) in images"
        :key="index"
        :pic="image.location_images"
        :title="image.title"
        :subtitle="image.subtitle"
      />
    </div>
  </section>
</template>

<script type="module" src="./OurWorlds.ts"></script>

<style scoped lang="scss">
@import "./OurWorlds";
</style>