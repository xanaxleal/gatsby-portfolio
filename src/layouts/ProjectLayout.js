import React from "react";
import {graphql} from "gatsby";
import Header from "../components/Header";
import SEO from "../components/SEO";
import Info from "../components/Info";
import Slider from "../components/Slider";

export default ({data}) => {
    const project = data.markdownRemark;
    const projectInfo = project.frontmatter;
    const projectImgs = data.allFile.nodes;
    console.log(projectImgs);

    return (
      <div>
        <SEO 
            title={`${projectInfo.title} a ${projectInfo.discipline} project by Ana Leal`}
            description={project.excerpt}
            image={`${project.fields.slug.replace('/','')}-0.jpg`}
            keywords={projectInfo.discipline}
        />
        <Header />
        <Info 
            title={projectInfo.title}
            discipline={projectInfo.discipline}
            sector={projectInfo.sector}
            year={projectInfo.year}
            isCollaboration={projectInfo.isCollaboration}
            collaborator={projectInfo.collaborator}
            collaboratorUrl={projectInfo.collaboratorUrl}
            isAwarded={projectInfo.isAwarded}
            award={projectInfo.award}
            awardUrl={projectInfo.awardUrl}
            content={project.html}
        />
        <Slider 
            slug={project.fields.slug}
            title={projectInfo.title}
        >
          {projectImgs.map((node, index) => (
            <div className="slide">
              <img src={projectImgs[index].publicURL} alt={projectImgs[index].name}></img>
            </div>
          ))}
        </Slider>
      </div>
    )
  }

export const query = graphql `
query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}){
        html
        frontmatter {
            award
            awardUrl
            collaborator
            collaboratorUrl
            discipline
            isAwarded
            isCollaboration
            order
            sector
            title
            year
        }
        excerpt(format: PLAIN),
        fields {
            slug
          }
    }
    allFile(filter: {absolutePath: {regex: "/img/"}, relativePath: {regex: $slug}}) {
      nodes {
        ext
        relativePath
        name
        base
        publicURL
      }
    }
}
`

