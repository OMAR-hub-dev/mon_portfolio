import './hero.scss';
import { motion } from 'framer-motion';
import CV from '../../assets/Cv_Développeur.pdf';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero ">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}><hr />Hi, I'Am</motion.h2>
          <motion.h1 variants={textVariants} whileHover={{color:"orange"}}>
           OULAYA Omar
          </motion.h1>
          <motion.h3 variants={textVariants} >
            Développeur Web
          </motion.h3>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} className='btn'>
              <a href={CV} download>
                Télécharger Cv
              </a>
            </motion.button>
            <motion.button variants={textVariants} className='btn'>
              <a href="#Contact">Me contacter</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scrollButton"
            className='scrollButton'
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Data Analyst & Développeur FullStack
      </motion.div>
      <div className="imageContainer">
        <img src="/Ai_developer.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
