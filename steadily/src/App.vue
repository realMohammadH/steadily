<script setup>
import { h, ref, defineProps, computed, defineAsyncComponent } from "vue";
import Logo from "./components/Logo.vue";
import flexbox from "./components/Functional Components/flex";
import grid from "./components/Functional Components/grid";
import wrapper from "./components/Functional Components/contentWrapper";
import imageWrapper from "./components/Functional Components/imageWrapper";
import sectionTitle from "./components/Functional Components/sectionTitle";
import MyForm from "./components/MyForm.vue";
import Slider from "./components/Slider.vue";
import sectionSubTitle from "./components/Functional Components/SectionSubTitle";
import anytext from "./components/Functional Components/AnyText";
import btn from "./components/Functional Components/Button";
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

const sliderImages = ref([
  "./assets/images/comp-1.png",
  "./assets/images/comp-2.png",
  "./assets/images/comp-3.png",
  "./assets/images/comp-4.png",
  "./assets/images/comp-5.png",
  "./assets/images/comp-6.png",
]);

const whoIsSectionImage = ref("./assets/images/who-is.png");

const TargetAudience = ref([
  "Legal liabilities",
  "Fire and water damage",
  "Financial protection against natural disasters",
  "Protection for your furnishings",
]);

const PropertiesCoveredImages = ref([
  { image: "./assets/images/pc-image-1.png", title: "Single-family" },
  { image: "./assets/images/pc-image-2.png", title: "Multi-family" },
  { image: "./assets/images/pc-image-3.png", title: "Vacant or restoration" },
  { image: "./assets/images/pc-image-4.png", title: "Apartment building" },
  { image: "./assets/images/pc-image-5.png", title: "Condo units" },
  { image: "./assets/images/pc-image-6.png", title: "Manufactured" },
]);
// My Functional Components

const mySection = (props, { slots }) => {
  return h(
    "section",
    {
      class: ["section", props.className],
      style: {
        padding: "64px 0",
        background: props.background,
      },
    },
    slots
  );
};
const container = (props, { slots }) => {
  return h(
    "div",
    {
      class: "container",
      style: {
        width: "1200px",
        margin: "0 auto",
      },
    },
    slots
  );
};
const navlist = (props, { slots }) => {
  return h(
    "ul",
    {
      class: ["nav-list", "flex"],
      style: {
        flexDirection: props.flow,
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        gap: props.gap,
      },
    },
    slots
  );
};
const navlink = (props, { slots }) => {
  return h(
    "a",
    {
      class: "nav-link",
      style: {
        display: "block",
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        color: props.color,
      },
    },
    slots
  );
};

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
            </navlist>
          </li>
        </navlist>
      </nav>
    </container>
  </header>
  <main>
    <mySection className="hero" background="var(--bg-secondary-color)">
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
                Get fast, affordable landlord insurance
              </sectionTitle>
              <MyForm></MyForm>
            </wrapper>
            <imageWrapper height="606px" width="600px">
              <img src="./assets/images/hero-image.png" alt="" />
            </imageWrapper>
          </flexbox>
          <container>
            <p class="hero-word">as seen on</p>
            <slider>
              <imageWrapper
                v-for="img in sliderImages"
                width="133px"
                height="104px"
              >
                <img :src="imageUrl(img)" alt="" />
              </imageWrapper>
            </slider>
          </container>
        </grid>
      </container>
    </mySection>
    <mySection>
      <wrapper width="768px" margin="0 auto">
        <sectionTitle textAlign="center"
          >Steadily is the best-rated landlord insurance company in America
        </sectionTitle>
      </wrapper>
      <slider> </slider>
    </mySection>
    <mySection class="Audience">
      <container>
        <flexbox justifyContent="space-between">
          <imageWrapper width="560px" height="560px">
            <img :src="imageUrl(whoIsSectionImage)" alt="" />
          </imageWrapper>
          <wrapper width="560px" height="560px" textAlign="start">
            <wrapper margin="0 0 43px 0">
              <sectionTitle textAlign="start"
                >Who is Steadily landlord insurance for?</sectionTitle
              >
              <section-sub-title>
                Landlord insurance (also known as rental insurance) is a policy
                for people who rent their homes to others. Landlord insurance is
                not required for a landlord, but insurance can bring many
                benefits:
              </section-sub-title>
            </wrapper>
            <navlist flow="column" alignItems="flex-start" gap="12px">
              <li v-for="t in TargetAudience">
                <anytext tag="p">{{ t }}</anytext>
              </li>
            </navlist>
            <btn> Get a quote </btn>
          </wrapper>
        </flexbox>
      </container>
    </mySection>
    <mySection background="var(--bg-secondary-color)">
      <container>
        <grid width="288px" gap="16px">
          <wrapper class="card" textAlign="start" width="288px" height="320px">
            <section-title margin="0 0 20px">
              Properties we cover
            </section-title>
            <section-sub-title margin="0 0 30px" fontSize="18px">
              We make it easy to get property insurance for whatever type of
              property you own.
            </section-sub-title>
            <anytext
              tag="p"
              color="var(--font-secondary-color)"
              fontSize="18px"
              fontWeight="600"
              >We also cover
              <anytext tag="span" color="var(--bg-tertiary-color)"
                >AirBNBs</anytext
              >,
              <anytext tag="span" color="var(--bg-tertiary-color)"
                >VRBOs</anytext
              >, and other rentals.</anytext
            >
          </wrapper>
          <wrapper
            v-for="i in PropertiesCoveredImages"
            class="card"
            width="288px"
            height="320px"
            background="white"
            radius="6px"
          >
            <imageWrapper>
              <img :src="imageUrl(i.image)" alt="" />
            </imageWrapper>
            <anytext
              tag="h3"
              fontSize="24px"
              color="#252523"
              fontWeight="500"
              fontFamily="--title-font-family"
              >{{ i.title }}</anytext
            >
          </wrapper>
          <wrapper
            class="card"
            radius="6px"
            width="288px"
            height="320px"
            padding="74px 24px"
            background="var(--bg-tertiary-color)"
            textAlign="start"
          >
            <anytext
              tag="h3"
              lineHeight="32px"
              fontSize="24px"
              fontWeight="500"
              color="white"
              :activeSecondFont="true"
              margin="0 0 16px"
            >
              Not sure if your home is insured?
            </anytext>
            <btn backgroundColor="white" color="var(--bg-tertiary-color)"
              >Contact us</btn
            >
          </wrapper>
        </grid>
      </container>
    </mySection>
    <mySection class="coverages">
      <container>
        <flexbox>
          <wrapper></wrapper>
          <wrapper>
            <grid width="288px">
              <wrapper class="card" width="288px" height="266px"> </wrapper>
            </grid>
          </wrapper>
        </flexbox>
      </container>
    </mySection>
  </main>
  <footer></footer>
</template>

<style scoped>
:is(.container, .flex, .grid, nav, .nav-list) {
  width: 100%;
  height: auto;
}
header {
  background: white;
  height: 80px;
}
header .container {
  width: 1432px !important;
}
.flex {
  display: flex;
  align-items: center;
}
.grid {
  display: grid;
}
.title {
  font-family: var(--title-font-family);
  font-size: 52px;
  font-weight: 500;
  line-height: 60px;
  letter-spacing: -1.6px;
  word-spacing: -1px;
  color: var(--font-primary-color);
  margin-bottom: 32px;
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
}
.hero-word::before,
.hero-word::after {
  content: "";
  position: absolute;
  bottom: 6px;
  /* transform: translateY(50%); */
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
.Audience .nav-list {
  margin-bottom: 32px;
}
.Audience .nav-list li {
  position: relative;
  width: 500px;
}
.Audience .nav-list li p {
  position: relative;
  width: 100%;
}
.Audience .nav-list li p::before {
  display: inline-block;
  content: "";
  position: absolute;
  left: -28px;
  margin-right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: url(./assets/images/checkmark.png) no-repeat center;
}
</style>
