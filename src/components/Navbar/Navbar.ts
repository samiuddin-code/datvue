import { Options, Vue } from "vue-class-component";

@Options({
  name: "Navbar",
  data() {
    return {
      isToggled: false,
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
})
export default class Navbar extends Vue {
  isToggled: boolean = false;
  isScrolled: boolean = false;

  // Method to handle menu toggle
  toggleMenu() {
    this.isToggled = !this.isToggled;
  }

  // Method to handle scroll event
  handleScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
