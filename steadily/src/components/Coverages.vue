<script setup>
import { ref } from "vue";
import sectionTitle from "./Functional Components/sectionTitle";
import sectionSubTitle from "./Functional Components/SectionSubTitle";
import anytext from "./Functional Components/AnyText";
import imageWrapper from "./Functional Components/imageWrapper";

import { coveragesCards } from "../store/cardsData";

function imageUrl(path) {
  return new URL(path, import.meta.url).href;
}
</script>

<template>
  <sectionWrapper>
    <container>
      <flexbox alignItems="flex-start">
        <wrapper width="50%">
          <wrapper textAlign="start" padding="0 224px 0 0">
            <section-title> Our coverage's </section-title>
            <section-sub-title margin="0 0 32px"
              >Your insurance policy can cover a wide range of risks, or you can
              choose a limited set of coverages for a lower
              premium.</section-sub-title
            >
            <btn>Get a quote</btn>
          </wrapper>
        </wrapper>
        <wrapper width="50%">
          <grid gridCardsWidth="288px" gap="48px 16px">
            <wrapper
              class="card"
              v-for="c in coveragesCards"
              width="288px"
              height="auto"
              textAlign="start"
            >
              <imageWrapper width="88px" height="88px" margin="0 0 13px">
                <img :src="imageUrl(c.image)" alt="" />
              </imageWrapper>
              <anytext
                tag="h3"
                fontSize="24px"
                fontWeight="500"
                :activeSecondFont="true"
              >
                {{ c.title }}
              </anytext>
              <section-sub-title>
                {{ c.description }}
              </section-sub-title>
            </wrapper>
          </grid>
        </wrapper>
      </flexbox>
    </container>
  </sectionWrapper>
</template>

<style scoped>
</style>