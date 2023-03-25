import { defineUserConfig } from "vuepress";
//import { searchPlugin } from '@vuepress/plugin-search'
//import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
import umlPlugin from 'markdown-it-plantuml';

const __dirname = getDirname(import.meta.url)

import theme from "./theme.js";

export default defineUserConfig({

  base : "blog-material-aula",
    
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  lang: "pt-BR",
  title: "Blog Aulas",
  description: "Material de aulas",

  extendsMarkdown: (md) => {    
    md.use(umlPlugin, {openMarker: '```plantuml', closeMarker: '```'})
  },


  theme,

  //plugins: [
  //  searchPlugin({}),
  //  registerComponentsPlugin({
  //    componentsDir: path.resolve(__dirname, './components'),
  //  }),
  //],

  shouldPrefetch: false,

});
