import React from "react";
import rowStyles from "./Row.module.css"

const Row = (props) => {
    function bgShow (event){
        event.target.parentElement.parentElement.style.backgroundImage = `url("../img/${event.target.dataset.image}")`;
        Array.from(event.target.parentElement.parentElement.children).forEach(el => el.classList.add('transparent'));
        event.target.parentElement.classList.remove('transparent');
        event.target.parentElement.style.borderTop = '1px solid white';
    }
    function bgHide(event){
        event.target.parentElement.parentElement.style.backgroundImage = 'none';
        Array.from(event.target.parentElement.parentElement.children).forEach(el => el.classList.remove('transparent'));
        event.target.parentElement.style.borderTop = 'none';
    }
    let last_known_scroll_position = 0;
    let ticking = false;

    function handleScroll(scroll_pos) {
        document.querySelector('main').style.backgroundPositionY = (scroll_pos - document.querySelector('.header').offsetHeight) + "px";
    }

    window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
        handleScroll(last_known_scroll_position);
        ticking = false;
        });

        ticking = true;
    }
    });
    
    return <article
    onMouseEnter={bgShow}
    onMouseLeave={bgHide}>
        <a href={props.slug} className={rowStyles.menu__row} id={props.order} data-image={props.image}>
        <p className={`${rowStyles.menu__item} text`}>{props.discipline}</p>
        <h3 className={`${rowStyles.menu__item} title`}>{props.title}</h3>
        <p className={`${rowStyles.menu__item} text`}>{props.sector}</p>
        <p className={`${rowStyles.menu__item} text`}>{props.year}</p>
        </a>
    </article>  
}

export default Row;