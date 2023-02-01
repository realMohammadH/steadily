"use strict";
import { ref } from "vue";
const footerListOne = ref({
  title: "Resources",
  links: [
    "Coverages",
    "Blog",
    "Glossary",
    "Landlord insurance FAQs",
    "API + Integrations",
  ],
});

const footerListTwo = ref({
  title: "Company",
  links: [
    "Careers",
    "Licenses",
    "Partner program",
    "Brand ambassadors",
    "Agents",
    "Press room",
  ],
});

const footerListThree = ref({
  title: "Contact",
  links: ["Log in", "Submit a claim", "Contact us", "1 (888) 966-1611"],
});

export { footerListOne, footerListTwo, footerListThree};
