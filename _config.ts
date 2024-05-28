import lume from "lume/mod.ts";
import blog from "blog/mod.ts";
import { musicXMLLoader } from "./musicXMLLoader.ts";

const site = lume({
  server: {
    port: 8080,
  },
});

site.loadPages([".musicxml", ".mxl"], musicXMLLoader);

site.use(blog());

export default site;
