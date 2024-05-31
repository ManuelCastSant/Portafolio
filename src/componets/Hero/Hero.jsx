import React from 'react';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section>
        <div>
            <h1>Hola, Soy Manuel Castañeda</h1>
            <p>
            Soy Ingeniero en Sistemas Computacionales y especializado en Full-Stack Developer
            </p>
            <a href="mailto:mike.nike335@gmail.co">Contactame</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="" />

    </section>
  )
};

export default Hero;
