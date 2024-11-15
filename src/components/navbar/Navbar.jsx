import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai';
import { BsDiscord } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#Home" className="logo">
            <img src="/logo.png" alt="logo" />
          </a>
        </motion.span>
        <div className="header_socials">
          <a href="https://www.linkedin.com/in/omar-oulaya-270746220" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/OMAR-hub-dev" target="_blank"><AiFillGithub/></a>
          <a href="https://discord.com/users/898116111382482966" target="_blank"><BsDiscord /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
