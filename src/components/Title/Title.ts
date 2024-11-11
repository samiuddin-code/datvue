
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Title",
  props: {
    bText: {
      type: String,
      required: true
    },
    lText: {
      type: String,
      required: true
    },
    video: {
      type: String,
      required: true
    },
    imageBg: {
      type: String,
      required: true
    }
  }
})
export default class Title extends Vue {
  // These props are automatically injected into the component
  bText!: string;
  lText!: string;
  video!: string;
  imageBg!: string;

  // Method to handle scroll when the button is clicked
  scrollToNextSection() {
    window.scrollBy({
      top: window.innerHeight, // Scroll one full viewport height
      left: 0,
      behavior: 'smooth' // Smooth scroll animation
    });
  }
}

