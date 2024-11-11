<template>
  <div class="about-dlc">
    <div class="about-dlc-title">
      <Title :bText="elements.boldText" :lText="elements.lightText" :imageBg="require('../../assets/aboutBg.png')"/>
    </div>
      <IntroSection :paragraphs="elements.introParas" :title="elements.title" :txtParagraphs="elements.txtParagraphs" :image="require('../../assets/IntroSection/AboutDlc.jpg')"/>
      <div class="bakers-image-section">
      <img
        class="bakers-image"
        :src="require('../../assets/AboutDlc/Restaurant.jpg')"
        alt="BakersImg"
      />
    </div>
      <ExploreCarousel :carouselH1="elements.carouselH1" :carousel="elements.carousel" worldPath="AboutDlc"/>
      <div class="larger-image-section">
      <img
        :src="require('../../assets/AboutDlc/Restaurant.jpg')"
        alt="Restaurant"
        class="larger-image"
      />
      <TxtImg2 :header1="elements.headerMirror" :paragraph="elements.paragraphMirror" :imgRight="elements.imgRightMirror" :imgLeft="elements.imgLeftMirror" :mirror="true"/>
      <img
        :src="require('../../assets/AboutDlc/basement.png')"
        alt="Restaurant"
        class="larger-image"
      />
    </div>
      <TxtImg2 :header1="elements.header1" :paragraph="elements.paragraph" :imgRight="elements.imgRight" :imgLeft="elements.imgLeft" :mirror="false"/>
      <BottomSection picture="AboutDlc.jpg"/>
  </div>
</template>

<script type="module" src="./AboutDlc.ts"></script>

<style scoped lang="scss">
@use "./AboutDlc";
</style>