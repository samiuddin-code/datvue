<template>
  <section class="main">
    <div class="our-worlds-cards">
      <OurWorldsCard
        v-for="(image, index) in images"
        :key="index"
        :pic="image.location_images"
        :title="image.title"
        :subtitle="image.subtitle"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import OurWorldsCard from '../../components/OurWorldsCard/OurWorldsCard.vue';
import { ApiResponse, Project, ImageDetails } from './OurWorlds'; // Import types

@Options({
  name: 'OurWorlds',
  components: {
    OurWorldsCard,
  },
})
export default class OurWorlds extends Vue {
  images: ImageDetails[] = [];

  async created() {
    await this.fetchImages();
  }

  async fetchImages() {
  try {
    const response = await axios.get<ApiResponse>('https://www.datconsultancy.com/_next/data/eXx6uPVkXf67Rmx7ThjPc/projects.json');
    const projectsArray = response.data?.pageProps?.response;

    // Check if response is an array, then find and map over rows if present
    const projects: Project[] = Array.isArray(projectsArray)
      ? projectsArray.find((item: { data: { rows: Project[] } }) => item.data.rows)?.data.rows || []
      : [];

    if (!projects.length) {
      console.warn('No projects found in the response');
      return;
    }

    this.images = projects.map((project: Project) => ({
      title: project.title,
      subtitle: project.highlight || '',
      location_images: `https://api.datconsultancy.com/uploads/${project.image}`,
    }));

    console.log('Fetched images:', this.images);
  } catch (error) {
    console.error('Error fetching images:', error);
    // Optional: Display an error message in the UI.
  }
}


}
</script>

<style scoped lang="scss">
@use "./OurWorlds"; // Ensure you have relevant styles defined in this file
</style> 