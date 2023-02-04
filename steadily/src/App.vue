<script setup>
import { ref } from "vue";
import Logo from "./components/Logo.vue";
import wrapper from "./components/Functional Components/Wrapper";
import imageWrapper from "./components/Functional Components/imageWrapper";
import sectionTitle from "./components/Functional Components/sectionTitle";
import sectionSubTitle from "./components/Functional Components/SectionSubTitle";
import anytext from "./components/Functional Components/AnyText";
import btn from "./components/Functional Components/Button";
import navlink from "./components/Functional Components/navLink";
import Properties from "./components/Properties.vue";
import Footer from "./components/Footer.vue";
import coverages from "./components/Coverages.vue";
import TopLandlord from "./components/TopLandlord.vue";
import Audience from "./components/Audience.vue";
import Hero from "./components/Hero.vue";
// My Data
const navBarLinks = ref([
  {
    title: "Learn",
    link: "#",
  },
  {
    title: "Support",
    link: "#",
  },
  {
    title: "Agents",
    link: "#",
  },
  {
    title: "Login",
    link: "#",
  },
]);

const nationalLocalImage = ref("./assets/images/national-local-img.png");

// My Functional Components

//My Methods
function imageUrl(path) {
  return new URL(path, import.meta.url).href;
}

// structure
</script>

<template>
  <header>
    <container>
      <nav>
        <navlist justifyContent="space-between">
          <logo></logo>
          <li>
            <navlist class="flex" gap="30px">
              <li v-for="i in navBarLinks">
                <navlink :href="i.link" color="var(--font-primary-color)">{{
                  i.title
                }}</navlink>
              </li>
              <li>
                <navlist gap="24px">
                  <anytext
                    tag="a"
                    href="tel:888966-1611"
                    color="var(--bg-tertiary-color)"
                    >(888) 966-1611</anytext
                  >
                  <btn>Get a quote</btn>
                </navlist>
              </li>
            </navlist>
          </li>
        </navlist>
      </nav>
    </container>
  </header>
  <main>
    <hero></hero>
    <TopLandlord></TopLandlord>
    <audience></audience>
    <properties></properties>
    <coverages></coverages>
    <sectionWrapper class="national-local">
      <container height="848px">
        <wrapper class="content" width="480px" textAlign="start">
          <section-title>We're national & local</section-title>
          <section-sub-title>
            Steadily offers affordable landlord insurance across all 50 states.
            Our team of knowledgeable sales agents across the country are
            experts at finding the right coverage for your needs. From one local
            property to a portfolio across various states, we have you covered.
          </section-sub-title>
        </wrapper>
        <imageWrapper width="100%" height="638px">
          <img :src="imageUrl(nationalLocalImage)" alt="" />
        </imageWrapper>
      </container>
    </sectionWrapper>
    <sectionWrapper class="get-coverage" background="var(--font-primary-color)">
      <container>
        <wrapper textAlign="center">
          <section-title color="white" fontSize="72px">
            Get coverage in minutes
          </section-title>
          <section-sub-title margin="0 0 42px">
            No hidden cancellation fees. Competitive rates nationwide.
          </section-sub-title>
          <my-form margin="auto" label-color="white"></my-form>
        </wrapper>
      </container>
    </sectionWrapper>
  </main>
  <Footer></Footer>
</template>

<style scoped>
header {
  background: white;
  height: 80px;
}
header .container {
  width: 1432px !important;
  height: 100%;
}
header nav {
  height: 100%;
}
header :deep(.nav-list) {
  height: 100%;
}
.national-local .content {
  position: relative;
  z-index: 2;
}
.national-local .image-wrapper {
  position: absolute;
  bottom: 0;
  margin-bottom: 50px;
}
</style>
