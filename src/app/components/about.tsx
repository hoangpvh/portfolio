"use client"

import React from 'react'
import Image from 'next/image'
import SectionHeading from './section-heading'
import { useSectionInView } from '../lib/useInView'

import { motion } from "framer-motion";

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
      <div>
        <SectionHeading>
          About Me
        </SectionHeading>

        <div>
          <div>
            <div>
              <div>
                <h3>
                  Our Mission
                </h3>
                <p>
                  We believe that a website is the foundation of a successful online presence, and our goal is to help businesses establish a strong digital presence. Our process begins with understanding your business goals.
                </p>

                <h3>
                  Our Vision
                </h3>
                <p>
                  We then use this information to create a custom website that not only reflects your brand but also helps you achieve your business objectives. From responsive design
                </p>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </motion.section>
  )
}
