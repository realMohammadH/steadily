<script setup>
import sectionTitle from "./Functional Components/sectionTitle";
import sectionSubTitle from "./Functional Components/SectionSubTitle";
import anytext from "./Functional Components/AnyText";
import imageWrapper from "./Functional Components/imageWrapper";
import { propertiesCards } from "../store/cardsData";
// import imageUrl from "./Composables/renderImages";

function imageUrl(path) {
  return new URL(path, import.meta.url).href;
}
</script>

<template>
  <sectionWrapper class="properties">
    <container>
      <grid gridCardsWidth="288px" gap="16px">
        <card textAlign="start" padding="0" width="288px" height="320px">
          <section-title margin="0 0 20px"> Properties we cover </section-title>
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
            <anytext tag="span" color="var(--bg-tertiary-color)">VRBOs</anytext
            >, and other rentals.</anytext
          >
        </card>
        <card
          v-for="i in propertiesCards"
          class="card"
          width="288px"
          height="320px"
          padding="24px"
          background="white"
          radius="6px"
          textAlign="center"
        >
          <imageWrapper width="240px" height="230px" margin="auto">
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
        </card>
        <card
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
        </card>
      </grid>
    </container>
  </sectionWrapper>
</template>
    
<style scoped>
.properties {
  background-color: var(--bg-secondary-color);
}
</style>