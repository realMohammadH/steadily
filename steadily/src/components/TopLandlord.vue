<script setup>
import sectionTitle from "./Functional Components/sectionTitle";
import sectionSubTitle from "./Functional Components/SectionSubTitle";
</script>

<template>
  <sectionWrapper>
    <wrapper width="768px" margin="0 auto 64px" textAlign="center">
      <sectionTitle>
        Steadily is the best-rated landlord insurance company in America
      </sectionTitle>
      <sectionSubTitle
        >Rated Excellent (4.8 stars out of 5) on TrustPilot</sectionSubTitle
      >
    </wrapper>
    <grid>
      <slider>
        <card v-for="c in 3" width="496px" height="228px"> </card>
      </slider>
      <slider></slider>
    </grid>
  </sectionWrapper>
</template>
    
<style scoped>
:deep(.card) {
  background-color: var(--bg-secondary-color);
  border-radius: 12px;
}
</style>
