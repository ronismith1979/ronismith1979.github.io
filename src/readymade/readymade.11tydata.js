export default {
  tags: ["readymade"],
  layout: "readymade-item.njk",
  eleventyComputed: {
    permalink: (data) => {
      if (!data.category) return false;
      if (data.draft && !(data.site && data.site.previewMode)) return false;
      return `/ready-made/${data.category}/${data.page.fileSlug}/`;
    },
    description: (data) =>
      data.summary || `${data.title}: ready-made pack by Roni Tresnawan (Smith1979).`,
  },
};
