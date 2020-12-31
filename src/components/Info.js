import React from "react";
import infoStyles from "./Info.module.css"

const Info = (props) => (
    <nav className={infoStyles.project__information}>
      <h3 className={infoStyles.menu__item}>{props.title}</h3>
      <ul className={infoStyles.project__details}>
        <li className={infoStyles.project__details_discipline}>Discipline:  {props.discipline}</li>
        <li className={infoStyles.project__details_sector}>Client:  {props.sector}</li>
        <li className={infoStyles.project__details_year}>Year:  {props.year}</li>
        {props.isCollaboration === "true" ? <li className={infoStyles.project__details_collaboration}>This project was made in collaboration with <a href={props.collaboratorUrl}>{props.collaborator}</a></li> : ""}
        {props.isAwarded === "true" ? <li className={infoStyles.project__details_awarded}>Awards <a href={props.awardUrl}>{props.award}</a></li> : ""}
      </ul>
      <div className={infoStyles.project__details_description} dangerouslySetInnerHTML={{__html: props.content}} />
    </nav>
)

export default Info;