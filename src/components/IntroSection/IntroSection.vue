<template>
  <section class="intro-section">
    <div class="intro-para">
      <p
        v-for="(paragraph, index) in paragraphs"
        :key="index"
        v-html="paragraph"
      ></p>
    </div>
    <div class="intro-txt2-img">
      <div class="left-part txt2">
        <h1 class="title" v-html="title"></h1>
        <div class="txt-paras">
          <p
            class="txt-para"
            v-for="(txtParagraph, index) in txtParagraphs"
            :key="index"
            v-html="txtParagraph"
          ></p>
        </div>
      </div>
      <div class="right-part img1">
          <img :src="image" alt="Image" />
      </div>
    </div>
  </section>
</template>

<script type="module" src="./IntroSection.ts"></script>

<style lang="scss" scoped>
@import "./IntroSection";
</style>