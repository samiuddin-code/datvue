import { Options, Vue } from "vue-class-component";

@Options({
  name: "Globe",
  data() {
    return {
      lands: [
        {
          continent: "North America & Caribbean",
          globeImage: require("@/assets/Globe/globe.jpg"),
          locations: [
            {
              temperature: "73&deg; F",
              winds: "1.99 mph",
              compass: "135&deg;",
              locationTitle: "Austin, Texas",
              locationSubtitle: "Driftwood",
              coordinate: "30.139339&deg; N / -98.022342&deg; W",
              image:
                "https://dxaurk9yhilm4.cloudfront.net/images/775/driftwood3-Map_397186feb8bd51bb37bc24fc2b9b500f.jpg",
            },
            {
              temperature: "57&deg; F",
              winds: "5.19 mph",
              compass: "209&deg;",
              locationTitle: "Nashville, Tennessee",
              locationSubtitle: "Troubadour",
              coordinate: "35.828904&deg; N / -86.679158&deg; W",
              image:
                "https://dxaurk9yhilm4.cloudfront.net/images/774/Troubadour-Map_190718_114642_397186feb8bd51bb37bc24fc2b9b500f.jpg",
            },
            {
              temperature: "83&deg; F",
              winds: "9.37 mph",
              compass: "238&deg;",
              locationTitle: "Rio San Juan, Dominican Republic",
              locationSubtitle: "Playa Grande",
              coordinate: "19.3830&deg; N / 70.0407&deg; W",
              image:
                "https://dxaurk9yhilm4.cloudfront.net/images/217/Playa-Map_397186feb8bd51bb37bc24fc2b9b500f.jpg",
            },
            {
              temperature: "46&deg; F",
              winds: "1.99 mph",
              compass: "189&deg;",
              locationTitle: "Coeur d’Alene, Idaho",
              locationSubtitle: "Gozzer Ranch",
              coordinate: "47.617997&deg; N / -116.766169&deg; W",
              image:
                "https://dxaurk9yhilm4.cloudfront.net/images/769/gozzer-Map2_397186feb8bd51bb37bc24fc2b9b500f.jpg",
            },
          ],
        },
        {
          continent: "Hawaii",
          globeImage: require("@/assets/Globe/globe-hawaii.jpg"),
          locations: [
            {
              temperature: "73&deg; F",
              winds: "8.37 mph",
              compass: "36&deg;",
              locationTitle: "Maui, Hawaii",
              locationSubtitle: "Mākena",
              coordinate: "20.690308&deg; N / -156.440582&deg; W",
              image:
                "https://dxaurk9yhilm4.cloudfront.net/images/394/Makena3-Map_397186feb8bd51bb37bc24fc2b9b500f.jpg",
            },
            {
              temperature: "75&deg; F",
              winds: "4.61 mph",
              compass: "0&deg;",
              locationTitle: "Kohala, Hawaii",
              locationSubtitle: "Kūki'o",
              coordinate: "19.817312&deg; N / -155.998547&deg; W",
              image:
                "https://dxaurk9yhilm4.cloudfront.net/images/774/Troubadour-Map_190718_114642_397186feb8bd51bb37bc24fc2b9b500f.jpg",
            },
            {
              temperature: "20&deg; F",
              winds: "13.15 mph",
              compass: "318&deg;",
              locationTitle: "Comporta, Portugal",
              locationSubtitle: "CostaTerra",
              coordinate: "38.198750&deg; N / -8.764298&deg; W",
              image:
                "https://dxaurk9yhilm4.cloudfront.net/images/6891/iStock-547510418_200514_172314_397186feb8bd51bb37bc24fc2b9b500f.jpg",
            },
          ],
        },
        {
          continent: "Europe",
          globeImage: require("@/assets/Globe/globe-europe.jpg"),
          locations: [
            {
              temperature: "731&deg; F",
              winds: "11.99 mph",
              compass: "135&deg;",
              locationTitle: "Austin, Texas",
              locationSubtitle: "Driftwood",
              coordinate: "30.139339&deg; N / -98.022342&deg; W",
              image:
                "https://dxaurk9yhilm4.cloudfront.net/images/775/driftwood3-Map_397186feb8bd51bb37bc24fc2b9b500f.jpg",
            },
            {
              temperature: "571&deg; F",
              winds: "51.19 mph",
              compass: "209&deg;",
              locationTitle: "Nashville, Tennessee",
              locationSubtitle: "Troubadour",
              coordinate: "35.828904&deg; N / -86.679158&deg; W",
              image:
                "https://dxaurk9yhilm4.cloudfront.net/images/774/Troubadour-Map_190718_114642_397186feb8bd51bb37bc24fc2b9b500f.jpg",
            },
            {
              temperature: "831&deg; F",
              winds: "91.37 mph",
              compass: "238&deg;",
              locationTitle: "Rio San Juan, Dominican Republic",
              locationSubtitle: "Playa Grande",
              coordinate: "19.3830&deg; N / 70.0407&deg; W",
              image:
                "https://dxaurk9yhilm4.cloudfront.net/images/217/Playa-Map_397186feb8bd51bb37bc24fc2b9b500f.jpg",
            },
          ],
        },
      ],
      selectedContinent: 0,
      selectedPlace: 0,
    };
  },
  methods: {
    setContinent(index: number) {
      this.selectedPlace = 0;
      this.selectedContinent = index;
    },
    nextPlace() {
      const totalPlaces = this.lands[this.selectedContinent].locations.length;
      this.selectedPlace = (this.selectedPlace + 1) % totalPlaces;
    },
    previousPlace() {
      const totalPlaces = this.lands[this.selectedContinent].locations.length;
      this.selectedPlace = (this.selectedPlace + totalPlaces - 1) % totalPlaces;
    },
  },
})

export default class Globe extends Vue {}
