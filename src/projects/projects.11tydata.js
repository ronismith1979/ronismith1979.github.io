export default {
  tags: ["projects"],
  layout: "project.njk",
  eleventyComputed: {
    permalink: (data) =>
      data.draft ? false : `/work/${data.category}/${data.page.fileSlug}/`,
    // Auto SEO description if you didn't write a summary
    description: (data) =>
      data.summary ||
      [data.title, data.role && `(${data.role})`, data.client && `for ${data.client}`, "by Roni Tresnawan (Smith1979)."]
        .filter(Boolean)
        .join(" "),
  },
};
