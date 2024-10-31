<template>
    <div class="container" :style='{"background-image": `url(${background})`}'>
      <section id="TxtImg2" :class="[mirror ? 'mirror': '']">
        <div class="top-left">
          <h1 class="bold-header">
            <span class="header-first-half">
              {{ header1 }}
            </span>
            <span class="header-second-half">
              {{ header2 }}
            </span>
          </h1>
          <p class="light-text">
            {{ paragraph }}
          </p>
        </div>
        <div class="right">
          <img :src="imgRight" alt="Ocean View" />
        </div>
        <div class="bottom-left">
          <img :src="imgLeft" alt="Leisure" />
        </div>
      </section>
    </div>
</template>

<script type="module" src="./TxtImg2.ts"></script>

<style scoped lang="scss">
@import "./TxtImg2";
</style>