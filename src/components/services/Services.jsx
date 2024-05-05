import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';
import { PiDevices } from 'react-icons/pi';
import { TbSettingsCheck } from 'react-icons/tb';
import { FaCode } from 'react-icons/fa';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={'animate'}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Mon objectif principal est de contribuer activement à l&apos;expansion
          et au développement de votre marque.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Idées</motion.b> uniques
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>pour votre</motion.b>{' '}
            projet .
          </h1>
          <a href="#Contact"><button className='btn' >Me contacter</button></a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          
        >
          <PiDevices className="services__icon" />
          <h2>Multi - plateforme</h2>
          <p>
            Développement de sites web et création d&apos;applications sur mesure
            pour répondre parfaitement aux besoins spécifiques de nos clients.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          
        >
          <FaCode className="services__icon" />
          <h2>Développement Web</h2>
          <p>
            Développement de sites web et création d&apos;applications sur mesure
            pour répondre parfaitement aux besoins spécifiques de nos clients.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          
        >
          <TbSettingsCheck className="services__icon" />
          <h2>Maintenance Web</h2>
          <p>
            Assurance d&apos;une gestion d&apos;hébergement optimale, garantissant
            l&apos;accessibilité et l&apos;intégration systématique des mises à jour de
            sécurité.
          </p>
          {/* <button>Go</button> */}
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Services;
