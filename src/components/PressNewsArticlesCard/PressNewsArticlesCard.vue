<template>
  <div class="press-news-articles-card">
    <div class="articles-card">
      <div class="card-back">
        <div class="image">
          <img
            :src="latestNewsData[pageNumber].image"
            alt="Latest News Image"
          />
        </div>
      </div>
      <div class="card-front">
        <div class="heading">
          <div class="title">News</div>
          <div
            class="subtitle"
            v-html="latestNewsData[pageNumber].subtitle"
          ></div>
        </div>
        <div class="content" v-html="latestNewsData[pageNumber].content"></div>
        <div class="button">
          <button>Read Article</button>
        </div>
      </div>
    </div>
    <div class="pages">
      <button class="left-button" @click="previousPage()">&#8592;</button>
      <span class="page-number">
        {{ pageNumber + 1 }}
        -
        {{ latestNewsData.length }}
      </span>
      <button class="right-button" @click="nextPage()">&#8594;</button>
    </div>
  </div>
</template>

<script type="module" src="./PressNewsArticlesCard.ts"></script>

<style lang="scss" scoped>
@import "./PressNewsArticlesCard";
</style>