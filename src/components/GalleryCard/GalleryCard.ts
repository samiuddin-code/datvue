import { Options, Vue } from "vue-class-component";

@Options({
    name: "GalleryCard",
    props: {
        pic: {
        type: String,
      },
      text: {
        type: String,
      },
    },
})

export default class GalleryCard extends Vue {}