import { Options, Vue } from "vue-class-component";
import Title from "@/components/Title/Title.vue"
import TxtImg2 from "@/components/TxtImg2/TxtImg2.vue"
import ExploreCarousel from "@/components/ExploreCarousel/ExploreCarousel.vue";
import Globe from "@/components/Globe/Globe.vue";
import Panels from "@/components/Panels/Panels.vue";

@Options({
  name:"Home",
  components: {
    Title,
    TxtImg2,
    ExploreCarousel,
    Globe,
    Panels
  },
  data() {
    return {
      elements: {} as {
        boldText: string;
        lightText: string;
        video: string;
        header1: string;
        header2: string;
        paragraph: string;
        imgRight: string;
        imgLeft: string;
        carousel: [];
        carouselH1: string;
        carouselH2: string;
      }[],
    };
  },
  created(){
    this.elements = {
     
      boldText: "  Experience",
      lightText: "   the Opulent luxury living",
      video: require("@/assets/discovery.mp4"),
      header1: "Discover",
      header2: " Luxury Beyond Limits",
      paragraph: "Discover a new era of luxury with DAT, home that creates an aura of exceptionally crafted luxury, comfort, and eternal elegance combined. Every detail is added thoughtfully to enhance your lifestyle and living experience. Step into a home that is not only designed to impress, but inspire. At DAT, we translate your dream into reality,  setting a new standard for what luxury living truly means.",
      imgRight: require('@/assets/TxtImg2/TxtImg1.jpg'),
      imgLeft: require('@/assets/TxtImg2/TxtImg2.jpg'),
      carousel: [
        {
          pic: "p1.png",
          title: "NORTH SHORE PRESERVE",
          location: `Kaua'i, Hawaii`,
        },
        {
          pic: "p2.png",
          title: "JAMES ISLAND",
          location: `Southern Gulf Islands, British Columbia, Canada`,
        },
        {
          pic: "p3.png",
          title: "COSTATERRA",
          location: `Comporta, Portugal`,
        },
        {
          pic: "p4.png",
          title: "BARBUDA OCEAN CLUB",
          location: `Barbuda, West Indies`,
        },
        {
          pic: "p5.png",
          title: "DRIFTWOOD",
          location: `Austin, Texas`,
        },
        {
          pic: "p6.png",
          title: "TROUBADOUR",
          location: `Nashville, Tennessee`,
        },
        {
          pic: "p7.png",
          title: "PLAYA GRANDE",
          location: `Rio San Juan, Dominican Republic`,
        },
        {
          pic: "p8.png",
          title: "CHILENO BAY",
          location: `Cabo San Lucas, Mexico`,
        },
        {
          pic: "p9.png",
          title: "THE SUMMIT",
          location: `Las Vegas, Nevada`,
        },
        {
          pic: "p10.png",
          title: "DUNE DECK",
          location: `Westhamton Beach, NY`,
        },
        {
          pic: "p11.png",
          title: "SILO RIDGE",
          location: `Amenia, New York`,
        },
        {
          pic: "p12.png",
          title: "MAKENA",
          location: `Maui, Hawaii`,
        },
        {
          pic: "p13.png",
          title: "YELLOWSTONE CLUB",
          location: `Big Sky, Montana`,
        },

        {
          pic: "p18.jpg",
          title: "HIDEAWAY",
          location: `La Quinta California`,
        },
        {
          pic: "p19.jpg",
          title: "MOUNTAINTOP",
          location: `Cashiers North Carolina`,
        },
        {
          pic: "p20.jpg",
          title: "MIRABEL",
          location: `Scottsdale, Azizona`,
        },
        {
          pic: "p21.jpg",
          title: "KUKIO",
          location: `Kohala, Hawaii`,
        },
        {
          pic: "p22.jpg",
          title: "VAQUERO",
          location: `Westlake, Texas`,
        },
        {
          pic: "p23.jpg",
          title: "IRON HORSE",
          location: `Whitefish, Montana`,
        },
        {
          pic: "p24.jpg",
          title: "CORDEVALLE",
          location: `Silicon Valley, California`,
        },
        {
          pic: "p25.jpg",
          title: "ESTANICIA",
          location: `Scottsdale, Arizona`,
        },
      ],
      carouselH1: "Explore",
      carouselH2: "Our Projects",
    }
  }
})
export default class Home extends Vue {}