<template>
  <article class="experiences-article" :class="[mirror ? 'mirror' : '']">
    <div class="image">
      <img :src="image" alt="image" />
    </div>
    <div class="article-txt2-btn">
        <h1 class="title" v-html="title"></h1>
        <p class="paragraph" v-html="paragraph"></p>
        <div class="explore-btn">
        <button class="explore">
          Explore
        </button>
      </div>
    </div>
  </article>
</template>

<script type="module" src="./ExperiencesArticle.ts"></script>

<style lang="scss" scoped>
@import "./ExperiencesArticle";
</style>