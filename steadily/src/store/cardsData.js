"use strict";
import { ref } from "vue";
const coveragesCards = ref([
  {
    image: "./assets/images/coverages-img-1.png",
    title: "Fire",
    description: `Because of modern safety codes, fires have become rarer,
    but the fires that do start tend to cause total destruction of the property.`,
  },
  {
    image: "./assets/images/coverages-img-2.png",
    title: "Water",
    description: `Broken pipes and appliance leaks are the most common and overall 
    the most expensive property damage for rental properties.`,
  },
  {
    image: "./assets/images/coverages-img-3.png",
    title: "Windstorm, hail, & lightning",
    description: `Roof damage from storms has become increasingly common as the intensity
    and frequency of storms have increased over the last two decades.`,
  },
  {
    image: "./assets/images/coverages-img-4.png",
    title: "Lawsuits",
    description: `Liability protection covers the cost of defending you and settling 
    claims from tenants and their guests for injuries sustained on your property.`,
  },
  {
    image: "./assets/images/coverages-img-5.png",
    title: "Riot and civil commotion",
    description: `When violent protests break out, riot coverage can pay to fix property
    damage caused by looters and protestors.`,
  },
  {
    image: "./assets/images/coverages-img-6.png",
    title: "Vandalism & theft",
    description: `Malicious mischief coverage, as it’s known, covers repairs to broken glass, 
    graffiti removal, and replacement of stolen or damaged property like shared washing machines.`,
  },
  {
    image: "./assets/images/coverages-img-7.png",
    title: "Injury",
    description: `Injury protection can keep you from getting stuck with the cost of 
    medical bills if a tenant or visitor gets injured on the property.`,
  },
  {
    image: "./assets/images/coverages-img-8.png",
    title: "Bonus coverages",
    description: `Many policies also include coverage for a long list of other perils
    such as riots or civil commotion, explosions, volcanic eruptions, and damage caused by vehicles.`,
  },
]);

const propertiesCoveredImages = ref([
  { image: "./assets/images/pc-image-1.png", title: "Single-family" },
  { image: "./assets/images/pc-image-2.png", title: "Multi-family" },
  { image: "./assets/images/pc-image-3.png", title: "Vacant or restoration" },
  { image: "./assets/images/pc-image-4.png", title: "Apartment building" },
  { image: "./assets/images/pc-image-5.png", title: "Condo units" },
  { image: "./assets/images/pc-image-6.png", title: "Manufactured" },
]);

export { coveragesCards, propertiesCoveredImages };
