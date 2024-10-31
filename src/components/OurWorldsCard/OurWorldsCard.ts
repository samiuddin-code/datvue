import { Options, Vue } from "vue-class-component";

@Options({
    name: "OurWorldsCard",
    props:{
        pic: {
        type: String,
      },
      title: {
        type: String,
      },
      subtitle: {
        type: String,
      },
    }
})

export default class OurWorldsCard extends Vue {}