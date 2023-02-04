<script setup>
import { ref } from "vue";
import Highlighted from "../components/Highlighted.vue";

const herSliderImages = ref([
  "../assets/images/comp-1.png",
  "../assets/images/comp-2.png",
  "../assets/images/comp-3.png",
  "../assets/images/comp-4.png",
  "../assets/images/comp-5.png",
  "../assets/images/comp-6.png",
]);

function imageUrl(path) {
  return new URL(path, import.meta.url).href;
}
</script>

<template>
  <sectionWrapper className="hero">
    <container>
      <grid gap="64px">
        <flexbox>
          <wrapper width="600px">
            <sectionTitle
              fontSize="72px"
              textAlign="start"
              lineHeight="75px"
              letterSpacing="-1px"
            >
              Get <highlighted>fast</highlighted>, affordable landlord insurance
            </sectionTitle>
            <my-form></my-form>
          </wrapper>
          <imageWrapper height="606px" width="600px">
            <img src="../assets/images/hero-image.png" alt="" />
          </imageWrapper>
        </flexbox>
        <container>
          <p class="hero-word">as seen on</p>
          <slider flow="row" gridCardsWidth="133px" gap="64px">
            <imageWrapper v-for="img in herSliderImages" height="104px">
              <img :src="imageUrl(img)" alt="" />
            </imageWrapper>
          </slider>
        </container>
      </grid>
    </container>
  </sectionWrapper>
</template>

<style scoped>
section {
  background: var(--bg-secondary-color);
}
.hero-word {
  position: relative;
  display: inline-block;
  padding: 0 20px;
  width: 100%;
  color: #d5d0cf;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
}
.hero-word::before,
.hero-word::after {
  content: "";
  position: absolute;
  bottom: 6px;
  width: calc(50% - (8em / 2));
  height: 1px;
  background-color: #d5d0cf;
}
.hero-word::before {
  left: 0;
}
.hero-word::after {
  right: 0;
}
</style>