import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Binary,
  AlertTriangle,
  Clock,
  CreditCard,
  UserCheck,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import techImg from '../assets/images/medical_technology_analytics_1790366089350.png';
import { cubicEase, defaultViewport } from '../utils/animations';

interface ServicesPageProps {
  onOpenAudit: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenAudit }) => {
  const [selectedService, setSelectedService] = useState<number>(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = tabsRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  // Track overflow and map vertical mouse-wheel input to horizontal tab scrolling
  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;
      // Hand the wheel back to the page once the tabs hit either end
      if ((e.deltaY < 0 && el.scrollLeft <= 0) || (e.deltaY > 0 && el.scrollLeft >= maxScroll - 1)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
    };

    updateScrollState();
    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('scroll', updateScrollState, { passive: true });
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('scroll', updateScrollState);
      resizeObserver.disconnect();
    };
  }, [updateScrollState]);

  // Keep the selected tab fully visible inside the scroller
  useEffect(() => {
    const el = tabsRef.current;
    const tab = tabRefs.current[selectedService];
    if (!el || !tab) return;
    const containerRect = el.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const edgeOffset = 48;
    if (tabRect.left < containerRect.left + edgeOffset) {
      el.scrollBy({ left: tabRect.left - containerRect.left - edgeOffset, behavior: 'smooth' });
    } else if (tabRect.right > containerRect.right - edgeOffset) {
      el.scrollBy({ left: tabRect.right - containerRect.right + edgeOffset, behavior: 'smooth' });
    }
  }, [selectedService]);

  const scrollTabs = (direction: -1 | 1) => {
    const el = tabsRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.6, behavior: 'smooth' });
  };

  const services = [
    {
      id: 'billing',
      number: '01',
      title: 'Medical Billing & Charge Capture',
      tagline: 'Precision Electronic Claims Processing',
      icon: FileText,
      description:
        'Complete electronic charge entry and scrubbing across commercial, Medicare, Medicaid, and workers compensation plans. We cross-verify patient eligibility and policy limits before submission.',
      workflow: [
        'Electronic encounter data extraction from your EHR schedule',
        'Multi-layer scrub against local coverage determinations (LCD/NCD)',
        'Electronic batch transmission via direct clearinghouse pipelines',
        'Daily submission verification and payer receipt tracking within 24 hours',
      ],
      kpi: '98% First-Pass Clean Claim Rate',
      turnaround: '24-hour claim generation',
      highlight: 'Zero billing bottlenecks or missed filing limits',
    },
    {
      id: 'coding',
      number: '02',
      title: 'Certified Medical Coding & Audits',
      tagline: 'AAPC & AHIMA Certified Reviewers',
      icon: Binary,
      description:
        'Certified professional coders (CPCs) review clinical notes and operative reports to assign accurate ICD-10-CM, CPT, and HCPCS codes with applicable modifiers (25, 59, 78) to eliminate undercoding.',
      workflow: [
        'Physician documentation review by certified specialty coders',
        'Complex modifier matching and CCI edit compliance checks',
        'Quarterly chart sampling to safeguard against audit exposure',
        'Provider feedback loops to enhance clinical documentation precision',
      ],
      kpi: '100% US-Based AAPC Certified Coders',
      turnaround: 'Same-day documentation scrubbing',
      highlight: 'Unlocks unbilled services while keeping audits airtight',
    },
    {
      id: 'credentialing',
      number: '03',
      title: 'Provider Credentialing & Payer Enrollment',
      tagline: 'Prevent Reimbursement Freezes',
      icon: UserCheck,
      description:
        'Complete management of CAQH profiles, hospital privileges, commercial insurance payer panel enrollment, Medicare PECOS revalidations, and Medicaid state enrollments.',
      workflow: [
        'CAQH ProView initial setup, attestation, and quarterly maintenance',
        'Payer contract application tracking and direct representative follow-up',
        'NPI Registry updates and facility credentialing coordination',
        'Proactive 90-day recredentialing warnings to avoid contract lapses',
      ],
      kpi: '120+ Payer Networks Enrolled',
      turnaround: 'Expedited processing workflows',
      highlight: 'Eliminates out-of-network payment denials for new providers',
    },
    {
      id: 'ar',
      number: '04',
      title: 'Accounts Receivable (A/R) Recovery',
      tagline: 'Aggressive 30-60-90+ Day Aging Liquidation',
      icon: Clock,
      description:
        'We systematically resolve outstanding insurance aging and patient balances before they turn into uncollectible bad debt. Dedicated aging specialists follow up with payer provider representatives.',
      workflow: [
        'Daily aged-balance stratification by dollar weight and payer timely-filing windows',
        'Direct clearinghouse and telephonic payer representative escalation',
        'Resolution of coordination of benefits (COB) and secondary payer delays',
        'Transparent patient statement cycling with courteous billing support',
      ],
      kpi: '25 Days Average in A/R',
      turnaround: 'Continuous 30-day aging cadence',
      highlight: 'Reduces over-90-day balances by an average of 42%',
    },
    {
      id: 'payment',
      number: '05',
      title: 'Payment Posting & Daily Reconciliation',
      tagline: 'Electronic Remittance & Line-Item Accuracy',
      icon: CreditCard,
      description:
        'Automated electronic remittance advice (ERA) and electronic funds transfer (EFT) matching down to individual claim line-items, ensuring bank deposits reconcile with practice ledger.',
      workflow: [
        'Daily ERA posting with secondary/tertiary payer electronic crossovers',
        'Manual EOB paper check scanning and detailed line-item posting',
        'Co-pay, deductible, and coinsurance calculation for patient balances',
        'Daily ledger balancing against practice merchant account deposits',
      ],
      kpi: '100% Financial Reconciliation',
      turnaround: 'Posted within 24 hours of payer remit',
      highlight: 'Zero unallocated cash or ledger discrepancies',
    },
    {
      id: 'denials',
      number: '06',
      title: 'Denial Management & Root-Cause Appeals',
      tagline: '82% First-Appeal Reversal Rate',
      icon: AlertTriangle,
      description:
        'Denials are categorized by CARC and RARC remittance codes immediately upon receipt. Our clinical appeals team crafts customized, evidence-based dispute letters to reverse non-payments.',
      workflow: [
        'Automated clearinghouse denial capture on day zero',
        'Root-cause categorization: medical necessity, pre-auth, or coding discrepancy',
        'Clinical appeal letter preparation with supporting medical records',
        'Active payer escalations and timely claim resubmissions',
      ],
      kpi: '82% Denied Claim Recovery',
      turnaround: '48-hour denial triage protocol',
      highlight: 'Transforms lost revenue into collected practice cash',
    },
    {
      id: 'analytics',
      number: '07',
      title: 'Financial Analytics & Executive Reporting',
      tagline: 'Real-Time Practice Revenue Intelligence',
      icon: BarChart3,
      description:
        'Transparent executive dashboards delivering actionable insights on clean claim velocity, net collection ratios, payer reimbursement delays, and provider productivity metrics.',
      workflow: [
        'Monthly executive financial review calls with dedicated Account Director',
        'Payer reimbursement velocity and contract allowable variance reports',
        'Provider RVU productivity and fee-schedule benchmarking',
        '24/7 client portal access with drill-down claim visibility',
      ],
      kpi: 'Monthly Strategic KPI Reviews',
      turnaround: 'Real-time dashboard reporting',
      highlight: 'No hidden numbers—total clarity on every earned dollar',
    },
  ];

  const comparisonRows = [
    { feature: 'Dedicated Onshore Account Team', aura: 'Yes — Dedicated US Pod', inhouse: 'Dependent on Staffing', offshore: 'No — Rotating Call Center' },
    { feature: 'First-Pass Clean Claim Rate', aura: '98%', inhouse: '78% - 85%', offshore: '70% - 80%' },
    { feature: 'Average Days in Accounts Receivable', aura: '24 - 28 Days', inhouse: '45 - 60+ Days', offshore: '50 - 75 Days' },
    { feature: 'Denial Resolution & Formal Appeals', aura: 'Within 48 Hours', inhouse: 'Often Neglected / Backlogged', offshore: 'Basic Resubmissions Only' },
    { feature: 'Coder Certification Standard', aura: 'AAPC / AHIMA Certified CPCs', inhouse: 'Varies Widely', offshore: 'Uncertified Data Entry' },
    { feature: 'EHR / PM System Compatibility', aura: 'Zero Disruption / Direct Login', inhouse: 'Current Tool Only', offshore: 'Requires CSV / Extra Plugins' },
    { feature: 'HIPAA & BAA Legal Guarantee', aura: '100% Onshore Compliance', inhouse: 'Internal Liability', offshore: 'Cross-Border Risk Exposure' },
  ];

  const current = services[selectedService];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16">
      {/* 1. Editorial Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: cubicEase }}
        className="text-center max-w-4xl mx-auto pt-6 pb-2"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#57B836]/10 border border-[#57B836]/20 text-[#57B836] text-xs font-semibold uppercase tracking-wider mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>Full-Spectrum Revenue Cycle Management</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-editorial font-normal text-[#0E2925] leading-[1.15] text-balance">
          Medical Billing Solutions Built for High-Performing Practices.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#747773] leading-relaxed max-w-2xl mx-auto">
          We bring certified medical coding, rapid claims submission, and persistent denial appeals together so your clinic collects maximum allowable reimbursement with zero administrative friction.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenAudit}
            className="px-8 py-3.5 rounded-full bg-[#57B836] text-white text-sm font-semibold hover:bg-[#0E2925] transition-all shadow-md hover:shadow-lg active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Request Practice Billing Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#comparison"
            className="px-6 py-3.5 rounded-full bg-white text-[#1E2423] border border-[#E2E7DF] text-sm font-medium hover:border-[#57B836] transition-colors"
          >
            Compare With In-House & Offshore
          </a>
        </div>
      </motion.section>

      {/* 2. Interactive Service Explorer (Tabs + Deep Feature Card) */}
      <section className="space-y-8">
        <div className="relative border-b border-[#E2E7DF]">
          <div
            ref={tabsRef}
            className="flex items-center justify-between pb-4 overflow-x-auto scrollbar-none gap-2"
          >
            {services.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedService === idx;
              return (
                <button
                  key={item.id}
                  ref={(node) => {
                    tabRefs.current[idx] = node;
                  }}
                  onClick={() => setSelectedService(idx)}
                  className={`shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#57B836] text-white shadow-sm'
                      : 'bg-white text-[#747773] hover:text-[#1E2423] border border-[#E2E7DF]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.number}. {item.title.split('&')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Edge fades + scroll arrows (only shown when tabs overflow in that direction) */}
          <div
            className={`absolute left-0 top-0 bottom-4 flex items-center pr-12 bg-gradient-to-r from-[#F8FAF7] via-[#F8FAF7]/90 to-transparent pointer-events-none transition-opacity duration-200 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              type="button"
              aria-label="Scroll services left"
              tabIndex={canScrollLeft ? 0 : -1}
              onClick={() => scrollTabs(-1)}
              className={`w-9 h-9 rounded-full bg-white border border-[#E2E7DF] text-[#1E2423] shadow-sm flex items-center justify-center hover:border-[#57B836] hover:text-[#57B836] transition-colors cursor-pointer ${
                canScrollLeft ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
          <div
            className={`absolute right-0 top-0 bottom-4 flex items-center pl-12 bg-gradient-to-l from-[#F8FAF7] via-[#F8FAF7]/90 to-transparent pointer-events-none transition-opacity duration-200 ${
              canScrollRight ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              type="button"
              aria-label="Scroll services right"
              tabIndex={canScrollRight ? 0 : -1}
              onClick={() => scrollTabs(1)}
              className={`w-9 h-9 rounded-full bg-white border border-[#E2E7DF] text-[#1E2423] shadow-sm flex items-center justify-center hover:border-[#57B836] hover:text-[#57B836] transition-colors cursor-pointer ${
                canScrollRight ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Selected Service Detailed View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: cubicEase }}
            className="rounded-[32px] sm:rounded-[40px] bg-white border border-[#E2E7DF] p-8 sm:p-12 lg:p-16 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Core Overview & Workflow */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-2xl bg-[#F8FAF7] text-[#57B836] flex items-center justify-center font-bold text-base font-editorial">
                    {current.number}
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836]">
                      {current.tagline}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-editorial text-[#0E2925] leading-tight">
                      {current.title}
                    </h2>
                  </div>
                </div>

                <p className="text-base text-[#747773] leading-relaxed">
                  {current.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1E2423]">
                    Execution Protocol & Deliverables:
                  </h3>
                  <div className="space-y-2.5">
                    {current.workflow.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3 p-3 rounded-2xl bg-[#F8FAF7] border border-[#E2E7DF]">
                        <CheckCircle2 className="w-4 h-4 text-[#57B836] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#1E2423] leading-snug">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Metric Card & Action */}
              <div className="lg:col-span-5 bg-[#0E2925] text-[#F8FAF7] rounded-[28px] sm:rounded-[32px] p-8 space-y-6 relative overflow-hidden shadow-xl">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#57B836]/40 rounded-full blur-2xl" />

                <div className="relative z-10 space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#EAF7E6]">
                    Performance Standard
                  </span>
                  <div className="text-3xl sm:text-4xl font-editorial text-white leading-tight">
                    {current.kpi}
                  </div>
                  <div className="text-xs text-[#EAF7E6]/80 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#EAF7E6]" />
                    <span>SLA: {current.turnaround}</span>
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10 space-y-3 text-xs text-white/80">
                  <div className="font-semibold text-white">Why This Matters For Your Practice:</div>
                  <p className="leading-relaxed">
                    {current.highlight}. You retain total transparency through real-time EHR visibility and weekly reconciliation calls.
                  </p>
                </div>

                <div className="relative z-10 pt-2">
                  <button
                    onClick={onOpenAudit}
                    className="w-full py-3.5 px-6 rounded-full bg-[#F8FAF7] text-[#0E2925] text-xs font-semibold hover:bg-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Audit for {current.title.split('&')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 3. High-Impact Image Banner */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.8, ease: cubicEase }}
        className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center p-8 sm:p-14 border border-[#57B836]/20 shadow-xl"
      >
        <img
          src={techImg}
          alt="Healthcare billing specialist analyzing revenue metrics"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E2925]/95 via-[#0E2925]/85 to-transparent" />

        <div className="relative z-10 max-w-xl space-y-4 text-[#F8FAF7]">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#EAF7E6]">
            Seamless Integration
          </span>
          <h2 className="text-3xl sm:text-5xl font-editorial text-white leading-tight">
            We Connect Directly to Your EHR. No New Software to Learn.
          </h2>
          <p className="text-sm sm:text-base text-[#EAF7E6] leading-relaxed">
            Whether your practice runs on athenahealth, Epic, eClinicalWorks, Kareo/Tebra, or ModMed, our specialists work securely inside your existing platform within 72 hours.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenAudit}
              className="px-6 py-3 rounded-full bg-[#57B836] text-white text-xs font-semibold hover:bg-[#0E2925] transition-colors border border-[#EAF7E6]/30 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Verify Your EHR Compatibility</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* 4. Comparison Table (Apex vs In-House vs Offshore) */}
      <section id="comparison" className="space-y-6 pt-4 scroll-mt-[calc(var(--dev-banner-height,0px)_+_6rem)]">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836]">
            Strategic Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-editorial text-[#0E2925]">
            How Apex Compares to Other Billing Models
          </h2>
          <p className="text-sm text-[#747773]">
            Understanding why independent healthcare practices transition away from internal billing burnout and generic offshore call centers.
          </p>
        </div>

        <div className="rounded-[32px] bg-white border border-[#E2E7DF] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E2E7DF] bg-[#F8FAF7]">
                  <th className="p-4 sm:p-5 font-semibold text-[#1E2423]">Operational Dimension</th>
                  <th className="p-4 sm:p-5 font-bold text-[#57B836] bg-[#57B836]/10">Apex Medical Billing</th>
                  <th className="p-4 sm:p-5 font-semibold text-[#747773]">Traditional In-House Billing</th>
                  <th className="p-4 sm:p-5 font-semibold text-[#747773]">Offshore Call Centers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E7DF]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F8FAF7]/40 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-[#1E2423]">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-semibold text-[#57B836] bg-[#57B836]/5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#57B836] shrink-0" />
                      <span>{row.aura}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-[#747773]">{row.inhouse}</td>
                    <td className="p-4 sm:p-5 text-[#747773]">{row.offshore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Bottom Services CTA */}
      <section className="rounded-[32px] sm:rounded-[40px] bg-[#0E2925] text-[#F8FAF7] p-8 sm:p-14 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-editorial text-white max-w-xl mx-auto">
          Ready to Recover Uncollected Revenue in Your Practice?
        </h2>
        <p className="text-sm sm:text-base text-[#EAF7E6] max-w-lg mx-auto">
          Send us a recent sample aging report under a standard HIPAA BAA. Within 48 hours, we will deliver a custom revenue leak analysis with zero cost or obligation.
        </p>
        <button
          onClick={onOpenAudit}
          className="px-8 py-4 rounded-full bg-[#F8FAF7] text-[#0E2925] text-sm font-semibold hover:bg-white transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Schedule Free 48-Hour Billing Audit</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
