import { Options, Vue } from "vue-class-component";
import PressNewsArticlesCard from "../PressNewsArticlesCard/PressNewsArticlesCard.vue";

@Options({
    name: "PressNewsArticles",
    components:{
        PressNewsArticlesCard,
    },
})

export default class PressNewsArticles extends Vue {}
