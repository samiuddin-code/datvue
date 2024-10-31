import { Options, Vue } from "vue-class-component";
import GalleryCard from "@/components/GalleryCard/GalleryCard.vue";

@Options({
  name: "Gallery",
  components: {
    GalleryCard,
  },
  data() {
    return {
      images: [] as {
        title: string;
        gallery_images: string;
      }[],
    };
  },
  created: function () {
    const titles: string[] = [
      "Outdoor Pursuits",
      "Golf",
      "Lifestyle",
      "Landscapes",
      "Clubhouses",
      "Wellness",
    ];
    for (let i = 1; i <= 6; i++) {
      this.images.push({
        title: titles[i - 1],
        gallery_images: require(`@/assets/Gallery/gallery-${i}.jpg`),
      });
    }
  },
})
export default class Gallery extends Vue {}