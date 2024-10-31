<template>
  <div class="press-articles">
    <h1 class="heading">Press</h1>
    <div class="press-articles-card">
      <PressArticlesCard
        v-for="(data, index) in desktopArticlesData"
        :key="index"
        :title="data.title"
        :subtitle="data.subtitle"
      />
    </div>
    <div class="press-articles-card-mobile">
      <PressArticlesCard
        v-for="(data, index) in articlesData"
        :key="index"
        :title="data.title"
        :subtitle="data.subtitle"
      />
    </div>
    <div class="press-news-pages">
      <button class="left-button" @click="previousPage()">&#8592;</button>
      <span class="page-number">
        {{ page + 1 }}
        -
        {{ totalPages }}
      </span>
      <button class="right-button" @click="nextPage()">&#8594;</button>
    </div>
  </div>
</template>

<script type="module" src="./PressArticles.ts"></script>

<style lang="scss" scoped>
@import "./PressArticles";
</style>