import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import "./style/main.scss";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "animate.css";

createApp(App).use(store).mount("#app");
