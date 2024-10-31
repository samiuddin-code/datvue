import { Options, Vue } from "vue-class-component";

@Options({
    name: "TxtImg2",
    props: {
        header1 : {
            type: String
        },
        header2 : {
            type: String
        },
        paragraph : {
            type: String
        },
        imgRight : {
            type: String
        },
        imgLeft : {
            type: String
        },
        background : {
            type: String
        },
        mirror : {
            type: Boolean,
            default: false
        }
    }
})

export default class TxtImg2 extends Vue {}