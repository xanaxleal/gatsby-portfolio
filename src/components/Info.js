import React from "react";
import infoStyles from "./Info.module.css"

const Info = (props) => (
    <nav className={infoStyles.project__information}>
      <h3 className="title">{props.title}</h3>
      <ul className="text">
        <li className="text">Discipline:  {props.discipline}</li>
        <li className="text">Client:  {props.sector}</li>
        <li className="text">Year:  {props.year}</li>
        {props.isCollaboration === "true" ? <li className="text">This project was made in collaboration with <a href={props.collaboratorUrl}>{props.collaborator}</a></li> : ""}
        {props.isAwarded === "true" ? <li className="text">Awards <a href={props.awardUrl}>{props.award}</a></li> : ""}
      </ul>
      <div className={`${infoStyles.project__details_description} text`} dangerouslySetInnerHTML={{__html: props.content}} />
    </nav>
)

export default Info;