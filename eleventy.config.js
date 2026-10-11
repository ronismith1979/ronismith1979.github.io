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

  // Sounds: music projects, collaborations, writing, scene. Newest year first.
  eleventyConfig.addCollection("sounds", (api) =>
    api
      .getFilteredByTag("sounds")
      .filter((p) => !p.data.draft || (p.data.site && p.data.site.previewMode))
      .sort((a, b) => {
        const ya = Number(a.data.year) || 0;
        const yb = Number(b.data.year) || 0;
        if (yb !== ya) return yb - ya;
        return String(a.data.title).localeCompare(String(b.data.title));
      })
  );

  // Downloads (free) and Ready-Made (products): drafts only visible in preview mode.
  const makeCollection = (tag) => (api) =>
    api
      .getFilteredByTag(tag)
      .filter((p) => !p.data.draft || (p.data.site && p.data.site.previewMode))
      .sort((a, b) => {
        const ya = Number(a.data.year) || 0;
        const yb = Number(b.data.year) || 0;
        if (yb !== ya) return yb - ya;
        return String(a.data.title).localeCompare(String(b.data.title));
      });
  eleventyConfig.addCollection("downloads", makeCollection("downloads"));
  eleventyConfig.addCollection("readymade", makeCollection("readymade"));

  eleventyConfig.addFilter("published", (items) =>
    (items || []).filter((p) => !p.data.draft)
  );
  eleventyConfig.addFilter("sectionBySlug", (sections, slug) =>
    sections.find((x) => x.slug === slug) || {}
  );
  eleventyConfig.addFilter("sameCategory", (items, current, n = 3) =>
    items
      .filter((p) => p.data.category === current.category && p.url !== current.page.url)
      .slice(0, n)
  );
  eleventyConfig.addFilter("byType", (items, type) =>
    items.filter((p) => p.data.type === type)
  );
  eleventyConfig.addFilter("sectionFor", (sections, type) =>
    sections.find((x) => x.type === type) || {}
  );
  // Sort by optional "order" (manual), then by year ("asc" = oldest first, "desc" = newest first).
  // Items without a year go last.
  const sortYear = (items, dir = "desc") => {
    const m = dir === "asc" ? 1 : -1;
    return [...items].sort((a, b) => {
      const oa = a.data.order, ob = b.data.order;
      if (oa !== undefined && ob !== undefined && Number(oa) !== Number(ob)) return Number(oa) - Number(ob);
      const ya = Number(a.data.year) || 0, yb = Number(b.data.year) || 0;
      if (ya && yb && ya !== yb) return (ya - yb) * m;
      if (ya && !yb) return -1;
      if (!ya && yb) return 1;
      return String(a.data.title).localeCompare(String(b.data.title));
    });
  };
  eleventyConfig.addFilter("sortYear", sortYear);
  eleventyConfig.addFilter("siblings", (items, current, n = 3, dir = "desc") =>
    sortYear(
      items.filter((p) => p.data.type === current.type && p.url !== current.page.url),
      dir
    ).slice(0, n)
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
