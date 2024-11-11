<template>
    <div id="experience-section" :style="backgroundStyle">
      <div class="button-container">
        <button v-for="exp in experiences" :key="exp.id" @click="showSection(exp.id)">
          {{ exp.name }}
        </button>
      </div>
  
      <!-- Display content dynamically based on selected section -->
      <div id="section-content" v-if="currentSection">
        <div class="section-image">
          <img :src="currentSection.image" :alt="currentSection.name" />
        </div>
        <p>{{ currentSection.description }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  interface Experience {
    id: string;
    name: string;
    image: string;
    description: string;
  }
  
  export default defineComponent({
    name: 'ExperienceSection',
    setup() {
      // Define the list of experiences
      const experiences = ref<Experience[]>([
        {
          id: 'golf',
          name: 'Golf Experience',
          image: '/path/to/golf-image.jpg',
          description: 'Experience the ultimate round of golf on championship courses...',
        },
        {
          id: 'adventure',
          name: 'Adventure Experience',
          image: '/path/to/adventure-image.jpg',
          description: 'Take a thrilling adventure with limitless activities...',
        },
      ]);
  
      // State for tracking the currently selected section
      const currentSection = ref<Experience | null>(null);
  
      // Function to show a specific section
      function showSection(id: string) {
        currentSection.value = experiences.value.find((exp) => exp.id === id) || null;
      }
  
      // Background style (replace with your background image URL)
      const backgroundStyle = {
        backgroundImage: "url('/path/to/your-background-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      };
  
      return {
        experiences,
        currentSection,
        showSection,
        backgroundStyle,
      };
    },
  });
  </script>
  
  <style scoped>
  #experience-section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }
  
  .button-container {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
  }
  
  button {
    background-color: rgba(255, 255, 255, 0.7);
    color: black;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  
  #section-content {
    text-align: center;
  }
  
  .section-image img {
    width: 100%;
    max-width: 600px;
    height: auto;
  }
  </style>
  