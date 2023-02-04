<script setup>
import { ref } from "vue";
import Divider from "./Divider.vue";
import anytext from "./Functional Components/AnyText";
const whoIsSectionImage = ref("../assets/images/who-is.png");

const TargetAudience = ref([
  "Legal liabilities",
  "Fire and water damage",
  "Financial protection against natural disasters",
  "Protection for your furnishings",
]);

function imageUrl(path) {
  return new URL(path, import.meta.url).href;
}
</script>

<template>
  <sectionWrapper class="Audience">
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
    <divider></divider>
  </sectionWrapper>
</template>

<style scoped>
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
  background: url(../assets/images/checkmark.png) no-repeat center;
}
:deep(.divider) {
  transform: rotateX(180deg);
}
</style>