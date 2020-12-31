import React from "react";
import { graphql, StaticQuery } from 'gatsby';
import sliderStyles from "./Slider.module.css";
import mainImg from "../img/absolut-manifesto-0.jpg"

const Slider = (props) => (
    <div className={sliderStyles.outer_wrapper}>
        <main className={sliderStyles.wrapper}>
            {props.children}
        </main>
    </div>
)

export default Slider;

// export default function Slider (props) {
//     console.log(props);
//     return <StaticQuery 
//         query={query}
//         render={(data) => {
//             console.log(data);
//             <div className={sliderStyles.outer_wrapper}>
//             <main className={sliderStyles.wrapper}>
//                 <div className={sliderStyles.slide} id={props.slug}>
//                     <img src={mainImg} alt={props.title}></img>
//                 </div>
//             </main>
//             </div>
//         }}
//     />
// }

// export const query = graphql `
// query($slug: String!) {
//     allFile(filter: {
//         relativePath: {regex:"/img/"}
//         absolutePath: {regex: $slug}
//   }){
//     nodes {
//         relativePath
//         base
//         name
//         ext
//       }
//     }
// }
// `
