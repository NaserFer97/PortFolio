import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
          Vamos a hacer algo <br />
          increible juntos.
          </span>
          <span className="primaryText">
            Empieza por <a href="mailto:naserfer97@gmail.com">Saludarme!</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Informacion</span>
            <p>Asuncion, Paraguay</p>
          </div>
          <ul className={css.menu}>
            <li>Servicios</li>
            <li>Trabajos</li>
            <li>Notas</li>
            <li>Experiencia</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
