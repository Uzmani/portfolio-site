module.exports = {
  siteMetadata: {
    description: "Personal page of Usman Chaudhary",
    locale: "en",
    title: "Usman Chaudhary | Web dev",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "dark-blue",
      },
    },
  ],
}
