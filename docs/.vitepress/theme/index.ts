import "./css/custom.css";
import DefaultTheme from "vitepress/theme";
import ArticleCard from "./components/ArticleCard.vue";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component("ArticleCard", ArticleCard);
  },
};
