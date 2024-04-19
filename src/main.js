import { createApp } from "vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
  components,
  directives,
});
import App from "./App.vue";
import MainMenu from "./components/MainMenu.vue";
import AboutMeInfo from "./components/AboutMeInfo.vue";
import LeftSideComponentsMenu from "./components/LeftSideComponentsMenu.vue";
import AboutWebSite from "./components/AboutWebSite.vue";

const app = createApp(App);

app.component("main-menu", MainMenu);
app.component("about-me-info", AboutMeInfo);
app.component("left-side-components-menu", LeftSideComponentsMenu);
app.component("about-web-site", AboutWebSite);

app.use(vuetify);
app.mount("#app");
