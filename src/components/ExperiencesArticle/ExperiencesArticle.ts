import { Options, Vue } from "vue-class-component";

@Options({
  name: "ExperiencesArticle",
  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    paragraph: {
      type: String,
    },
    mirror: {
      type: Boolean,
      default: false,
    },
  },
})
export default class ExperiencesArticle extends Vue {}
