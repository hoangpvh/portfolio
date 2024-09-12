"use client"

import React from 'react'
import Image from 'next/image'
import SectionHeading from './section-heading'
import { useSectionInView } from '../lib/useInView'

import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

export default function About () {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y:0 }}
    transition={{ delay: 0.75 }}
    id="about" 
    ref = {ref}
    className='max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt028'>
      <div className='container mx-auto'>
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <SectionHeading>
            About Me
          </SectionHeading>
        </Fade>
        <div className='grid xl:grid-cols-2 lg:text-start'>
          <div className='flex-1'>
            <div className='text-lg mt-12 xl:mt-3'>
              <div className='flex justify-start flex-col'>
              <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                <h3 className='font-bold mt-6'>
                  Our Mission
                </h3>
              </Fade>
              <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
                <p className='mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70'>
                  We believe that a website is the foundation of a successful online presence, and our goal is to help businesses establish a strong digital presence. Our process begins with understanding your business goals.
                </p>
              </Fade>
              <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
                <h3 className='font-bold mt-6'>
                  Our Vision
                </h3>
              </Fade>
              <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                <p className='mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70'>
                  We then use this information to create a custom website that not only reflects your brand but also helps you achieve your business objectives. From responsive design
                </p>
              </Fade>
              </div>
            </div>
          </div>
          <div>
          <Fade direction='right' delay={600} cascade damping={1e-1} triggerOnce={true}>
            {/* {Right Image} */}
            <Image 
            src="/about.png"
            alt="About Me"
            width="600"
            height="600"
            quality="100"
            priority={true}
            className="rounded-full mt-8 object-cover"
            />
          </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
