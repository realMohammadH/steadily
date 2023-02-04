"use strict";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import sectionWrapper from "./components/SectionWrapper.vue";
import container from "./components/Functional Components/Container";
import wrapper from "./components/Functional Components/Wrapper";
import flexbox from "./components/Functional Components/flex";
import btn from "./components/Functional Components/Button";
import Grid from "./components/Grid.vue";
import Card from "./components/Card.vue";
import Slider from "./components/Slider.vue";
import navlist from "./components/Functional Components/navList";
import sectionTitle from "./components/Functional Components/sectionTitle";
import sectionSubTitle from "./components/Functional Components/SectionSubTitle";
import MyForm from "./components/MyForm.vue";
const app = createApp(App);
app.component("sectionWrapper", sectionWrapper);
app.component("container", container);
app.component("wrapper", wrapper);
app.component("card", Card);
app.component("flexbox", flexbox);
app.component("grid", Grid);
app.component("btn", btn);
app.component("slider", Slider);
app.component("navlist", navlist);
app.component("sectionTitle", sectionTitle);
app.component("sectionSubtitle", sectionSubTitle);
app.component("my-form", MyForm);

// app.config.globalProperties.imageUrl = function (path) {
//   return new URL(path, import.meta.url).href;
// };

app.mount("#app");
