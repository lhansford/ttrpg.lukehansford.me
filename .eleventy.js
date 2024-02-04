import { EleventyRenderPlugin } from '@11ty/eleventy';
import pluginWebc from '@11ty/eleventy-plugin-webc';
import markdownItReplaceLinks from "markdown-it-replace-link";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles.css");

  // Convert obsidian links to html links.
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItReplaceLinks, {
      replaceLink: (link, env) => {
        const campaign = env.page.inputPath.split("/")[2];
        return `/${campaign}/${link.split(".md")[0]}/`;
      },
    });
  });

  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginWebc, { components: 'src/_components/**/*.webc' });

  return { dir: { input: "src", output: "_site" } };
}
