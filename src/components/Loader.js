import React, {useRef} from "react";
import { motion } from "framer-motion"

import loaderStyles from "./Loader.module.css";

// const bgVariants = {
//     hidden: {opacity: 0},
//     visible: {
//       opacity: 1,
//       transition: { duration: 1 }
//     }
// }

const Loader = () => {
    const constraintsRef = useRef(null)
    return(
    <motion.div 
        initial={{y:0}}
        animate={{y:'-100vh'}}
        transition= {{ delay:2.6,  type: "spring", stiffness: 40, ease: 'easeIn'  }}
        ref={constraintsRef} 
        className={loaderStyles.background}
    >
        <svg className={loaderStyles.logo}  id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 714.32 610.53">
            <motion.path 
            initial={{opacity: 0, rotate: 270, y:'-100vh'}}
            animate={{opacity: 1, rotate:0, y:0}}
            transition= {{ delay:0.4, type: "spring", stiffness: 40, ease: 'easeIn'  }}
             d="M101.41,0h59.9L262.72,278.78H197.34l-19.58-57.56H83c-6.66,18.4-13.71,39.55-20,57.56H0Zm59.12,168.36c-9.79-31.71-20.36-59.12-30.54-88.49-10.57,29.37-19.58,59.91-29.76,88.49Z"/>
            <motion.path 
            initial={{opacity: 0, rotate: -360, y:'-100vh'}}
            animate={{opacity: 1, rotate:0, y:0}}
            transition= {{ delay:0.6, type: "spring", stiffness: 40, ease: 'easeIn'  }}
            // drag dragConstraints={constraintsRef} dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} whileTap={{ cursor: "grabbing" }}
             d="M293.08,72.83H333l11.75,23.88c14.87-20,37.19-29.37,59.9-29.37,46.59,0,70.87,27.8,70.87,76V278.78H417.2V152.31c0-23.1-8.22-32.89-27-32.89-27.8,0-39.15,28.19-39.15,55.6V278.78H293.08Z"/>
            <motion.path  
            initial={{opacity: 0, rotate: -270, y:'-100vh'}}
            animate={{opacity: 1, rotate:0, y:0}}
            transition= {{ delay:0.4, type: "spring", stiffness: 40, ease: 'easeIn'  }}
             d="M654.69,278.78,648,258.42a83.68,83.68,0,0,1-59.91,25.45c-44.24,0-73.21-25.06-73.21-64.61,0-66.56,68.12-68.13,128-71.26v-7.44c0-18.79-9.79-27.8-30.15-27.8-19.18,0-30.93,9.4-33.28,26.24l-54.82-2.35c5.88-48.16,39.94-68.91,89.28-68.91,56,0,85.35,26.23,85.35,83.39V278.78Zm-12.14-88.49c-47,2.35-70.09,5.09-70.09,27.41,0,12.13,10.18,19.18,23.1,19.18,26.63,0,47-13.7,47-40.33Z"/>
            <motion.path  
            initial={{opacity: 0, rotate: 180, y:'-100vh'}}
            animate={{opacity: 1, rotate:0, y:0}}
            transition= {{ type: "spring", stiffness: 40, ease: 'easeIn' }}
            // variants={threeVariants} drag dragConstraints={constraintsRef} dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} whileTap={{ cursor: "grabbing" }}
             d="M0,326.28H60.69V549.85H188.33v55.2H0Z"/>
            <motion.path 
            initial={{opacity: 0, rotate: -360, y:'-100vh'}}
            animate={{opacity: 1, rotate:0, y:0}}
            transition= {{ delay:0.6, type: "spring", stiffness: 40, ease: 'easeIn'  }}
            // variants={threeVariants} drag dragConstraints={constraintsRef} dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} whileTap={{ cursor: "grabbing" }}
             d="M402.1,511.47c0,2.35-.39,6.66-.39,8.23H266.63c2.35,24.27,16.44,43.46,41.89,43.46,18,0,30.54-7.44,34.85-26.63h56.38c-6.26,50.12-43.85,74-91.23,74-65,0-99.45-44.24-99.45-107.67,0-64.6,36.42-108.85,99.06-108.85,61.47,0,94,42.68,94,104.94ZM267,477.8h78.31c-2-22.32-14.1-37.59-38-37.59C282.68,440.21,269.37,457.05,267,477.8Z"/>
            <motion.path   
            initial={{opacity: 0, rotate: 270, y:'-100vh'}}
            animate={{opacity: 1, rotate:0, y:0}}
            transition= {{ delay:0.4, type: "spring", stiffness: 40, ease: 'easeIn'  }}
            // variants={threeVariants} drag dragConstraints={constraintsRef} dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} whileTap={{ cursor: "grabbing" }}
             d="M568.11,605.05l-6.66-20.36a83.67,83.67,0,0,1-59.9,25.45c-44.25,0-73.22-25.06-73.22-64.6,0-66.56,68.13-68.13,128-71.26v-7.44c0-18.79-9.79-27.8-30.15-27.8-19.18,0-30.93,9.4-33.28,26.23l-54.81-2.35C444,414.76,478.06,394,527.39,394c56,0,85.35,26.24,85.35,83.4V605.05ZM556,516.56c-47,2.35-70.08,5.09-70.08,27.41,0,12.14,10.18,19.19,23.1,19.19,26.62,0,47-13.71,47-40.33Z"/>
            <motion.path  
            initial={{opacity: 0, rotate: 180, y:'-150vh'}}
            animate={{opacity: 1, rotate:0, y:0}}
            transition= {{ type: "spring", stiffness: 40, ease: 'easeIn'  }}
            // variants={threeVariants} drag dragConstraints={constraintsRef} dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} whileTap={{ cursor: "grabbing" }}
             d="M656,605.05V323.93h58.34V605.05Z"/>
        </svg>
    </motion.div>)
}

export default Loader;