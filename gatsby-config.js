require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `AppGambit Blog`,
    siteTitleAlt: `AppGambit Blog`,
    siteHeadline: `AppGambit Blog`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://blog.appgambit.com`,
    // Used for SEO
    siteDescription: `AWS Consulting Partner | Full-stack Web/Mobile, Serverless, Cloud Native Development and Consulting Agency.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.png`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
        ],
        externalLinks: [
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/company/appgambit/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AppGambit Blog`,
        short_name: `appgambit-blog`,
        description: `AWS Consulting Partner | Full-stack Web/Mobile, Serverless, Cloud Native Development and Consulting Agency.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
