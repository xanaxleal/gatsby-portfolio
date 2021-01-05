import React from "react"
import {graphql} from "gatsby"
import IndexLayout from "../layouts/IndexLayout";
import Row from "../components/Row";

export default ({data}) => {
  const imgs = [];
  data.allFile.edges.forEach((el) => imgs.push(el.node.publicURL))
  const imgsName = [];
  data.allFile.nodes.forEach((el) => imgsName.push(el.name))

  return (
    <IndexLayout>
      {data.allMarkdownRemark.nodes.map((node) => (
        <Row 
        title={node.frontmatter.title} 
        order={node.frontmatter.order} 
        sector={node.frontmatter.sector} 
        discipline={node.frontmatter.discipline} 
        year={node.frontmatter.year} 
        slug={node.fields.slug}
        image={imgs[imgsName.findIndex((el) => el === node.fields.slug.replace(/\//g,'')+"-0")]}
        >
        </Row>
      ))}
    </IndexLayout>
  )
}

export let query = graphql `
{
  allMarkdownRemark(sort: {fields: frontmatter___order}) {
    nodes {
      frontmatter {
        order
        sector
        title
        year
        discipline
      }
      fields {
        slug
      }
    }
  }
  allFile(filter: {base: {regex: "/-0./"}}) {
    nodes {
      base
      ext
      name
      publicURL
    }
    edges {
      node {
        base
        publicURL
      }
    }
  }
}
`