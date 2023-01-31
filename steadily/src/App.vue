<script setup>
import { h, ref, defineProps, computed, defineAsyncComponent } from "vue";
import Logo from "./components/Logo.vue";
import flexbox from "./components/Functional Components/flex";
import grid from "./components/Functional Components/grid";
import box from "./components/Functional Components/contentWrapper";
import imageWrapper from "./components/Functional Components/imageWrapper";
import sectionTitle from "./components/Functional Components/sectionTitle";
import MyForm from "./components/MyForm.vue";
import Slider from "./components/Slider.vue";

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
const btn = (props, { slots }) => {
  return h(
    "h",
    {
      class: ["btn", props.className],
      style: {
        fontSize: "18px",
        color: "white",
        background: "var(--bg-tertiary-color)",
        borderRadius: "6px",
        padding: "12px 20px",
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
                <navlink :href="i.link" color="#222222">{{ i.title }}</navlink>
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
            <box width="600px">
              <sectionTitle
                fontSize="72px"
                textAlign="start"
                lineHeight="75px"
                letterSpacing="-1px"
              >
                Get fast, affordable landlord insurance
              </sectionTitle>
              <MyForm></MyForm>
            </box>
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
      <box width="768px" margin="0 auto">
        <sectionTitle textAlign="center"
          >Steadily is the best-rated landlord insurance company in America
        </sectionTitle>
      </box>
      <slider> </slider>
    </mySection>
    <mySection>
      <container>
        <flexbox justifyContent="space-between">
          <imageWrapper width="560px" height="560px">
            <img :src="imageUrl(whoIsSectionImage)" alt="" />
          </imageWrapper>
          <box width="560px" height="560px">
            <sectionTitle textAlign="start"
              >Who is Steadily landlord insurance for?</sectionTitle
            >
          </box>
        </flexbox>
      </container>
    </mySection>
  </main>
  <footer></footer>
</template>

<style scoped>
:is(.container, .flex, .grid, nav, .nav-list) {
  width: 100%;
  height: 100%;
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
</style>
