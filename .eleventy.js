import { EleventyRenderPlugin } from "@11ty/eleventy";
import pluginWebc from "@11ty/eleventy-plugin-webc";
import markdownItReplaceLinks from "markdown-it-replace-link";
import markdownItWikilinks from "markdown-it-wikilinks";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles.css");
  eleventyConfig.addPassthroughCopy("./src/_files");

  // Convert obsidian links to html links.
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItReplaceLinks, {
      replaceLink: (link, env) => {
        const campaign = env.page.inputPath.split("/")[2];
        return `/${campaign}/${link.split(".md")[0]}/`;
      },
    });
  });

  // // Convert images in wikilinks style
  // eleventyConfig.amendLibrary('md', (mdLib) => {
  //   mdLib.use(
  //     markdownItWikilinks(),
  //   );
  // });

  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_components/**/*.webc",
  });

  return { dir: { input: "src", output: "_site" } };
}
