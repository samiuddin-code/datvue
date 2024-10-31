import { Options, Vue } from "vue-class-component";

@Options({
    name: "Navbar",
    data(){
        return{
            isToggled: false,
        };
    }
})

export default class Navbar extends Vue {}