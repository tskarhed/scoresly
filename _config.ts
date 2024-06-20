import lume from "lume/mod.ts";
import blog from "blog/mod.ts";
import { musicXMLLoader } from "./musicXMLLoader.ts";

const site = lume({
  server: {
    port: 8080,
  },
});

site.copy("scoresly.css");
site.copy("assets/graphics/Cleff_Bass.svg");

site.loadPages([".musicxml", ".mxl"], musicXMLLoader);

site.use(blog());

export default site;
