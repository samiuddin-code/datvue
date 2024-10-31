import { Options, Vue } from "vue-class-component";

@Options({
    name: "BottomSection",
    props: {
        picture: {
            type: String,
        }
    }
})

export default class BottomSection extends Vue {}
