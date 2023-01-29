<script setup>
import { h, ref, defineProps, computed } from "vue";
import Logo from "./components/Logo.vue";
import flexbox from "./components/Functional Components/flex";
import box from "./components/Functional Components/contentWrapper";
import imageWrapper from "./components/Functional Components/imageWrapper";
import sectionTitle from "./components/Functional Components/sectionTitle";
import MyForm from "./components/MyForm.vue";
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

/*
const logo = (props) => {
  return h(
    "span",
    {
      class: "logo",
      style: {
        display: "block",
        color: props.color,
        width: props.width,
        height: props.height,
      },
    },
    [
      h(
        "svg",
        {
          attrs: {
            fill: props.color,
          },
        },
        [

        ]
      ),
    ]
  );
};
*/
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
        <flexbox>
          <box width="600px">
            <sectionTitle fontSize="72px" textAlign="start">
              Get fast, affordable landlord insurance
            </sectionTitle>
            <MyForm></MyForm>
          </box>
          <imageWrapper height="606px" width="600px">
            <img src="./assets/images/hero-image.png" alt="" />
          </imageWrapper>
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
  width: 100%;
  height: 100%;
}
.grid {
  display: grid;
}
.title {
  font-family: var(--title-font-family);
  font-weight: 500;
  line-height: 78px;
  letter-spacing: -1px;
  word-spacing: -1px;
  color: var(--font-primary-color);
  margin-bottom: 32px;
}
</style>
