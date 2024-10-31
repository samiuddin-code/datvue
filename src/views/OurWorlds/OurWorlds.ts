import { Options, Vue } from "vue-class-component";
import OurWorldsCard from "../../components/OurWorldsCard/OurWorldsCard.vue";

@Options({
  name: "OurWorlds",
  components: {
    OurWorldsCard,
  },

  data() {
    return {
      images: [] as {
        title: string;
        subtitle: string;
        location_images: string;
      }[],
    };
  },

  created() {
    [
      {
        title: "NORTH SHORE PRESERVE",
        subtitle: "Kaua'i Hawaii",
      },
      {
        title: "JAMES ISLAND",
        subtitle: "Southern Gulf Islands, British Columbia, Canada",
      },
      {
        title: "COSTATERRA",
        subtitle: "Comporta, Portugal",
      },
      {
        title: "BARBUDA OCEAN CLUB",
        subtitle: "Barbuda, West Indies",
      },
      {
        title: "DRIFTWOOD",
        subtitle: "Austin, Texas",
      },
      {
        title: "TROUBADOUR",
        subtitle: "Nashville, Tennessee",
      },
      {
        title: "PLAYA GRANDE",
        subtitle: "Rio San Juan, Dominican Republic",
      },
      {
        title: "CHILENO BAY",
        subtitle: "Cabo San Lucas, Mexico",
      },
      {
        title: "THE SUMMIT",
        subtitle: `Las Vegas, Nevada`,
      },
      {
        title: "DUNE DECK",
        subtitle: `Westhamton Beach, NY`,
      },
      {
        title: "SILO RIDGE",
        subtitle: `Amenia, New York`,
      },
      {
        title: "MAKENA",
        subtitle: `Maui, Hawaii`,
      },
      {
        title: "YELLOWSTONE CLUB",
        subtitle: `Big Sky, Montana`,
      },
      {
        title: "GOZZER RANCH",
        subtitle: `Coeur d'Alene, Idaho`,
      },
      {
        title: "EL DORADO",
        subtitle: `Los Gabos, Mexico`,
      },
      {
        title: "MADISON",
        subtitle: `La Quinta, California`,
      },
      {
        title: `BAKER'S BAY`,
        subtitle: `Great Guana Cay, Behamas`,
      },
      {
        title: "HIDEAWAY",
        subtitle: `La Quinta California`,
      },
      {
        title: "MOUNTAINTOP",
        subtitle: `Cashiers North Carolina`,
      },
      {
        title: "MIRABEL",
        subtitle: `Scottsdale, Azizona`,
      },
      {
        title: "KUKIO",
        subtitle: `Kohala, Hawaii`,
      },
      {
        title: "VAQUERO",
        subtitle: `Westlake, Texas`,
      },
      {
        title: "IRON HORSE",
        subtitle: `Whitefish, Montana`,
      },
      {
        title: "CORDEVALLE",
        subtitle: `Silicon Valley, California`,
      },
      {
        title: "ESTANICIA",
        subtitle: `Scottsdale, Arizona`,
      },
    ].forEach((card, index) => {
        this.images.push({
          location_images: require(`@/assets/OurWorlds/p${index+1}.jpg`),
          title: card.title,
          subtitle: card.subtitle,
        });
      });
  },
})
export default class OurWorlds extends Vue {}