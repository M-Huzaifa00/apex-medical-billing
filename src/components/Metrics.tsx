import React from 'react';
import { motion } from 'framer-motion';
import { cubicEase, defaultViewport } from '../utils/animations';

export const Metrics: React.FC = () => {
  const metrics = [
    {
      value: '98%',
      label: 'Clean Claim Rate',
      sublabel: 'First-pass payer submission acceptance',
    },
    {
      value: '25 Days',
      label: 'Average Days in A/R',
      sublabel: 'Industry median exceeds 45–55 days',
    },
    {
      value: '15%',
      label: 'Revenue Improvement',
      sublabel: 'Average net collection increase in 90 days',
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E2E7DF] py-4"
      >
        {metrics.map((m, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: cubicEase },
              },
            }}
            className={`flex flex-col items-center md:items-start text-center md:text-left ${
              idx === 0 ? 'md:pr-10' : idx === 1 ? 'md:px-10' : 'md:pl-10'
            } pt-6 md:pt-0`}
          >
            <div className="text-5xl sm:text-6xl font-editorial text-[#0E2925] tracking-tight tabular-nums font-normal">
              {m.value}
            </div>
            <div className="mt-2 text-base font-semibold text-[#1E2423]">
              {m.label}
            </div>
            <div className="mt-1 text-xs text-[#747773] max-w-[240px]">
              {m.sublabel}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 text-center"
      >
        <p className="text-[11px] text-[#747773] tracking-normal">
          * Representative benchmark data across our active practice network. Individual practice metrics vary based on specialty and payer mix.
        </p>
      </motion.div>
    </section>
  );
};
