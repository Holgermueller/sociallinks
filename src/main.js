import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import "vuetify/styles";
import { createVuetify } from "vuetify/lib/framework.mjs";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faDeviantart,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUpRightFromSquare,
  faTwitter,
  faDeviantart,
  faGithub,
  faInstagram
);

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(vuetify)
  .mount("#app");
