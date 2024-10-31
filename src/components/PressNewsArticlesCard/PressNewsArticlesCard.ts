import { Options, Vue } from "vue-class-component";

@Options({
    name: "PressNewsArticlesCard",
    data() {
        return {
          latestNewsData: [
            {
              image:
                "https://dxaurk9yhilm4.cloudfront.net/images/8790/DJI_0265_RET_2_210405_191033_8cfe90628771654de81065d52a5bfbcf.jpg",
              subtitle:
                "Discovery’s newest property in Kaua’i North Shore Preserve",
              content:
                "Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.",
            },
            {
              image:
                "https://dxaurk9yhilm4.cloudfront.net/images/7003/HERO_1920_200615_181847_8cfe90628771654de81065d52a5bfbcf.jpg",
              subtitle: "James Island <br> Discovery's Newest Property",
              content:
                "Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada.",
            },
            {
              image:
                "https://dxaurk9yhilm4.cloudfront.net/images/523/CostaTerra1-copy_8cfe90628771654de81065d52a5bfbcf.jpg",
              subtitle: "CostaTerra <br> Discovery's 23rd property",
              content:
                "Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.",
            },
            {
              image:
                "https://dxaurk9yhilm4.cloudfront.net/images/251/Troubadour-carousel_190620_130709_8cfe90628771654de81065d52a5bfbcf.jpg",
              subtitle: "Troubadour To Open Golf Course Fall 2019",
              content:
                "Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall.",
            },
          ],
          pageNumber: 0 as number,
        };
      },
      methods: {
        previousPage() {
          const totalPages = this.latestNewsData.length;
          this.pageNumber = (this.pageNumber + totalPages - 1) % totalPages;
        },
        nextPage() {
          const totalPages = this.latestNewsData.length;
          this.pageNumber = (this.pageNumber + 1) % totalPages;
        },
      },
})

export default class PressNewsArticlesCard extends Vue {}