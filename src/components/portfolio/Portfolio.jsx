import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Vanilla JS : My_Blog",
    img: "/BLOG_1.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    git: "https://github.com/OMAR-hub-dev/blog"
  },
  {
    id: 2,
    title: "La maison de la déco : Symfony MySQL",
    img: "/lamaison_deco_1.png",
    desc: "Ce projet consiste à la mise en place d’un site Web qui gère la commercialisation des produits de décoration. En utilsant PHP/symfony et MySQL , Bootstrap.",
    git : "https://github.com/OMAR-hub-dev/LaMaisonDeLADeco"
  },
  {
    id: 3,
    title: "critiques de films : Spring Boot/java - React Nodejs",
    img: "/movie_projet.png",
    desc: "une application en utilisant MongoDb pour la base de données, Java et Spring Boot pour le backend et React pour le frontend. une application de critique de films qui présentera une séparation  entre le code client et le code serveur. Ces deux parties (implémentées à l'aide de technologies différentes) peuvent évoluer en parallèle et indépendamment l'une de l'autre.",
    git: "https://github.com/OMAR-hub-dev/Movie_review/tree/master--"
  },
  {
    id: 4,
    title: "lancer de dé : vanilla js",
    img: "/lancer_dé.PNG",
    desc: "C'est un jeu de lancer de dés implémenté en Vanilla JavaScript. Il se joue à deux joueurs, Joueur 1 et Joueur 2, qui jouent alternativement en cliquant sur le bouton . À chaque tour, un joueur lance le dé autant de fois qu'il le souhaite. Chaque résultat est ajouté à son score EN COURS. Cependant, si un joueur obtient un 1 lors d'une série de lancers, tout son score EN COURS est perdu, et il doit passer la main au joueur adverse.",
    git:'https://github.com/OMAR-hub-dev/jeu_de_d-_virtuel'
  },
  {
    id: 5,
    title: "Bondoufle store : React Node js",
    img: "/Bondoufle_store.png",
    desc: "C'est un site Web de commerce électronique entièrement fonctionnel exactement comme Amazon, en utilisant la stack MERN (MongoDB, ExpressJS, React et Node.JS).",
    git: 'https://github.com/OMAR-hub-dev/Bondoufle-store'
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
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
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
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projets réalisés</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
