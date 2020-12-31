/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Ana Leal - Freelance Designer and Art Director - Portfolio",
    description: "I'm a freelance Art Director and Designer based in Madrid. Currently focused on digital experiences and brand narratives for cultural, fashion and luxury clients. I teach at IED Madrid and steadly collaborate with TILT in London.",
    keywords: "freelancer, graphic design portfolio, branding, coding, madrid",
    image: "/static/gatsby.jpg",
    siteUrl: "http://localhost:8000/",
    url: "https://www.leal.work/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ],
}
