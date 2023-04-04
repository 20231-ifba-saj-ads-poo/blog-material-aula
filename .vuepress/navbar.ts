import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Publicações",
    icon: "edit",
    link: "/article/",
  },
  {
    text: "Categoria",
    icon: "categoryselected",
    link: "/category/",
  },
  {
    text: "Tag",
    icon: "tag",
    link: "/tag/",
  },
  {
    text: "Exercícios",
    icon: "study",
    link: "/category/exercicio/",
  },
  {
    text: "Timeline",
    icon: "time",
    link: "/timeline/",
  },
]);
