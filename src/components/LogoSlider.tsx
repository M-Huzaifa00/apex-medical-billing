import React from 'react';
import { motion } from 'framer-motion';
import eClinicalWorks from '../assets/images/Slider-Logo/LOGO 1.png';
import eMedicalPractice from '../assets/images/Slider-Logo/lOGO 2.png';
import drChrono from '../assets/images/Slider-Logo/logo 3.png';
import cureMD from '../assets/images/Slider-Logo/lOGO 4.png';
import collaborateMD from '../assets/images/Slider-Logo/logo 5.png';
import advancedMD from '../assets/images/Slider-Logo/logo 6.png';
import athenahealth from '../assets/images/Slider-Logo/logo 7.png';
import webPT from '../assets/images/Slider-Logo/LOGO 8.png';
import practiceFusion from '../assets/images/Slider-Logo/lOGO 9.png';
import nextGen from '../assets/images/Slider-Logo/LOGO 10.png';
import medgen from '../assets/images/Slider-Logo/logo 11.png';
import kareo from '../assets/images/Slider-Logo/LOGO 12.png';
import bbbAccredited from '../assets/images/Slider-Logo/logo 13.png';
import healthFusion from '../assets/images/Slider-Logo/14.png';
import { cubicEase, defaultViewport } from '../utils/animations';

const logos = [
  { src: eClinicalWorks, name: 'eClinicalWorks' },
  { src: eMedicalPractice, name: 'eMedicalPractice' },
  { src: drChrono, name: 'DrChrono' },
  { src: cureMD, name: 'CureMD' },
  { src: collaborateMD, name: 'CollaborateMD' },
  { src: advancedMD, name: 'AdvancedMD' },
  { src: athenahealth, name: 'athenahealth' },
  { src: webPT, name: 'WebPT' },
  { src: practiceFusion, name: 'Practice Fusion' },
  { src: nextGen, name: 'NextGen Healthcare' },
  { src: medgen, name: 'Medgen' },
  { src: kareo, name: 'Kareo' },
  { src: bbbAccredited, name: 'BBB Accredited Business' },
  { src: healthFusion, name: 'Health Fusion' },
];

export const LogoSlider: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.7, ease: cubicEase }}
        className="text-center max-w-3xl mx-auto mb-8 space-y-2"
      >
        <span className="text-xs font-display font-bold uppercase tracking-wider text-[#57B836]">
          Platforms We Work With
        </span>
        <h2 className="text-2xl sm:text-3xl font-display text-[#0E2925] text-balance">
          Fluent in the EHR & Practice Management Systems You Already Use
        </h2>
      </motion.div>

      <div className="logo-marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="logo-marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6"
            >
              {logos.map((logo) => (
                <li
                  key={logo.name}
                  className="w-40 sm:w-52 h-20 sm:h-24 shrink-0 rounded-2xl bg-white border border-[#E2E7DF] shadow-xs px-5 sm:px-7 flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={copy === 0 ? logo.name : ''}
                    decoding="async"
                    draggable={false}
                    className="max-h-10 sm:max-h-12 max-w-full w-auto h-auto object-contain select-none"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};
