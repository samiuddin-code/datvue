<template>
  <div class="experience-section">
    <!-- Background Video -->
    <video autoplay muted loop class="background-video">
      <source src="https://www.datocms-assets.com/128889/1715610763-experiences.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <!-- Close Icon -->
    <button class="close-button" @click="closePanel">
      <i class="fa fa-times" aria-hidden="true"></i>
    </button>

    <!-- Content Display -->
    <div class="content">
      <h2>{{ currentContent.title }}</h2>
      <p>{{ currentContent.description }}</p>
      <button class="-button" @click="loadContent('experiences')">Explore</button>
    </div>
  </div>
</template>

<script lang="ts">
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
</script>

<style scoped>
.experience-section {
  position: relative;
  width: 100%;
  height: 100vh; /* Full screen height */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
}

.content {
  margin-left: 5%;
  max-width: 40%;
  z-index: 1;
}

.content h2 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.content p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.explore-button {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.explore-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
