import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { FaHtml5,FaCss3,FaPhp,FaPython,FaJava, FaSymfony,FaNode,FaReact,FaDatabase,FaDocker,FaGithub, FaSass, FaBootstrap, FaStripe } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMysql,SiVirtualbox, SiMongodb, SiComposer,SiAxios  } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

const items = [
  {
    id: 1,
    title: "Blog",
    img: "/BLOG_1.png",
    desc: `Ce projet vise à créer une application web dynamique où les utilisateurs peuvent créer et consulter des articles. Initialement, l'accent est mis sur la création et l'affichage des articles via une <strong>API REST.</strong> <br> Par la suite, l'application sera améliorée avec des fonctionnalités de date, de localisation, et d'historique pour offrir une expérience utilisateur plus riche et interactive.
    <br> Les technologies utilisées sont : 
    `,
    git: "https://github.com/OMAR-hub-dev/blog",
    icones: [ FaHtml5,FaCss3,FaSass, IoLogoJavascript, FaNode]
  },
  {
    id: 2,
    title: "La maison de la déco ",
    img: "/lamaison_deco_1.png",
    desc: `Ce projet consiste à développer un site web de vente de produits de décoration. Les clients peuvent consulter des catalogues en ligne, ajouter des produits à leur panier, et finaliser leurs commandes après s'être inscrits. Le site permet de :<br>
    <ul>
    <li>Consulter et acheter des produits,</li>
    <li>Gérer le panier et le profil,
    options de livraison et paiement sécurisé,</li>
    <li>Recevoir des emails de confirmation .</li></ul>

Les technologies utilisées sont :`,
    git : "https://github.com/OMAR-hub-dev/LaMaisonDeLADeco",
    icones: [ FaHtml5,FaCss3,FaBootstrap, FaPhp, FaSymfony,SiMysql, FaStripe]
  },
  {
    id: 3,
    title: "critiques de films ",
    img: "/movie_projet.png",
    desc: "une application en utilisant MongoDb pour la base de données, Java et Spring Boot pour le backend et React pour le frontend. une application de critique de films qui présentera une séparation  entre le code client et le code serveur. Ces deux parties (implémentées à l'aide de technologies différentes) peuvent évoluer en parallèle et indépendamment l'une de l'autre.<br>Les technologies utilisées sont :",
    git: "https://github.com/OMAR-hub-dev/Movie_review",
    icones: [ FaHtml5,FaCss3,SiMongodb,SiAxios , FaJava, FaReact]
  },
  {
    id: 4,
    title: "lancer de dé ",
    img: "/lancer_dé.PNG",
    desc: "C'est un jeu de lancer de dés implémenté en Vanilla JavaScript. Il se joue à 2 alternativement. À chaque tour, un joueur lance le dé autant de fois qu'il le souhaite. Chaque résultat est ajouté à son score EN COURS. Cependant, si un joueur obtient un 1 lors d'une série de lancers, tout son score EN COURS est perdu, et il doit passer la main au joueur adverse.<br>Les technologies utilisées sont :",
    git:'https://github.com/OMAR-hub-dev/jeu_de_d-_virtuel',
    icones: [ FaHtml5,FaCss3, FaBootstrap,IoLogoJavascript, FaGithub]
  },
  {
    id: 5,
    title: "Bondoufle store ",
    img: "/Bondoufle_store.png",
    desc: "C'est un site Web de commerce électronique entièrement fonctionnel exactement comme Amazon, .<br>Les technologies utilisées sont :",
    git: 'https://github.com/OMAR-hub-dev/Bondoufle-store',
    icones: [ FaHtml5,FaCss3,FaBootstrap,FaReact,  FaNode,SiMongodb,FaStripe]
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container" id = "Projets">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
            <div className="icons">
              {item.icones.map((Icon, index) => (
                <Icon key={index} size={24} />
              ))}
            </div>
            <a href={item.git} ><button className="btn">Voir sur GIT</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [ "start start","end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projets Réalisés</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
