import React from "react";
import rowStyles from "./Row.module.css"

const Row = (props) => (
    <article>
        <a href={props.slug} className={rowStyles.menu__row} id={props.order} data-img={props.slug + "-0"}>
        <p className={`${rowStyles.menu__item} text`}>{props.discipline}</p>
        <h3 className={`${rowStyles.menu__item} title`}>{props.title}</h3>
        <p className={`${rowStyles.menu__item} text`}>{props.sector}</p>
        <p className={`${rowStyles.menu__item} text`}>{props.year}</p>
        </a>

    </article>  
)

export default Row;