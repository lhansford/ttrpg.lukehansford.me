import { EleventyRenderPlugin } from "@11ty/eleventy";
import pluginWebc from "@11ty/eleventy-plugin-webc";
import markdownItReplaceLinks from "markdown-it-replace-link";
import { CAMPAIGNS } from "./campaigns.mjs";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles.css");
  CAMPAIGNS.forEach((campaign) => {
    eleventyConfig.addPassthroughCopy(`./src/${campaign}/_files`);
  });

  // Convert obsidian links to html links.
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItReplaceLinks, {
      replaceLink: (link, env) => {
        const campaign = env.page.inputPath.split("/")[2];
        if (link.endsWith(".md")) {
          return `/${campaign}/${link.split(".md")[0]}/`;
        } else {
          return `/${campaign}/${link}`;
        }
      },
    });
  });

  // Convert image sizes
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use((md) => {
      const defaultRender = md.renderer.rules.image;

      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const [alt, size] = token.content.split("|");
        const [width, height] = size.split("x").map((s) => s.trim());

        tokens[idx].attrSet("width", width);
        if (height) {
          tokens[idx].attrSet("height", height);
        }

        tokens[idx].children = [{ type: 'text', content: alt }];
        return defaultRender(tokens, idx, options, env, self);
      };
    });
  });

  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_components/**/*.webc",
  });

  return { dir: { input: "src", output: "_site" } };
}
