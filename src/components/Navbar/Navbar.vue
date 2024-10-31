<template>
  <div id="header">
    <div id="nav">
      <div id="nav-logo" :class="[isToggled ? 'is-toggled' : '']">
        <router-link @click="isToggled=false" to="/"
          ><img
            class="logo"
            src="../../assets/logo.png"
            alt="DAT"
        /></router-link>
        <button class="nav-toggler" @click="isToggled = !isToggled">
          <svg width="16" height="16" fill="#fff" class="toggler-svg">
            <rect width="16" height="4" x="0" y="0" />
            <rect width="16" height="4" x="0" y="6" />
            <rect width="12" height="4" x="0" y="12" />
          </svg>
        </button>
      </div>
      <div id="nav-links" :class="[isToggled ? 'is-toggled' : '']">
        <router-link @click="isToggled=false" to="/about-dlc"
          ><p class="hover-underline-animation">About DAT</p></router-link
        >
        <router-link @click="isToggled=false" to="/our-worlds"
          ><p class="hover-underline-animation">Our Worlds</p></router-link
        >
        <router-link @click="isToggled=false" to="/experiences"
          ><p class="hover-underline-animation">Experiences</p></router-link
        >
        <router-link @click="isToggled=false" to="/gallery"
          ><p class="hover-underline-animation">Gallery</p></router-link
        >
        <router-link @click="isToggled=false" to="/press"
          ><p class="hover-underline-animation">Press</p></router-link
        >
        <!-- <router-link to="/">&#x2630;</router-link> -->
      </div>
    </div>
  </div>
</template>

<script type="module" src="./Navbar.ts"></script>

<style lang="scss" scoped>
@import "./Navbar";
</style>