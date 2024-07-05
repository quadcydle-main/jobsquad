import React from "react";
import { Aboutimgsection } from "@/components/About/Aboutimgsection";
import { Mid } from "@/components/About/Mid";
import { Mission } from "@/components/About/Mission";
import {Last} from "@/components/About/Last";
import {Container} from "@/components/Container";

const About = () => {
  return (
    <div>
      
        <Aboutimgsection />
        <Mid />
        <Mission />
        <Last/>
      
    </div>
  );
};

export default About;
