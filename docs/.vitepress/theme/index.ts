import "./css/custom.css";
import DefaultTheme from "vitepress/theme";
import AktueltHome from "./components/AktueltHome.vue";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component("AktueltHome", AktueltHome);
  },
};
