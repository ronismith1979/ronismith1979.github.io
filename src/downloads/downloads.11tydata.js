export default {
  tags: ["downloads"],
  layout: "download-item.njk",
  eleventyComputed: {
    permalink: (data) => {
      if (!data.category) return false;
      if (data.draft && !(data.site && data.site.previewMode)) return false;
      return `/downloads/${data.category}/${data.page.fileSlug}/`;
    },
    // External link (GitHub Releases, Google Drive...) or a file in src/assets/downloads/
    dlUrl: (data) => data.url || (data.file ? `/assets/downloads/${data.file}` : ""),
    description: (data) =>
      data.summary || `${data.title}: free download by Roni Tresnawan (Smith1979).`,
  },
};
