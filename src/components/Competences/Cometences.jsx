import React from 'react';
import './Competences.scss';

import { FaHtml5,FaCss3,FaPhp,FaPython,FaJava, FaSymfony,FaNode,FaReact,FaDatabase,FaDocker,FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMysql,SiVirtualbox, SiMongodb } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

import { motion } from "framer-motion";

const Competences = () => {
  const text =  "Elles sont constamment améliorées, car je considère que la passion pour ce métier nous pousse à apprendre chaque jour davantage, notamment en étant impliqué, curieux et passionné.".split(" ");
  return (
    <div className="container">
      <h2>Compétences</h2>
      <span>
       {text.map((word,i)=>{
        return <motion.h5 key={i} whileHover={{color:"#ED862F"}}>{word}</motion.h5>
       })}
      </span>
      <div className="experience__container ">
        <div className="experience__">
          <h3>Développement web</h3>
          <div className="experience__content">
            <article className="experience_details">
              <FaHtml5 className="experience__details-icons" />
              <h4>HTML</h4>
              {/* <small className='text-light'>experienced</small> */}
            </article>

            <article className="experience_details">
              <FaCss3 className="experience__details-icons" />
              <h4>CSS</h4>
              {/* <small className='text-light'>experienced</small> */}
            </article>

            <article className="experience_details">
              <FaPhp className="experience__details-icons" />
              <h4>PHP</h4>
              {/* <small className='text-light'>intermediare</small> */}
            </article>

            <article className="experience_details">
              <IoLogoJavascript className="experience__details-icons" />
              <h4>Javascript</h4>
              {/* <small className='text-light'>experienced</small> */}
            </article>

            <article className="experience_details">
              <FaPython className="experience__details-icons" />
              <h4>Python</h4>
              {/* <small className='text-light'>experienced</small> */}
            </article>
            <article className="experience_details">
              <FaJava className="experience__details-icons" />
              <h4>Java</h4>
              {/* <small className='text-light'>experienced</small> */}
            </article>
            <article className="experience_details">
              <FaSymfony className="experience__details-icons" />
              <h4>Symfony</h4>
              {/* <small className='text-light'>experienced</small> */}
            </article>
            <article className="experience_details">
              <FaReact className="experience__details-icons" />
              <h4>Reactjs</h4>
              {/* <small className='text-light'>experienced</small> */}
            </article>
          </div>
        </div>
        <div className="experience__">
          <h3>Base de données & Logiciels</h3>
          <div className="experience__content">
            <article className="experience_details">
              <SiMysql className="experience__details-icons" />
              <h4>MySQL</h4>
              {/* <small className='text-light'>experienced</small> */}
            </article>
            <article className="experience_details">
              <SiMongodb className="experience__details-icons" />
              <h4>MongoDB</h4>
              {/* <small className='text-light'>intermediare</small> */}
            </article>
            <article className="experience_details">
              <IoLogoFirebase className="experience__details-icons" />
              <h4>Firebase</h4>
              {/* <small className='text-light'>experienced</small> */}
            </article>
            <article className="experience_details">
              <FaDatabase className="experience__details-icons" />
              <h4>NoSQL</h4>
              {/* <small className='text-light'>experienced</small> */}
            </article>

            <article className="experience_details">
              <FaDocker className="experience__details-icons" />
              <h4>Docker</h4>
              {/* <small className='text-light'>experienced</small> */}
            </article>
            <article className="experience_details">
              <FaNode className="experience__details-icons" />
              <h4>Nodejs</h4>
              {/* <small className='text-light'>experienced</small> */}
            </article>
            <article className="experience_details">
              <FaGithub className="experience__details-icons" />
              <h4>GitHub</h4>
              {/* <small className='text-light'>experienced</small> */}
            </article>
            <article className="experience_details">
              <SiVirtualbox className="experience__details-icons" />
              <h4>Virtual Box</h4>
              {/* <small className='text-light'>experienced</small> */}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
