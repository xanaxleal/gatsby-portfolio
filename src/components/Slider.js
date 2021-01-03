import React from "react";
import sliderStyles from "./Slider.module.css";
// import mainImg from "../img/absolut-manifesto-0.jpg"

const Slider = (props) => (
    <div className={sliderStyles.outer_wrapper}>
        <main className={sliderStyles.wrapper}>
            {props.children}
        </main>
    </div>
)

export default Slider;