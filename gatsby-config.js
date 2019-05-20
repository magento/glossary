module.exports = {
  pathPrefix: '/glossary',
  siteMetadata: {
    title: 'Glossary',
    description: 'Magento Glossary Project'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-lunr`,
      options: {
        languages: [
          {
            // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
            name: 'en',
            // A function for filtering nodes. () => true by default
            filterNodes: node => true,
          },
        ],
        // Fields to index. If store === true value will be stored in index file.
        // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'content' },
          { name: 'synonyms' },
          { name: 'url', store: true },
        ],
        // How to resolve each field's value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            content: node => node.rawMarkdownBody,
            synonyms: node => node.frontmatter.synonyms.join(' '),
            url: node => node.fields.slug,
          },
        },
        //custom index file name, default is search_index.json
        filename: 'search_index.json',
      },
    },
  ],
}
