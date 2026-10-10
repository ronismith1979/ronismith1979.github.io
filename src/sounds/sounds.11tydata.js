export default {
  tags: ["sounds"],
  layout: "sound-item.njk",
  eleventyComputed: {
    // Only "cards" sections (projects, collaborations) get their own page.
    permalink: (data) => {
      const sec = (data.sound.sections || []).find((x) => x.type === data.type);
      if (!sec || sec.layout !== "cards") return false;
      if (data.draft && !(data.site && data.site.previewMode)) return false;
      return `/sounds/${sec.slug}/${data.page.fileSlug}/`;
    },
    description: (data) =>
      data.summary || `${data.title}: music by Roni Tresnawan (Smith1979).`,
  },
};
