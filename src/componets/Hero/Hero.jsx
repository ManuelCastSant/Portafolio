import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hola, Soy Manuel Castañeda</h1>
            <p className={styles.description}>
            Soy Ingeniero en Sistemas Computacionales y especializado en Full-Stack Developer
            </p>
            <a href="mailto:mike.nike335@gmail.co" className={styles.contacBtn}>Contactame</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.HeroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottonBlur}/>
    </section>
  )
};

export default Hero;
