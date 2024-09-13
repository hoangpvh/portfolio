"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/useInView";
import SubmitBtn from "./submit-btn";

import { Fade } from "react-awesome-reveal";

export default function Contact(){
  const { ref } = useSectionInView("#contact")
  return(
    <motion.section id="contact"
    ref = {ref}
    >
      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <SectionHeading>
          {"Contact Me"}
        </SectionHeading> 
      </Fade>
      <Fade direction="up" delay={600} cascade damping={1e-1}>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          {"Feel free to contact me directly through this form"}
        </p>
      </Fade>
      <Fade direction="up" delay={800} cascade damping={1e-1}>
        <form className="mt-10 flex pb-3 flex-col dark:text-black">
          <input 
          className="h-14 px-4 mb-3 rounded-lg border-black dark:bg-white/10 dark:text-white/80"
          name="senderEmail"
          type="email"
          required
          maxLength={100}
          placeholder={"Your email"}
          />
          <textarea 
          className="h-60 px-4 mb-3 rounded-lg border-black dark:bg-white/10 dark:text-white/80"
          name="senderDesc"
          required
          maxLength={1500}
          placeholder={"Your Description"}
          />
          <SubmitBtn text={"Submit"}/>
        </form>
      </Fade>
    </motion.section>
  )
}


