<script setup>
import flexbox from "./Functional Components/flex";
import wrapper from "./Functional Components/Wrapper";
import sectionTitle from "./Functional Components/sectionTitle";
import navlist from "./Functional Components/navList";
import navlink from "./Functional Components/navLink";
import container from "./Functional Components/Container";
import Logo from "./Logo.vue";
import {
  footerListOne,
  footerListTwo,
  footerListThree,
} from "../store/footerListsData";
</script>

<template>
  <footer>
    <container>
      <flexbox alignItems="flex-start">
        <wrapper width="50%">
          <logo color="white" margin="0 0 12px" />
          <flexbox gap="24px">
            <object
              v-for="i in icons"
              type="image/svg+xml"
              :data="imageUrl(i)"
              width="24px"
              height="24px"
            ></object>
          </flexbox>
        </wrapper>

        <flexbox width="50%" gap="16px" alignItems="flex-start">
          <!-- <template v-for="lists in "> </template> -->
          <!-- Don't Repeat Your Code   -->
          <navlist flow="column" alignItems="flex-start">
            <sectionTitle fontSize="24px" color="white">Title</sectionTitle>
            <navlink v-for="link in footerListOne.links" color="white">
              {{ link }}</navlink
            >
          </navlist>
          <navlist flow="column" alignItems="flex-start">
            <sectionTitle fontSize="24px" color="white">Title</sectionTitle>
            <navlink v-for="link in footerListTwo.links" color="white">
              {{ link }}</navlink
            >
          </navlist>
          <navlist flow="column" alignItems="flex-start">
            <sectionTitle fontSize="24px" color="white">Title</sectionTitle>
            <navlink v-for="link in footerListThree.links" color="white">
              {{ link }}</navlink
            >
          </navlist>
        </flexbox>
      </flexbox>
    </container>
  </footer>
</template>

<style scoped>
footer {
  padding: 80px 0;
  border-top: 0.3px solid #474644;
  background: var(--font-primary-color);
}
footer .nav-list .nav-link {
  margin-bottom: 16px;
}

footer .nav-list .nav-link .title {
  margin-bottom: 30px !important;
  line-height: 32px !important;
}
</style>