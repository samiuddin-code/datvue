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
      boldText: "Discover the Luxury",
      lightText: "Sanctuary of Your Dreams",
      introParas: [
        
        "Since its establishment in 2014, DAT has been at the forefront of innovation,",
        "offering state-of-the-art architectural and engineering solutions that push the",
        "boundaries of design. Firmly rooted in passion, expertise, and a relentless drive",
        "for excellence, we pride ourselves on delivering visionary solutions that fulfill and .",

        "often surpass our clients' expectations. Years of experience empower us to offer",
        "exceptional, high-quality services, establishing DAT as one of the leading ",
        "architecture firms within the industry.",
      ],
      title: "Our Vision",
      txtParagraphs: [
        "At DAT, we turn spaces into unique, memorable retreats where families bond and make memories to last. Drawing inspiration from the beauty of nature, we strive to create outstanding, ",
        "one-off environments that should enrich life and bring generations closer together in a perfect blend of luxury, comfort, and timeless design.",
      ],
      carousel: [
        {
          pic: "p1.png",
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
          location: `Through  in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.`,
        },
        {
          pic: "p1.png",
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
      carouselH1: "The Discovery Story",
      // header1: "Discovery Builders",
      paragraph:
        "At DAT Architecture, we specialize in creating architectural masterpieces that harmonize effortlessly with their natural surroundings. Our designs are a perfect blend of bold, innovative architecture and sustainable practices, ensuring every structure not only captivates but also respects the environment. With DAT, every project reflects our unwavering commitment to precision, exceptional craftsmanship, and visionary design, delivering results that consistently exceed your expectations.",
       imgRight: require("@/assets/TxtImg2/AboutDlc/TxtImg1.jpg"),
       imgLeft: require("@/assets/TxtImg2/AboutDlc/TxtImg2.jpg"),
      headerMirror: "Discovery Design",
      paragraphMirror: "See the beauty in every corner of your new, bespoke home away from home. From fabrics and furniture pieces to floorplans, our professional designers will collaborate closely with you to create an interior living space which reflects your style and unique tastes as well as perfectly complementing your lifestyle.",
      imgRightMirror: require("@/assets/TxtImg2/AboutDlc/TxtImg1Mirror.jpg"),
      // imgLeftMirror: require("@/assets/TxtImg2/AboutDlc/TxtImg2Mirror.png"),
    };
  },
})
export default class AboutDlc extends Vue {}
