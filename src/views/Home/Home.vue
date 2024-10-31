<template>
  <div>
    <div class="home">
      <Title :bText="elements.boldText" :lText="elements.lightText" :video="elements.video" />
    </div>
    <TxtImg2 
      :header1="elements.header1" 
      :header2="elements.header2" 
      :paragraph="elements.paragraph" 
      :imgRight="elements.imgRight" 
      :imgLeft="elements.imgLeft" 
      :background="require('@/assets/TxtImg2/Background.jpg')" 
    />
    <ExploreCarousel 
      :carouselH1="elements.carouselH1" 
      :carouselH2="elements.carouselH2" 
      :carousel="elements.carousel" 
      worldPath="OurWorlds" 
    />
    <Globe />
    <Panels />
  </div>
</template>

<script type="module" src="./Home.ts"></script>

<style scoped lang="scss">
@import "./Home";
</style>
