import { Options, Vue } from "vue-class-component";

@Options({
    name: "IntroSection",
    props: {
        paragraphs: {
            type: Array,
        },
        title: {
            type: String,
        },
        txtParagraphs: {
            type: Array,
        },
        image: {
            type: String,
        }
    }
})

export default class IntroSection extends Vue {}
