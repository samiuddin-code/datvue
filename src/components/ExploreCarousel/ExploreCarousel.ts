import { Options, Vue } from "vue-class-component";

@Options({
    name: "ExploreCarousel",
    props:{
        carousel: {
            type: Array,
        },
        worldPath: {
            type: String,
        },
        carouselH1: {
            type: String,
        },
        carouselH2: {
            type: String,
        },
    },
})

export default class ExploreCarousel extends Vue {}