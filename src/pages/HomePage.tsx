import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles, ShieldCheck, PhoneCall } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Metrics } from '../components/Metrics';
import { EditorialIntro } from '../components/EditorialIntro';
import { FinalCTA } from '../components/FinalCTA';
import { cubicEase, defaultViewport } from '../utils/animations';

interface HomePageProps {
  onOpenAudit: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenAudit }) => {
  const pageGateways = [
    {
      title: 'About Us',
      subtitle: 'Our Team & Mission',
      to: '/about-us',
      description:
        'Founded by practice administrators and physician advisors. 100% US-based certified coders with zero offshore outsourcing.',
      cta: 'Learn About Our Team',
      icon: Users,
      badge: '100% US-Based',
    },
    {
      title: 'Services',
      subtitle: 'End-to-End RCM',
      to: '/services',
      description:
        'Medical billing, certified AAPC coding, aggressive denial appeals, aging A/R recovery, and payment reconciliation.',
      cta: 'Explore All Services',
      icon: Sparkles,
      badge: '98% Clean Claims',
    },
    {
      title: 'Why Choose Us',
      subtitle: 'The Apex Advantage',
      to: '/why-choose-us',
      description:
        '48-hour denial appeals, zero EHR migration friction, dedicated 4-person pods, and transparent real-time reporting.',
      cta: 'See The Apex Advantage',
      icon: ShieldCheck,
      badge: '48-Hr Denial SLA',
    },
    {
      title: 'Contact Us',
      subtitle: 'Practice Consultation',
      to: '/contact-us',
      description:
        'Connect directly with practice revenue directors or schedule your confidential 48-hour clinical billing audit.',
      cta: 'Get in Touch',
      icon: PhoneCall,
      badge: 'Fast Response',
    },
  ];

  return (
    <div className="space-y-4">
      {/* 1. Hero Section */}
      <Hero onOpenAudit={onOpenAudit} />

      {/* 2. 3-Stat Metric Section */}
      <Metrics />

      {/* 3. Dark Evergreen Editorial Intro Statement */}
      <EditorialIntro />

      {/* 4. Streamlined 4-Page Gateway (Clean portal into the 4 core pages) */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836]">
            Practice Revenue Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-editorial text-[#0E2925]">
            Everything Your Practice Needs to Thrive
          </h2>
          <p className="text-sm text-[#747773]">
            Explore our specialized capabilities designed for independent healthcare providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pageGateways.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: cubicEase }}
                className="rounded-[28px] bg-white border border-[#E2E7DF] p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#57B836]/10 text-[#57B836] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#57B836] bg-[#EAF7E6] px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#747773]">
                      {item.subtitle}
                    </span>
                    <h3 className="text-xl font-editorial text-[#0E2925] mt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#747773] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E7DF]">
                  <Link
                    to={item.to}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#F8FAF7] hover:bg-[#57B836] text-[#0E2925] hover:text-white text-xs font-semibold transition-all inline-flex items-center justify-between group-hover:bg-[#57B836] group-hover:text-white cursor-pointer"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. Final Dark Evergreen CTA */}
      <FinalCTA onOpenAudit={onOpenAudit} />
    </div>
  );
};
