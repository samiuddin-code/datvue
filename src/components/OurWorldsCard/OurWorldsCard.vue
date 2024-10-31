<template>
  <section class="our-worlds-card">
    <img class="location-pic" :src="pic" :alt="text" />
    <div class="data">
      <div class="title" v-text="title"></div>
      <div class="subtitle" v-text="subtitle"></div>
    </div>
  </section>
</template>

<script type="module" src="./OurWorldsCard.ts"></script>

<style scoped lang="scss">
@import "./OurWorldsCard";
</style>