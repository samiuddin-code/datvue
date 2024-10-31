<template>
    <div class="article-card">
    <div class="top">
      <h2 class="title" v-html="title"></h2>
      <h3 class="subtitle" v-html="subtitle"></h3>
    </div>
    <div class="bottom">
      <button class="read-article">Read Article</button>
    </div>
  </div>
</template>

<script type="module" src="./PressArticlesCard.ts"></script>

<style lang="scss" scoped>
@import "./PressArticlesCard";
</style>