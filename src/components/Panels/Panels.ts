import { Options, Vue } from "vue-class-component";
import { reactive } from "vue";

interface PanelContent {
  title: string;
  description: string;
}

@Options({
  name: "Panels",
})
export default class Panels extends Vue {
  // Define the content for each panel
  private panelContents: Record<string, PanelContent> = {
    experiences: {
      title: "Concept",
      description:
        "Experience the ultimate activities with thrilling adventures and world-class facilities.",
    },
    lifestyle: {
      title: "Design",
      description: "Explore a world of luxury and elegance with curated lifestyle options.",
    },
    wellness: {
      title: "Build",
      description: "Discover wellness options designed to nurture your body, mind, and soul.",
    },
  };

  // Initialize with default content
  private currentContent = reactive<PanelContent>({
    title: "Experiences",
    description:
      "Experience the ultimate activities with thrilling adventures and world-class facilities.",
  });

  // Method to load content based on panel selection
  loadContent(panel: string): void {
    const content = this.panelContents[panel];
    if (content) {
      this.currentContent.title = content.title;
      this.currentContent.description = content.description;
    }
  }

  // Method to handle the close button click
  closePanel(): void {
    // Logic to close or hide the panel (implement based on your needs)
    console.log("Close button clicked!");
  }
}