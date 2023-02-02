"use strict";
import { createApp } from "vue";
// import { URL } from "global";
import "./style.css";
import App from "./App.vue";
import sectionWrapper from "./components/SectionWrapper.vue";
import container from "./components/Functional Components/Container";
import wrapper from "./components/Functional Components/contentWrapper";
import flexbox from "./components/Functional Components/flex";
// import grid from "./components/Functional Components/grid";
import btn from "./components/Functional Components/Button";
import Grid from "./components/Grid.vue";
import Card from "./components/Card.vue";
const app = createApp(App);
app.component("sectionWrapper", sectionWrapper);
app.component("container", container);
app.component("wrapper", wrapper);
app.component("card", Card);
app.component("flexbox", flexbox);
app.component("grid", Grid);
app.component("btn", btn);

// app.config.globalProperties.$imageUrl = function (path) {
//   const currentScript = document.currentScript;
//   return new URL(path, currentScript ? currentScript.src : "").href;
// };
app.mount("#app");
