import React from "react";
import rowStyles from "./Row.module.css"

class Row extends React.Component {
    componentDidMount () {
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
    }
    render () {
        function bgShow (event){
            event.target.parentElement.parentElement.style.backgroundImage = `url("${event.target.dataset.image}")`;
            Array.from(event.target.parentElement.parentElement.children).forEach(el => el.classList.add('transparent'));
            event.target.parentElement.classList.remove('transparent');
            event.target.parentElement.style.borderTop = '1px solid white';
        }
    
        function bgHide(event){
            event.target.parentElement.parentElement.style.backgroundImage = 'none';
            Array.from(event.target.parentElement.parentElement.children).forEach(el => el.classList.remove('transparent'));
        }
          
      return (
        <article
        onMouseEnter={bgShow}
        onMouseLeave={bgHide}>
            <a href={this.props.slug} className={rowStyles.menu__row} id={this.props.order} data-image={this.props.image}>
            <p className={`${rowStyles.menu__item} text`}>{this.props.discipline}</p>
            <h3 className={`${rowStyles.menu__item} title`}>{this.props.title}</h3>
            <p className={`${rowStyles.menu__item} text`}>{this.props.sector}</p>
            <p className={`${rowStyles.menu__item} text`}>{this.props.year}</p>
            </a>
        </article>
      )
    }
  }
  
  export default Row;