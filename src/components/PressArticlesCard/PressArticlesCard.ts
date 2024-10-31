import { Options, Vue } from "vue-class-component";

@Options({
    name: "PressArticlesCard",
    props: {
        title: {
            type: String,
        },
        subtitle: {
            type: String,
        }
    }
})

export default class PressArticlesCard extends Vue {}
