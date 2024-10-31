import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue";
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import BottomSection from "@/components/BottomSection/BottomSection.vue";
import ExperiencesArticle from "@/components/ExperiencesArticle/ExperiencesArticle.vue";

@Options({
  name: "Experiences",
  components: {
    Title,
    IntroSection,
    ExperiencesArticle,
    BottomSection
  },
  data() {
    return {
      elements: {} as {
        boldText: string;
        lightText: string;
        video: string;
        introParas: [];
        title: string;
        txtParagraphs: [];
        expTitle: string;
        expPara: string;
        expTitle2: string;
        expPara2: string;
        expTitle3: string;
        expPara3: string;
      }[],
    };
  },
  created() {
    this.elements = {
      boldText: "Unforgettable",
      lightText: "experiences",
      // video: "https://youtu.be/pQrgAaNOW_c",
       video: require("@/assets/experiences.mp4"),
      introParas: [
        " Memorable days. Exceptional nights. We believe it’s our mission to ",
        "make every minute matter. So you can live your life to the fullest, ",
        "with the people closest to you. ",
      ],
      title: "Exclusive to<br>your world",
      txtParagraphs: [
        "Our worlds are designed to offer you endless opportunities to share incredible once-in-a-lifetime experiences and adventures every single minute of the day. Each of our settings offers a relaxed sense of extensive Outdoor Pursuits program. Create moments of joy and wonder, unforgettable memories and cherished times, together with those who matter most.",
      ],
      expTitle: "Golf",
      expPara: "We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.",
      expTitle2: "Outdoor Pursuits",
      expPara2: "Our signature Outdoor Pursuits program is designed for families to create memories together. Whether you’re trying a new sport or taking a day trip, our team will ensure you make the most of every minute with activities designed to help you take advantage of everything each region has to offer.",
      expTitle3: "Wellness",
      expPara3: "Unwind at an indulgent spa. Set challenging targets with a tailor-made fitness plan. Or let our talented chefs treat you to our flavorful international menus created using the finest, carefully selected foods sourced locally from organic farms.",
    };
  },
})
export default class Experiences extends Vue {}
