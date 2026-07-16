import { createApp } from "vue";
import { Icon } from "@iconify/vue";
import { createPinia } from "pinia";
import { reveal } from "./directives/reveal";
import { tilt } from "./directives/tilt";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.component("Icon", Icon);
app.directive("reveal", reveal);
app.directive("tilt", tilt);
app.mount("#app");
