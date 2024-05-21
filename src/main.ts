import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseModal from "./components/ui/BaseModal.vue";
import BaseTag from "./components/ui/BaseTag.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-tag", BaseTag);
app.component("base-modal", BaseModal);

app.use(router);
app.mount("#app");
