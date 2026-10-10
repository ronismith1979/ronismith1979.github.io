export default function (eleventyConfig) {
  // Copy images, css, etc. as-is
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // All published projects, newest year first.
  // Drafts are included only while site.previewMode is true.
  eleventyConfig.addCollection("work", (api) =>
    api
      .getFilteredByTag("projects")
      .filter((p) => !p.data.draft || (p.data.site && p.data.site.previewMode))
      .sort((a, b) => {
        const ya = Number(a.data.year) || 0;
        const yb = Number(b.data.year) || 0;
        if (yb !== ya) return yb - ya;
        return String(a.data.title).localeCompare(String(b.data.title));
      })
  );

  eleventyConfig.addFilter("byCategory", (items, slug) =>
    items.filter((p) => p.data.category === slug)
  );
  eleventyConfig.addFilter("featured", (items) =>
    items.filter((p) => p.data.featured)
  );
  eleventyConfig.addFilter("related", (items, current, n = 3) =>
    items
      .filter((p) => p.data.category === current.category && p.url !== current.page.url)
      .slice(0, n)
  );
  eleventyConfig.addFilter("limit", (items, n) => items.slice(0, n));
  eleventyConfig.addFilter("count", (items) => items.length);
  eleventyConfig.addFilter("catName", (slug, cats) => {
    const c = cats.find((x) => x.slug === slug);
    return c ? c.name : slug;
  });
  // "mahkopi/cover.jpg" -> "/assets/img/projects/mahkopi/cover.jpg"
  eleventyConfig.addFilter("img", (path) => {
    if (!path) return "/assets/img/placeholder.svg";
    if (/^(https?:)?\/\//.test(path) || path.startsWith("/")) return path;
    return `/assets/img/projects/${path}`;
  });
  eleventyConfig.addFilter("startsWith", (str, prefix) => String(str).startsWith(prefix));
  eleventyConfig.addFilter("pluck", (items, key) => items.map((i) => i[key]));
  eleventyConfig.addFilter("absUrl", (path, base) => `${base}${path}`);

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
