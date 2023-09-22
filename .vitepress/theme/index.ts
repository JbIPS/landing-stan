// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue";
import Home from "./Home.vue";
import APropos from "./APropos.vue";
import Offre from "./Offre.vue";
import "./style.css";

export default {
  Layout,
  enhanceApp({ app }) {
    app.component("home", Home);
    app.component("apropos", APropos);
    app.component("offre", Offre);
  },
};
