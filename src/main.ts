import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import BaseButton from "./components/ui/BaseButton.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '@fortawesome/fontawesome-free/css/all.css';
import BaseTagVue from "./components/ui/BaseTag.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-tag", BaseTagVue);

app.use(router);
app.mount("#app");
