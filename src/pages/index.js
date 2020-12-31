import React from "react"
import {graphql} from "gatsby"
import IndexLayout from "../layouts/IndexLayout";
import Row from "../components/Row";

export default ({data}) => {
  console.log(data);
  return (
    <IndexLayout>
      {data.allMarkdownRemark.nodes.map((node) => (
        <Row 
        title={node.frontmatter.title} 
        order={node.frontmatter.order} 
        sector={node.frontmatter.sector} 
        discipline={node.frontmatter.discipline} 
        year={node.frontmatter.year} 
        slug={node.fields.slug}>
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
}
`