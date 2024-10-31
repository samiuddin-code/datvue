<template>
  <div class="press">
    <div class="press-title">
      <Title
        :bText="elements.boldText"
        :lText="elements.lightText"
        :imageBg="require('../../assets/pressBg.jpg')"
      />
    </div>
    <PressNewsArticles />
    <PressArticles />
  </div>
</template>

<script type="module" src="./Press.ts"></script>

<style scoped lang="scss">
@import "./Press";
</style>