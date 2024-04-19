<template>
  <main-menu></main-menu>
  <div>
    <left-side-components-menu></left-side-components-menu>
    <about-me-info></about-me-info>
  </div>
</template>

<script>
import MainMenu from "./components/MainMenu.vue";
import LeftSideComponentsMenu from "./components/LeftSideComponentsMenu.vue";
import AboutMeInfo from "./components/AboutMeInfo.vue";



export default {
  name: "App",
  components: {MainMenu, LeftSideComponentsMenu, AboutMeInfo},
  data() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
  outline: none;
  font-family: "Jura", sans-serif;
  background-color: black;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
