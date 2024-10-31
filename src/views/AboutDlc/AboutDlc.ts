import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue";
import ExploreCarousel from "@/components/ExploreCarousel/ExploreCarousel.vue";
import TxtImg2 from "@/components/TxtImg2/TxtImg2.vue";
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import BottomSection from "@/components/BottomSection/BottomSection.vue";

@Options({
  name: "AboutDlc",
  components: {
    Title,
    IntroSection,
    ExploreCarousel,
    TxtImg2,
    BottomSection
  },
  data() {
    return {
      elements: {} as {
        boldText: string;
        lightText: string;
        introParas: [];
        title: string;
        txtParagraphs: [];
        carousel: [];
        carouselH1: string;
        header1: string;
        paragraph: string;
        imgRight: string;
        imgLeft: string;
        headerMirror: string;
        paragraphMirror: string;
        imgRightMirror: string;
        imgLeftMirror: string;
      }[],
    };
  },
  created() {
    this.elements = {
      boldText: "Creating your",
      lightText: "perfect world",
      introParas: [
        "Founded in 1994 by Mike Meldman, Discovery Land Company is",
        "a US-based real estate developer and operator of private residential",
        "club communities and resorts with a world-renowned portfolio of",
        "domestic and international properties.",
      ],
      title: "Our Mission",
      txtParagraphs: [
        "We don’t build buildings, but rather we build settings where families can create intergenerational memories and enrich their lives in exquisite and untouched sanctuaries. Everything we do is driven by the fundamental desire to create spaces where families can be together.",
        "These settings offer a relaxed and comfortable sense of community featuring outstanding clubhouses, incredible residential offerings, premier golf courses, welcoming staff, world-class culinary offerings and our custom Outdoor Pursuits program; all offering the highest of service standards to enrich your experience.",
      ],
      carousel: [
        {
          pic: "p1.jpg",
          title: "Focus on family",
          location: `Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.`,
        },
        {
          pic: "p2.jpg",
          title: "Incomparable experiences",
          location: `World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.`,
        },
        {
          pic: "p3.jpg",
          title: "Inspired by land",
          location: `Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.`,
        },
        {
          pic: "p4.jpg",
          title: "Sustainable future",
          location: `Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.`,
        },
        {
          pic: "p5.jpg",
          title: "Luxury bespoke homes",
          location: `Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.`,
        },
        {
          pic: "p1.jpg",
          title: "Focus on family",
          location: `Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.`,
        },
        {
          pic: "p2.jpg",
          title: "Incomparable experiences",
          location: `World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.`,
        },
        {
          pic: "p3.jpg",
          title: "Inspired by land",
          location: `Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.`,
        },
        {
          pic: "p4.jpg",
          title: "Sustainable future",
          location: `Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.`,
        },
        {
          pic: "p5.jpg",
          title: "Luxury bespoke homes",
          location: `Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.`,
        },
      ],
      carouselH1: "The Discovery Difference",
      header1: "Discovery Builders",
      paragraph:
        "Every Discovery property is wonderfully in-tune with its natural surroundings - a harmonious blend of the architecturally impressive with the environmentally sensitive. And your every expectation will be met, with our meticulous eye for detail matching outstanding levels of craftsmanship and master building.",
      imgRight: require("@/assets/TxtImg2/AboutDlc/TxtImg1.jpg"),
      imgLeft: require("@/assets/TxtImg2/AboutDlc/TxtImg2.jpg"),
      headerMirror: "Discovery Design",
      paragraphMirror: "See the beauty in every corner of your new, bespoke home away from home. From fabrics and furniture pieces to floorplans, our professional designers will collaborate closely with you to create an interior living space which reflects your style and unique tastes as well as perfectly complementing your lifestyle.",
      imgRightMirror: require("@/assets/TxtImg2/AboutDlc/TxtImg1Mirror.jpg"),
      imgLeftMirror: require("@/assets/TxtImg2/AboutDlc/TxtImg2Mirror.jpg"),
    };
  },
})
export default class AboutDlc extends Vue {}
