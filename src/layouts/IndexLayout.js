import React from "react";
import { motion } from 'framer-motion'

import Header from "../components/Header";
import SEO from "../components/SEO";


const IndexLayout = (props) => (
    <motion.div className="home-container"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 3.2}}
    >
        <SEO />
        <Header 
            fromIndex = "true"
        />
        <main id="index-main">
            <nav className="navigation menu__row" id="1">
            <li className="menu__item text">Type</li>
            <li className="menu__item text">Client</li>
            <li className="menu__item text">Discipline</li>
            <li className="menu__item text">Year</li>
            </nav>
            {props.children}
        </main>
        <div id="container">
            <canvas id="canvas"></canvas>
        </div>
     </motion.div>
);

export default IndexLayout;

// function sortYear() {
//     let query = graphql `
//          {
//          allMarkdownRemark(sort: {fields: frontmatter___order}) {
//              nodes {
//              frontmatter {
//                  order
//                  sector
//                  title
//                  year
//                  discipline
//              }
//              fields {
//                  slug
//              }
//              }
//          }
//          }
//          `
//      }