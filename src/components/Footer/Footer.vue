<template>
  <footer class="main-footer">
    <div class="footer-content">
      <img class="small-logo" src="../../assets/logo-footer.png" alt="Logo" />
      <div class="columns">
        <div class="contact column">
          <header>GET IN TOUCH</header>
          <address class="content">
            <a href="tel:(+971) 42 427 700">
              <p class="hover-underline-animation">(+971) 42 427 700</p>
            </a>
            <a href="tender@datconsultancy.com" class="hover-underline-animation">
             tender@datconsultancy.com
            </a>
          </address>
        </div>
        <div class="about column">
          <router-link to="/about-dlc"
            ><p class="hover-underline-animation">About DAT</p></router-link
          >
          <router-link to="/our-projects"
            ><p class="hover-underline-animation">Our Worlds</p></router-link
          >
          <router-link to="/projects"
            ><p class="hover-underline-animation">Experiences</p></router-link
          >
          <router-link to="/gallery"
            ><p class="hover-underline-animation">about</p></router-link
          >
          <router-link to="/press"
            ><p class="hover-underline-animation">news</p></router-link
          >
        </div>
        <div class="magazine column">
          <router-link to="/"
            ><p class="hover-underline-animation">Magazine</p></router-link
          >
          <router-link to="/"
            ><p class="hover-underline-animation">Careers</p></router-link
          >
          <router-link to="/"
            ><p class="hover-underline-animation">Foundation</p></router-link
          >
          <router-link to="/"
            ><p class="hover-underline-animation">Company</p></router-link
          >
          <router-link to="/"
            ><p class="hover-underline-animation">Contact</p></router-link
          >
          <router-link to="/"
            ><p class="hover-underline-animation">Privacy</p></router-link
          >
        </div>
      </div>
    </div>
    <div class="copyright">
      <p class="copyright-text">
        &#169; DAT artitects. All rights reserved
      </p>
    </div>
  </footer>
</template>

<script type="module" src="./Footer.ts"></script>

<style scoped lang="scss">
  @import "./Footer";
</style>