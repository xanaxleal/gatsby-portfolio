import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import {Helmet} from 'react-helmet';

const SEO = ({title, description, keywords, image}) => {
    return <StaticQuery
    query={query}
    render={({
        site: {
            siteMetadata: {
                defaultTitle,
                defaultDescription,
                defaultImage,
                url,
                defaultKeywords
            }
        }
    }) => {
        const seo = {
            title: title || defaultTitle,
            description: description || defaultDescription,
            image: `${image ? image: url + defaultImage}`,
            keywords: keywords || defaultKeywords
        }
        return (
            <Helmet>
                <title>{seo.title}</title>
                <meta name="image"  content={seo.image} />
                <meta name="description" content={seo.description} />
                <meta name="keywords" content={seo.keywords} />
                <meta name="robots" content="index,follow" />
                <html lang="en" />
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            </Helmet>
        )
    }}
    />
}

export default SEO;

const query = graphql`
{
    site {
      siteMetadata {
        defaultDescription: description
        defaultImage: image
        defaultKeywords: keywords
        defaultTitle: title
        url
      }
    }
  }  
`