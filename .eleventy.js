import markdownItReplaceLinks from "markdown-it-replace-link";

export default function (eleventyConfig) {
  // Convert obsidian links to html links.
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItReplaceLinks, {
      replaceLink: (link, env) => {
        const campaign = env.page.inputPath.split("/")[2];
        return `/${campaign}/${link.split(".md")[0]}/`;
      },
    });
  });

  return { dir: { input: "src", output: "_site" } };
}
