import { Options, Vue } from "vue-class-component";
import { reactive } from "vue";

interface PanelContent {
  title: string;
  description: string;
  videoUrl: string;
}

@Options({
  name: "Panels",
})
export default class Panels extends Vue {
  // Define the content for each panel
  private panelContents: Record<string, PanelContent> = {
    experiences: {
      title: "Experiences",
      description:
        "Experience the ultimate activities with thrilling adventures and world-class facilities.",
      videoUrl: "https://www.datocms-assets.com/128889/1715610763-experiences.mp4",
    },
    lifestyle: {
      title: "Lifestyle",
      description:
        "Explore a world of luxury and elegance with curated lifestyle options.",
      videoUrl: "https://www.example.com/lifestyle.mp4",
    },
    wellness: {
      title: "Wellness",
      description:
        "Discover wellness options designed to nurture your body, mind, and soul.",
      videoUrl: "https://www.example.com/wellness.mp4",
    },
  };

  // Initialize with default content
  private currentContent = reactive<PanelContent>({
    title: "Experiences",
    description:
      "Experience the ultimate activities with thrilling adventures and world-class facilities.",
    videoUrl: "https://www.datocms-assets.com/128889/1715610763-experiences.mp4",
  });

  // This state determines if the content is expanded
  private isExpanded = false;

  // Method to load content based on panel selection
  expandPanel(panel: string): void {
    const content = this.panelContents[panel];
    if (content) {
      this.currentContent.title = content.title;
      this.currentContent.description = content.description;
      this.currentContent.videoUrl = content.videoUrl;
      this.isExpanded = true; // Show the expanded content
    }
  }

  // Method to handle the close button click
  closePanel(): void {
    this.isExpanded = false; // Hide the expanded content
    console.log("Close button clicked!");
  }

  // Method to explore content (implement as needed)
  exploreContent(): void {
    console.log("Exploring content...");
  }
}
