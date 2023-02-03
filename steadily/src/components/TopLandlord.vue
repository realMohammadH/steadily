<script setup>
import sectionTitle from "./Functional Components/sectionTitle";
import sectionSubTitle from "./Functional Components/SectionSubTitle";
import imageWrapper from "./Functional Components/imageWrapper";
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
    <grid gap="20px">
      <slider gridCardsWidth="496px" gap="20px" translateX="5px">
        <card v-for="c in 3" width="496px" height="228px" padding="24px">
          <flexbox class="person" alignItems="start" gap="8px">
            <imageWrapper width="48px" height="48px">
              <img src="" alt="" />
            </imageWrapper>
            <h4>Arnold Chambers</h4>
          </flexbox>
          <sectionSubTitle>
            The process of getting a landlord policy was very smooth. A few text
            messages, and the price was great, new policy saved us over $600!
          </sectionSubTitle>
        </card>
      </slider>
      <slider gridCardsWidth="496px" gap="20px" translateX="-20px">
        <card v-for="c in 4" width="496px" height="228px" padding="24px">
          <flexbox class="person" alignItems="start" gap="8px">
            <imageWrapper width="48px" height="48px">
              <img src="" alt="" />
            </imageWrapper>
            <h4>Arnold Chambers</h4>
          </flexbox>
          <sectionSubTitle>
            The process of getting a landlord policy was very smooth. A few text
            messages, and the price was great, new policy saved us over $600!
          </sectionSubTitle>
        </card>
      </slider>
    </grid>
  </sectionWrapper>
</template>
    
<style scoped>
.person {
  margin-bottom: 10px;
}
:deep(.card) {
  background-color: var(--bg-secondary-color);
  border-radius: 12px;
}
:deep(.image-wrapper) {
  border-radius: 50vw;
  overflow: hidden;
  background-color: var(--font-secondary-color);
}
</style>
