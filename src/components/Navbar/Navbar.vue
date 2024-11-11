<template>
  <div id="header" :class="{ scrolled: isScrolled }">
    <div id="nav" :class="{ 'sticky-nav': isScrolled }">
      <div id="nav-logo" :class="{ 'is-toggled': isToggled }">
        <router-link @click="isToggled = false" to="/">
          <img class="logo" src="../../assets/logo.png" alt="DAT" />
        </router-link>
        <button class="nav-toggler" @click="toggleMenu">
          <svg width="16" height="16" fill="#fff" class="toggler-svg">
            <rect width="16" height="4" x="0" y="0" />
            <rect width="16" height="4" x="0" y="6" />
            <rect width="12" height="4" x="0" y="12" />
          </svg>
        </button>
      </div>
      <div id="nav-links" :class="{ 'is-toggled': isToggled }">
        <router-link @click="isToggled = false" to="/about-dlc">
          <p class="hover-underline-animation">About DAT</p>
        </router-link>
        <router-link @click="isToggled = false" to="/our-worlds">
          <p class="hover-underline-animation">Our Expertise</p>
        </router-link>
        <router-link @click="isToggled = false" to="/experiences">
          <p class="hover-underline-animation">Experiences</p>
        </router-link>
        <router-link @click="isToggled = false" to="/gallery">
          <p class="hover-underline-animation">Gallery</p>
        </router-link>
        <router-link @click="isToggled = false" to="/press">
          <p class="hover-underline-animation">Press</p>
        </router-link>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      isToggled: false,
      isScrolled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isToggled = !this.isToggled;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() { // Using Vue 3 hook
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
@use "./navbar.scss";
</style>
