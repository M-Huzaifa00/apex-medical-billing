import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles, ShieldCheck, PhoneCall } from 'lucide-react';
import { Hero } from '../components/Hero';
import { LogoSlider } from '../components/LogoSlider';
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
      subtitle: 'The People Behind Apex',
      to: '/about-us',
      description:
        'Apex Medical Billing helps healthcare practices manage the work behind getting paid, with a focus on accurate billing, consistent follow-up, and careful payment reconciliation.',
      cta: 'Meet Our Team',
      icon: Users,
      badge: '100% HIPAA-Compliant',
    },
    {
      title: 'Our Services',
      subtitle: 'Support at Every Step',
      to: '/services',
      description:
        'Get help with medical billing, accounts receivable follow-up, account reconciliation, quality assurance, and customer support. Five connected services to keep your billing process on track.',
      cta: 'Explore Our Services',
      icon: Sparkles,
      badge: '98% Clean Claims',
    },
    {
      title: 'Why Choose Us',
      subtitle: 'The Apex Approach',
      to: '/why-choose-us',
      description:
        'Small billing errors can become costly delays. We check the details, follow up on unresolved claims, and reconcile payments to help protect your practice’s revenue.',
      cta: 'See How We Work',
      icon: ShieldCheck,
      badge: '24-Hour Claim Submission',
    },
    {
      title: 'Contact Us',
      subtitle: 'Let’s Talk About Your Practice',
      to: '/contact-us',
      description:
        'Dealing with unpaid claims or a growing billing backlog? Tell us what’s getting in the way, and we’ll talk through how Apex can help.',
      cta: 'Get Free Practice Audit',
      icon: PhoneCall,
      badge: 'Free Consultation',
    },
  ];

  return (
    <div className="space-y-4">
      {/* 1. Hero Section */}
      <Hero onOpenAudit={onOpenAudit} />

      {/* 2. Platform Logo Slider */}
      <LogoSlider />

      {/* 3. 3-Stat Metric Section */}
      <Metrics />

      {/* 4. Dark Evergreen Editorial Intro Statement */}
      <EditorialIntro />

      {/* 5. Streamlined 4-Page Gateway (Clean portal into the 4 core pages) */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836]">
            Get to Know Apex
          </span>
          <h2 className="text-3xl sm:text-4xl font-editorial text-[#0E2925]">
            Complete Billing Support for a Thriving Practice
          </h2>
          <p className="text-sm text-[#747773]">
            Meet our team, explore our services, and find the support your practice needs.
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
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#57B836]/10 text-[#57B836] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-center leading-tight text-[#57B836] bg-[#EAF7E6] px-2.5 py-1 rounded-full">
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

      {/* 6. Final Dark Evergreen CTA */}
      <FinalCTA onOpenAudit={onOpenAudit} />
    </div>
  );
};
