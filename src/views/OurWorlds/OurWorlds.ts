// OurWorlds.ts
// Define the Project interface to match the expected API response structure
export interface Project {
  id: number;
  title: string;
  slug: string;
  highlight: string;
  description: string;
  image: string;
}

// Define the ImageDetails interface for the images used in the component
export interface ImageDetails {
  title: string;
  subtitle: string;
  location_images: string;
}

// Define the ApiResponse interface to match the expected structure of the API response
export interface ApiResponse {
  pageProps: {
    response: {
      data: {
        rows: Project[];
      }[];
    };
  };
}
