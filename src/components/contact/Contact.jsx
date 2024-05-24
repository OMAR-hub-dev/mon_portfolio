import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView ,AnimatePresence} from "framer-motion";
import emailjs from "@emailjs/browser";
import { RiMailSendLine } from "react-icons/ri";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const isInView = useInView(ref, { margin: "-100px" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    emailjs
      .sendForm(
        "service_yv95wmw",
        "template_6gx77qt",
        formRef.current,
        "CpPiOPjjHFpERL6_8"
      )
      .then(
        (result) => {
          setMessage({
            type: 'success',
            text: 'votre message est bien envoyé',
        })
        },
        (error) => {
          setMessage({
            type: 'error',
            text: 'erreur, veuillez recommencer svp',
          });
        }
      );

    // Réinitialiser les champs du formulaire
    setFormData({ name: '', email: '', message: '' });
    // Masquer le message après 10 secondes.
      setTimeout(() => {
        setMessage(null);
      }, 10000);
  };

  return (
    
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>&ldquo;&nbsp;Pour toute question ou demande d'information, je suis à votre écoute. N&apos;hésitez pas à me contacter.&nbsp; &ldquo;</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>oulaya.omar@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Adresse</h2>
          <span>Île-de-France &nbsp;&nbsp;&nbsp; Paris</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Téléphone</h2>
          <span>06 58 94 16 91</span>
        </motion.div>
        <div className="footer"><small> &copy; Omar OULAYA, 2024. All rights reserved.</small></div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          
            <motion.span 
            initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}><RiMailSendLine  className="email_icone"/></motion.span>
          
          
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text"  onChange={handleChange} value={formData.name} required placeholder="Votre Nom ..." name="name"/>
          <input type="email"  onChange={handleChange} value={formData.email} required placeholder="Votre Email ..." name="email"/>
          <textarea rows={8}type="text"  onChange={handleChange} value={formData.message} placeholder="Votre Message ..." name="message"/>
          <button type='submit'>Envoyer</button>
          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`message ${message.type}`}
              >
                {message.text}
              </motion.div>
              )}
          </AnimatePresence>
          
        </motion.form>
        <div className="footer1"><small> &copy; Omar OULAYA, 2024. All rights reserved.</small></div>
      </div>
      
    </motion.div>
    
   
  );
};

export default Contact;
