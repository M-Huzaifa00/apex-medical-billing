import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
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
  ChevronRight,
  Headset
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

  const heroStats = ['98% Clean Claim Rate', '<1% Claim Rejection', '24/7 Access', 'Starting at 2.99% of Collections'];

  const services = [
    {
      id: 'billing',
      number: '01',
      title: 'Medical Billing & Claim Processing',
      tagline: 'Precision Electronic Claims Processing',
      icon: FileText,
      description:
        'We manage claim preparation, scrubbing, and submission across commercial, Medicare, Medicaid, and workers’ compensation plans, with careful checks before claims reach the payer.',
      workflow: [
        'Electronic encounter and charge data review from your EHR',
        'Multi-level claim scrubbing against payer and coverage requirements',
        'Electronic claim submission through clearinghouse workflows',
        'Submission verification and payer receipt tracking within 24 hours',
      ],
      kpi: '98% First-Pass Clean Claim Rate',
      turnaround: '24-Hour Claim Submission',
      highlight:
        'Cleaner claims mean fewer preventable corrections, less time lost to rework, and a more direct path from services delivered to reimbursement.',
      cta: 'Get a Free Billing Review',
    },
    {
      id: 'coding',
      number: '02',
      title: 'Certified Medical Coding & Audits',
      tagline: 'Accurate Medical Coding Support',
      icon: Binary,
      description:
        'We review clinical documentation and apply the appropriate ICD-10-CM, CPT, and HCPCS codes to help claims accurately reflect the services provided and reduce avoidable coding-related issues.',
      workflow: [
        'Review clinical documentation before code assignment',
        'Apply ICD-10-CM, CPT, HCPCS, and applicable modifiers',
        'Check coding details for accuracy and consistency',
        'Review charts for documentation gaps and coding issues',
      ],
      kpi: 'Coding Accuracy That Supports Cleaner Claims',
      turnaround: 'Timely Documentation Review',
      highlight:
        'Accurate coding helps reduce preventable denials, supports appropriate reimbursement, and identifies documentation issues before they create more work downstream.',
      cta: 'Get a Free Coding Review',
    },
    {
      id: 'credentialing',
      number: '03',
      title: 'Provider Credentialing & Payer Enrollment',
      tagline: 'Keep Provider Enrollment Moving',
      icon: UserCheck,
      description:
        'We help manage provider credentialing from initial documentation and CAQH maintenance to payer enrollment, application tracking, and recredentialing, keeping each step organised and moving forward.',
      workflow: [
        'CAQH profile setup, attestation, and ongoing maintenance',
        'Commercial payer, Medicare, and Medicaid enrollment support',
        'Application tracking and payer follow-up on pending requirements',
        'Recredentialing and revalidation support to help prevent enrollment gaps',
      ],
      kpi: 'Credentialing Progress You Can Track',
      turnaround: 'Consistent Application Tracking & Follow-Up',
      highlight:
        'Credentialing delays can affect payer participation and when providers are able to bill. Structured follow-up helps keep applications visible, requirements addressed, and enrollment moving toward completion.',
      cta: 'Get a Free Credentialing Review',
    },
    {
      id: 'ar',
      number: '04',
      title: 'Accounts Receivable (A/R) Recovery',
      tagline: '30–60–90+ Day A/R Follow-Up',
      icon: Clock,
      description:
        'We work outstanding insurance and patient balances across aging buckets, identify what is delaying payment, and follow each account through the appropriate next step before balances become harder to recover.',
      workflow: [
        'Review and prioritize 30-, 60-, and 90+ day aging balances',
        'Follow up with payers on unpaid, delayed, or underpaid claims',
        'Resolve coordination of benefits and secondary payer issues',
        'Document payer responses, account status, and required next actions',
      ],
      kpi: '25 Days Average in A/R',
      turnaround: 'Consistent Aging Review & Payer Follow-Up',
      highlight:
        'Older balances become harder to collect. Consistent A/R follow-up helps keep unpaid claims visible, reduce aging, and move more earned revenue toward resolution.',
      cta: 'Get a Free A/R Review',
    },
    {
      id: 'payment',
      number: '05',
      title: 'Payment Posting & Daily Reconciliation',
      tagline: 'Daily ERA/EOB Posting & Reconciliation',
      icon: CreditCard,
      description:
        'We post payer and patient payments against the correct claims, reconcile remittance details, and flag discrepancies so your practice has a clear, up-to-date view of collected and outstanding revenue.',
      workflow: [
        'Daily ERA and EOB payment posting with accurate claim matching',
        'Record contractual adjustments, co-pays, deductibles, and coinsurance',
        'Identify underpayments, denials, and unmatched balances for follow-up',
        'Reconcile posted payments against remittance and account records',
      ],
      kpi: '24-Hour Payment Posting',
      turnaround: 'Payments Posted Within 24 Hours of Remittance',
      highlight:
        'Accurate, timely posting keeps account balances current and helps surface underpayments, denials, and unresolved balances before they move deeper into A/R.',
      cta: 'Get a Free Payment Posting Review',
    },
    {
      id: 'denials',
      number: '06',
      title: 'Denial Management & Root-Cause Appeals',
      tagline: '48-Hour Denial Review & Action',
      icon: AlertTriangle,
      description:
        'We review denied claims to identify the underlying issue, correct eligible errors, and take the appropriate follow-up action. Each denial is tracked by payer response, documentation, and root cause to help recover revenue and reduce repeat issues.',
      workflow: [
        'Review CARC/RARC codes and payer denial details',
        'Identify root causes across coding, eligibility, authorization, and documentation',
        'Prepare corrected claims, appeals, and supporting records',
        'Track resubmissions, payer responses, and recurring denial patterns',
      ],
      kpi: 'Root-Cause Review on Every Denial',
      turnaround: 'Next Action Assigned Within 48 Hours',
      highlight:
        'Unresolved denials delay earned revenue and create more work downstream. Faster review helps move recoverable claims forward while root-cause tracking helps prevent the same issues from recurring.',
      cta: 'Get a Free Denial Review',
    },
    {
      id: 'analytics',
      number: '07',
      title: 'Financial Analytics & Executive Reporting',
      tagline: '24/7 Revenue Performance Visibility',
      icon: BarChart3,
      description:
        'We turn billing and collection data into clear revenue cycle insights, helping your team track performance, spot payment trends, and understand where claims, A/R, and collections need attention.',
      workflow: [
        'Monthly KPI reporting across claims, collections, denials, and A/R',
        'Payer reimbursement and payment trend analysis',
        'Revenue cycle performance reviews with actionable next steps',
        '24/7 access to reporting and account-level billing visibility',
      ],
      kpi: 'Monthly Revenue Cycle KPI Reviews',
      turnaround: '24/7 Reporting & Account Access',
      highlight:
        'Better visibility makes it easier to see where revenue is moving, where it is slowing down, and which areas need action before small billing issues become larger financial gaps.',
      cta: 'Get a Free Revenue Performance Review',
    },
    {
      id: 'virtual-assistance',
      number: '08',
      title: 'Virtual Medical Assistance',
      tagline: 'Remote Practice Admin Support',
      icon: Headset,
      description:
        'We support routine administrative tasks that take time away from your in-house team, helping with scheduling, patient intake, insurance verification, referrals, and day-to-day follow-up.',
      workflow: [
        'Appointment scheduling, confirmations, and rescheduling',
        'Patient intake and demographic updates',
        'Insurance eligibility and benefits verification',
        'Referral follow-up and routine administrative coordination',
      ],
      kpi: 'More Time Back for Your Practice Team',
      turnaround: 'Support Aligned With Your Existing Workflow',
      highlight:
        'Routine admin can quickly fill your team’s day. Virtual medical assistance keeps essential tasks moving so staff can spend more time supporting patients and practice priorities.',
      cta: 'Schedule a 1:1 Meeting',
      ctaLink: '/contact-us',
    },
  ];

  const benchmark = (value: string) => <strong className="font-semibold text-[#1E2423]">{value}</strong>;

  const comparisonRows = [
    { feature: 'Clean Claim Rate', apex: '98%', inhouse: 'Depends on internal workflow and staffing', market: <>{benchmark('95–97%+')} is a strong RCM target</> },
    { feature: 'Average Days in A/R', apex: '25 Days', inhouse: 'Depends on team capacity and payer follow-up', market: <>{benchmark('30–35 Days')} is a strong RCM target</> },
    { feature: 'Claim Submission', apex: 'Within 24 Hours', inhouse: 'Can vary with workload and staffing', market: 'Turnaround varies by service level' },
    { feature: 'Denial Management', apex: 'Next action within 48 hours', inhouse: 'Competes with other daily billing priorities', market: 'Process and response times vary' },
    { feature: 'Account Access', apex: '24/7 Access', inhouse: 'Depends on internal systems and availability', market: 'Depends on vendor platform' },
    { feature: 'EHR / EMR Compatibility', apex: 'Works within existing systems', inhouse: 'Uses the practice’s existing setup', market: 'Integration capabilities vary' },
    { feature: 'Billing Cost', apex: 'Starting at 2.99% of collections', inhouse: 'Salaries, benefits, training & technology overhead', market: <>Typically {benchmark('4–10% of collections')}</> },
    { feature: 'Revenue Cycle Support', apex: '8 integrated service areas', inhouse: 'Depends on internal team capacity', market: 'Scope varies by provider and contract' },
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#57B836]/10 border border-[#57B836]/20 text-[#57B836] text-xs font-display font-bold uppercase tracking-wider mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>Full-Spectrum Revenue Cycle Management</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display text-[#0E2925] leading-[1.1] text-balance">
          Medical Billing Solutions Built for Stronger Practice Revenue.
        </h1>
        <p className="mt-6 text-lg sm:text-xl font-display font-light text-[#747773] leading-snug max-w-2xl mx-auto">
          From claim submission and certified coding to credentialing, A/R recovery, payment posting, and denial management, we support the revenue cycle where accuracy, follow-up, and timely action have the greatest impact on getting paid.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact-us"
            className="px-8 py-3.5 rounded-full bg-[#57B836] text-white text-sm font-display font-bold hover:bg-[#0E2925] transition-all shadow-md hover:shadow-lg active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Schedule a 1:1 Meeting</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={onOpenAudit}
            className="px-6 py-3.5 rounded-full bg-white text-[#1E2423] border border-[#E2E7DF] text-sm font-display font-bold hover:border-[#57B836] transition-colors cursor-pointer"
          >
            Get a Free Practice Audit
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs font-medium text-[#747773]">
          {heroStats.map((stat, idx) => (
            <React.Fragment key={stat}>
              {idx > 0 && <span className="text-[#57B836]">·</span>}
              <span>{stat}</span>
            </React.Fragment>
          ))}
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
                  <span className="w-12 h-12 rounded-2xl bg-[#F8FAF7] text-[#57B836] flex items-center justify-center font-bold text-base font-display">
                    {current.number}
                  </span>
                  <div>
                    <span className="text-xs font-display font-bold uppercase tracking-wider text-[#57B836]">
                      {current.tagline}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-display text-[#0E2925] leading-tight">
                      {current.title}
                    </h2>
                  </div>
                </div>

                <p className="text-base text-[#747773] leading-relaxed">
                  {current.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-display font-bold uppercase tracking-wider text-[#1E2423]">
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
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-[#EAF7E6]">
                    Performance Standard
                  </span>
                  <div className="text-3xl sm:text-4xl font-display font-medium text-white leading-tight">
                    {current.kpi}
                  </div>
                  <div className="text-xs text-[#EAF7E6]/80 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#EAF7E6]" />
                    <span>SLA: {current.turnaround}</span>
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10 space-y-3 text-xs text-white/80">
                  <div className="font-semibold text-white">Why This Matters for Your Practice:</div>
                  <p className="leading-relaxed">
                    {current.highlight}
                  </p>
                </div>

                <div className="relative z-10 pt-2">
                  {current.ctaLink ? (
                    <Link
                      to={current.ctaLink}
                      className="w-full py-3.5 px-6 rounded-full bg-[#F8FAF7] text-[#0E2925] text-xs font-display font-bold hover:bg-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{current.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button
                      onClick={onOpenAudit}
                      className="w-full py-3.5 px-6 rounded-full bg-[#F8FAF7] text-[#0E2925] text-xs font-display font-bold hover:bg-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{current.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
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
          <span className="text-xs font-display font-bold uppercase tracking-wider text-[#EAF7E6]">
            Seamless Integration
          </span>
          <h2 className="text-3xl sm:text-5xl font-display text-white leading-tight">
            Your Existing EHR & EMR. Our Billing Support Working Inside It.
          </h2>
          <p className="text-sm sm:text-base text-[#EAF7E6] leading-relaxed">
            APEX works with the systems your practice already relies on, helping billing data move smoothly from documentation to claim submission, payment tracking, and reporting. Your team keeps its familiar workflow while gaining added revenue cycle support behind it.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenAudit}
              className="px-6 py-3 rounded-full bg-[#57B836] text-white text-xs font-display font-bold hover:bg-[#0E2925] transition-colors border border-[#EAF7E6]/30 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Check Your EHR/EMR Compatibility</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* 4. Comparison Table (Apex vs In-House vs Typical Billing Companies) */}
      <section id="comparison" className="space-y-6 pt-4 scroll-mt-[calc(var(--dev-banner-height,0px)_+_6rem)]">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-display font-bold uppercase tracking-wider text-[#57B836]">
            Strategic Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-[#0E2925]">
            How APEX Compares to Other Billing Models
          </h2>
        </div>

        <div className="rounded-[32px] bg-white border border-[#E2E7DF] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E2E7DF] bg-[#F8FAF7]">
                  <th className="p-4 sm:p-5 font-semibold text-[#1E2423]">Operational Dimension</th>
                  <th className="p-4 sm:p-5 font-bold text-[#57B836] bg-[#57B836]/10">APEX Medical Billing</th>
                  <th className="p-4 sm:p-5 font-semibold text-[#747773]">Traditional In-House Billing</th>
                  <th className="p-4 sm:p-5 font-semibold text-[#747773]">Typical Billing Companies / Market</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E7DF]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F8FAF7]/40 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-[#1E2423]">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-semibold text-[#57B836] bg-[#57B836]/5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#57B836] shrink-0" />
                      <span>{row.apex}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-[#747773]">{row.inhouse}</td>
                    <td className="p-4 sm:p-5 text-[#747773]">{row.market}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-sm text-[#747773] text-center max-w-3xl mx-auto">
          APEX combines measurable billing performance with end-to-end revenue cycle support, giving practices a structured alternative to managing billing entirely in-house or relying on limited outsourced services.
        </p>
      </section>

      {/* 5. Bottom Services CTA */}
      <section className="rounded-[32px] sm:rounded-[40px] bg-[#0E2925] text-[#F8FAF7] p-8 sm:p-14 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-display text-white max-w-xl mx-auto">
          See Where Revenue Is Getting Stuck in Your Practice.
        </h2>
        <p className="text-sm sm:text-base text-[#EAF7E6] max-w-lg mx-auto">
          Get a closer look at your billing process, aging A/R, denials, and payment gaps. We’ll help identify where revenue may be slowing down and which areas need attention first.
        </p>
        <button
          onClick={onOpenAudit}
          className="px-8 py-4 rounded-full bg-[#F8FAF7] text-[#0E2925] text-sm font-display font-bold hover:bg-white transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Get a Free Practice Audit</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
