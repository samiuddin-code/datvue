<template>
  <div class="globe-container">
    <section class="globe-top">
      <div class="globe-header">
        <span class="header-first-half"> Lands of </span>
        <span class="header-second-half"> Discovery </span>
      </div>
      <div class="globe-para">
        <p>
          A world away from the day-to-day. Your escape. Your haven. Your world.
        </p>
        <p>Explore the map below and take a journey to our communities.</p>
      </div>
      <nav class="globe-nav">
        <button
          v-for="(land, index) in lands"
          :key="index"
          class="globe-nav-item hover-underline-animation"
          v-html="land.continent"
          @click="setContinent(index)"
          :class="[selectedContinent === index ? 'router-link-exact-active' : '']"
        ></button>
      </nav>
    </section>
    <section class="globe">
      <img
        :src="lands[selectedContinent].globeImage"
        alt="Globe showing North America"
        class="globe-image"
      />
      <div class="location-data">
        <div class="nav">
          <button @click="previousPlace()" class="nav-previous">
            &#8592;
          </button>
          <button @click="nextPlace()" class="nav-next">
           &#8594;
          </button>
        </div>

        <div class="weather">
          <div class="temperature">
            <button>&#9788;</button>
            <div
              class="value text-grey"
              v-html="
                lands[selectedContinent].locations[selectedPlace].temperature
              "
            ></div>
          </div>
          <div class="winds">
            <button>&#x2634;</button>
            <div
              class="value text-grey"
              v-html="lands[selectedContinent].locations[selectedPlace].winds"
            ></div>
          </div>
          <div class="compass">
            <button>&#129517;</button>
            <div
              class="value text-grey"
              v-html="lands[selectedContinent].locations[selectedPlace].compass"
            ></div>
          </div>
        </div>

        <div class="location">
          <div
            class="title text-grey"
            v-html="
              lands[selectedContinent].locations[selectedPlace].locationTitle
            "
          ></div>
          <div
            class="subtitle"
            v-html="
              lands[selectedContinent].locations[selectedPlace].locationSubtitle
            "
          ></div>
        </div>

        <div class="coordinates">
          <location-pin color="#fff" />
          <span
            class="coordinate text-grey"
            v-html="
              lands[selectedContinent].locations[selectedPlace].coordinate
            "
          >
          </span>
        </div>

        <div
          class="image"
          :style="{
            backgroundImage: `url(${lands[selectedContinent].locations[selectedPlace].image})`,
          }"
        ></div>
      </div>
    </section>
  </div>
</template>

<script type="module" src="./Globe.ts"></script>

<style scoped lang="scss">
@import "./Globe";
</style>