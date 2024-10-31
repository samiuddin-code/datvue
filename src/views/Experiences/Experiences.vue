<template>
  <div class="experiences">
    <div class="experiences-title">
      <Title
        :bText="elements.boldText"
        :lText="elements.lightText"
        :video="elements.video"
      />
    </div>
    <IntroSection
      :paragraphs="elements.introParas"
      :title="elements.title"
      :txtParagraphs="elements.txtParagraphs"
      :image="require('../../assets/IntroSection/Experiences.jpg')"
    />
    <div class="experiences-article">
      <ExperiencesArticle
        :image="require('../../assets/ExperiencesArticle/Golf.jpg')"
        :title="elements.expTitle"
        :paragraph="elements.expPara"
      />
      <ExperiencesArticle
        :image="require('../../assets/ExperiencesArticle/Outdoor.jpg')"
        :title="elements.expTitle2"
        :paragraph="elements.expPara2"
        :mirror="true"
      />
      <ExperiencesArticle
        :image="require('../../assets/ExperiencesArticle/Wellness.jpg')"
        :title="elements.expTitle3"
        :paragraph="elements.expPara3"
      />
    </div>
    <BottomSection picture="Experiences.jpg" />
  </div>
</template>

<script type="module" src="./Experiences.ts"></script>

<style lang="scss" scoped>
@import "./Experiences";
</style>