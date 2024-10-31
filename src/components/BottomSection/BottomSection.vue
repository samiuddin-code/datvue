<template>
    <section class="bottom-section">
        <img :src="require(`@/assets/BottomSection/${picture}`)" alt="bgImage">
         <div class="bottom-section-content">
            <h1>Our Dat Worlds</h1>
            <button class="btn btn-border-1">Explore</button>
        </div>
    </section>
</template>

<script type="module" src="./BottomSection.ts"></script>

<style lang="scss" scoped>
@import "./BottomSection";
</style>