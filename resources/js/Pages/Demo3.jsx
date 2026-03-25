import { Head, Link } from '@inertiajs/react';

const ITEMS_HANDLED = [
    'Collections & Charge-offs',
    'Late Payments & Delinquencies',
    'Bankruptcies',
    'Hard Inquiries',
    'Identity Errors & Mixed Files',
    'Repossession',
    'Judgments',
];

const SERVICES = [
    { n: '01', title: 'Advanced Credit Report Audit',              body: 'Comprehensive tri-bureau analysis (Equifax, Experian, TransUnion) to identify all inaccurate, unverifiable, and legally disputable items — structured for strategic dispute execution.' },
    { n: '02', title: 'Fully Customized Dispute Strategy (No Templates)', body: "Every dispute is individually crafted based on the client's report, account history, and legal positioning — leveraging FCRA, FDCPA, and Metro 2 standards." },
    { n: '03', title: 'Metro 2–Compliant Dispute Letter Execution', body: 'Precision-formatted dispute letters aligned with Metro 2 reporting standards to challenge data integrity at the highest level.' },
    { n: '04', title: 'Bureau & Creditor Submission (Fast Turnaround)', body: 'All disputes are submitted to credit bureaus and original creditors within 48–72 hours — ensuring operational speed without sacrificing accuracy.' },
    { n: '05', title: 'FCRA & FDCPA Legal Positioning',            body: 'Each case is reinforced using federal consumer protection laws to identify violations, strengthen disputes, and increase the probability of deletions.' },
    { n: '06', title: 'Multi-Round Dispute Processing & Cycle Management', body: 'Ongoing dispute cycles every 30–35 days, continuously adapted based on responses, results, and evolving account conditions.' },
];

const PROCESS = [
    { n: '01', title: 'Client Onboarding',                    body: 'You grant us secure team access within your CRM (Credit Repair Cloud, DisputeFox, or similar), allowing us to operate directly inside your system — fully white-label and seamlessly integrated into your workflow.' },
    { n: '02', title: 'Audit & Strategic Planning',           body: 'We conduct a comprehensive tri-bureau audit and develop a fully customized dispute strategy based on FCRA, FDCPA, and Metro 2 compliance standards.' },
    { n: '03', title: 'Dispute Execution',                    body: 'Precision-crafted, legally structured disputes are generated and submitted to credit bureaus and creditors within 48–72 hours.' },
    { n: '04', title: 'Continuous Optimization & Processing', body: 'We track results, refine strategies, and execute ongoing dispute cycles every 30–35 days — ensuring consistent progress across all client files.' },
];

const WHY = [
    {
        icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
        title: 'Metro 2 Compliance Infrastructure',
        body: 'Every dispute is structured using Metro 2 standards — ensuring alignment with the exact reporting framework used by bureaus and creditors, increasing accuracy and response effectiveness.',
    },
    {
        icon: <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />,
        title: 'Legal-Based Dispute Strategy (FCRA & FDCPA)',
        body: 'Every case is developed using federal compliance laws to identify violations and strengthen dispute positioning — going beyond basic dispute processing.',
    },
    {
        icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
        title: 'Flexible Partnership Model',
        body: 'We operate under a clear service agreement designed to protect both parties — with flexible terms and simple cancellation notice, allowing you to scale without long-term constraints.',
    },
    {
        icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />,
        title: '48–72 Hour Turnaround',
        body: 'From CRM integration to dispute submission, your cases are processed quickly and consistently — supporting high-volume client operations without delays.',
    },
];

export default function Demo3() {
    return (
        <>
            <Head title="Rise Group Credit – Bold Modern">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
            </Head>

            <div className="bg-rise-cream text-rise-black overflow-x-hidden" style={{ fontFamily: 'DM Sans' }}>

                {/* ── NAV ── */}
                <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-4 bg-rise-black/95 border-b border-rise-gold/15 backdrop-blur-xl">
                    <img src="/logo.png" alt="Rise Group Credit" className="h-20 object-contain drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)] rounded-sm" />
                    <ul className="hidden md:flex gap-10">
                        {['Services','Process','Why Us','Contact'].map(l => (
                            <li key={l}>
                                <a href={`#${l.toLowerCase().replace(' ', '-')}`}
                                   className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-white/45 hover:text-rise-gold transition-colors">
                                    {l}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Link href="/apply"
                       className="bg-gold-gradient text-rise-black text-[0.7rem] font-bold tracking-[0.12em] uppercase px-6 py-2.5 hover:opacity-85 transition-opacity">
                        Book a Demo
                    </Link>
                </nav>

                {/* ── HERO — Split ── */}
                <div className="min-h-screen grid md:grid-cols-[55%_45%] pt-16">

                    {/* Left — dark */}
                    <div className="bg-rise-black relative flex flex-col justify-end px-8 md:px-16 py-20 overflow-hidden min-h-[60vh]">
                        {/* glow */}
                        <div className="absolute inset-0 pointer-events-none"
                             style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 40%, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />
                        {/* giant R watermark */}
                        <span className="absolute select-none pointer-events-none text-rise-gold/[0.04] leading-none"
                              style={{ fontFamily: 'DM Serif Display', fontSize: '35rem', top: '-5%', right: '-8%', lineHeight: 1 }}>
                            R
                        </span>

                        <div className="relative z-10 animate-fade-up">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-px bg-rise-gold" />
                                <span className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-rise-gold">Dispute Processing for Credit Repair Companies</span>
                            </div>

                            <h1 className="text-white mb-8"
                                style={{ fontFamily: 'DM Serif Display', fontSize: 'clamp(3rem,6vw,6rem)', fontWeight: 400, lineHeight: 1.0 }}>
                                Outsource Your Disputes.<br />
                                <span className="text-gold-gradient">Scale Your Credit Repair</span><br />
                                Company Faster.
                            </h1>

                            <p className="text-white/45 text-[0.9rem] leading-relaxed max-w-md mb-12 font-light">
                                We integrate directly into your CRM and manage your entire dispute process using fully customized, law-based strategies — built for scalability, compliance, and performance.
                            </p>

                            <div className="flex gap-4 flex-wrap">
                                <Link href="/apply"
                                   className="bg-gold-gradient text-rise-black text-[0.72rem] font-bold tracking-[0.18em] uppercase px-10 py-4 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-rise-gold/30 transition-all">
                                    Book a Demo
                                </Link>
                                <a href="#process"
                                   className="border border-rise-gold/35 text-white/70 text-[0.72rem] font-medium tracking-[0.18em] uppercase px-10 py-4 hover:border-rise-gold hover:text-rise-gold transition-all">
                                    See How It Works
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right — cream */}
                    <div className="bg-rise-cream border-l border-rise-gold/20 flex flex-col justify-center px-8 md:px-12 py-20 relative">
                        <div className="absolute inset-0 light-marble-veins pointer-events-none" />

                        {/* Score ring */}
                        <div className="relative z-10 mb-10">
                            <span className="text-[0.62rem] font-medium tracking-[0.22em] uppercase text-rise-muted block mb-5">
                                Client Score Transformation
                            </span>
                            <div className="flex items-center gap-6">
                                <div className="relative w-36 h-36 flex-shrink-0">
                                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(200,200,200,0.25)" strokeWidth="2.5" />
                                        <circle cx="18" cy="18" r="15.9" fill="none"
                                                stroke="url(#goldGrad)" strokeWidth="2.5"
                                                strokeDasharray="82 100" strokeLinecap="round" />
                                        <defs>
                                            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#8B6914" />
                                                <stop offset="100%" stopColor="#F0C040" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-gold-gradient leading-none font-bold"
                                              style={{ fontFamily: 'DM Serif Display', fontSize: '2.2rem' }}>750</span>
                                        <span className="text-[0.55rem] text-rise-muted tracking-wider">pts</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[0.82rem] text-rise-muted mb-1">From <strong className="text-rise-black">350</strong> to <strong className="text-rise-black">750</strong></p>
                                    <p className="text-[0.82rem]"><strong className="text-rise-gold-dark">+400 points</strong></p>
                                    <p className="text-[0.75rem] text-rise-muted mt-1">in 6 rounds of disputes</p>
                                </div>
                            </div>
                        </div>

                        {/* What we handle */}
                        <div className="relative z-10">
                            <span className="text-[0.62rem] font-medium tracking-[0.22em] uppercase text-rise-muted block mb-4">
                                What We Handle
                            </span>
                            <div className="divide-y divide-rise-shadow">
                                {ITEMS_HANDLED.map(item => (
                                    <div key={item} className="flex items-center gap-3 py-3">
                                        <div className="w-2 h-2 rounded-full bg-gold-gradient flex-shrink-0" />
                                        <span className="text-[0.83rem]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── METRICS BAR ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 bg-gold-gradient">
                    {[
                        { n: '5,000+', l: 'Disputes Processed' },
                        { n: '97%',   l: 'Client Retention Rate' },
                        { n: '48h',   l: 'Processing Time' },
                        { n: '1,000+', l: 'Scalable to 1,000+ Clients' },
                    ].map((s, i) => (
                        <div key={i} className={`py-8 text-center ${i < 3 ? 'border-r border-rise-black/10' : ''}`}>
                            <strong className="block leading-none mb-1.5 text-rise-black"
                                    style={{ fontFamily: 'DM Serif Display', fontSize: '2.5rem', fontWeight: 400 }}>
                                {s.n}
                            </strong>
                            <span className="text-[0.62rem] tracking-[0.2em] uppercase text-rise-black/60">{s.l}</span>
                        </div>
                    ))}
                </div>

                {/* ── SERVICES — list style ── */}
                <section id="services" className="bg-white px-8 md:px-16 py-28">
                    <div className="grid md:grid-cols-2 gap-16 mb-0">
                        {/* sticky header */}
                        <div className="md:sticky md:top-28 md:self-start">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-px bg-rise-gold" />
                                <span className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-rise-gold-dark">Services</span>
                            </div>
                            <h2 className="mb-5" style={{ fontFamily: 'DM Serif Display', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400, lineHeight: 1.1 }}>
                                Everything You Need to<br />Scale Your Credit Repair <em>Operations</em>
                            </h2>
                            <p className="text-rise-muted text-[0.88rem] leading-relaxed max-w-xs">
                                We handle the entire dispute lifecycle for your clients — from audit to execution — so you can scale faster without increasing operational overhead.
                            </p>
                        </div>

                        <div className="divide-y divide-rise-shadow">
                            {SERVICES.map(s => (
                                <div key={s.n}
                                     className="grid grid-cols-[3rem_1fr] gap-4 py-7 group hover:bg-rise-cream/60 transition-colors px-3 -mx-3 rounded">
                                    <span className="text-rise-gold/40 group-hover:text-rise-gold transition-colors leading-tight"
                                          style={{ fontFamily: 'DM Serif Display', fontSize: '1.3rem', fontWeight: 400 }}>
                                        {s.n}
                                    </span>
                                    <div>
                                        <h3 className="text-[0.93rem] font-medium mb-1.5">{s.title}</h3>
                                        <p className="text-rise-muted text-[0.82rem] leading-relaxed">{s.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PROCESS ── */}
                <section id="process" className="bg-rise-black px-8 md:px-16 py-28">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-px bg-rise-gold" />
                        <span className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-rise-gold">Our Process</span>
                    </div>
                    <h2 className="text-white mb-4" style={{ fontFamily: 'DM Serif Display', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400, lineHeight: 1.1 }}>
                        Built to Scale Your<br /><em style={{ color: '#C9A84C' }}>Credit Repair Operations</em>
                    </h2>
                    <p className="text-white/70 text-[0.88rem] leading-relaxed max-w-md mb-14">
                        Our streamlined dispute processing system allows you to <span className="text-rise-gold">handle more clients</span> without increasing workload, staff, or operational complexity.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-px border-t border-rise-gold/15">
                        {PROCESS.map(p => (
                            <div key={p.n} className="relative px-6 pt-8 pb-6 group">
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-gradient" />
                                <div className="text-rise-gold/40 leading-none mb-6 select-none"
                                     style={{ fontFamily: 'DM Serif Display', fontSize: '4rem', fontWeight: 400 }}>
                                    {p.n}
                                </div>
                                <h4 className="text-[0.78rem] font-semibold tracking-[0.1em] uppercase text-rise-gold mb-3">{p.title}</h4>
                                <p className="text-white/75 text-[0.82rem] leading-relaxed">{p.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── WHY ── */}
                <section id="why-us" className="bg-rise-cream px-8 md:px-16 py-28">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-px bg-rise-gold" />
                        <span className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-rise-gold-dark">Why Rise Group Credit</span>
                    </div>
                    <h2 className="mb-4" style={{ fontFamily: 'DM Serif Display', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400, lineHeight: 1.1 }}>
                        Built on Precision. Driven by Compliance.<br /><em style={{ color: '#8B6914' }}>Designed to Scale.</em>
                    </h2>
                    <p className="text-rise-gold-dark/70 text-[0.82rem] leading-relaxed max-w-lg mb-14">
                        Our process combines legal frameworks, data compliance, and fully customized execution to deliver consistent results at scale for credit repair companies.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rise-shadow">
                        {WHY.map(w => (
                            <div key={w.title}
                                 className="bg-white p-10 relative overflow-hidden group hover:bg-rise-cream transition-colors">
                                <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-gold-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                                <div className="w-9 h-9 border border-rise-gold/30 flex items-center justify-center mb-6 group-hover:border-rise-gold transition-colors">
                                    <svg className="w-4 h-4 stroke-rise-gold" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                                        {w.icon}
                                    </svg>
                                </div>
                                <h3 className="mb-3" style={{ fontFamily: 'DM Serif Display', fontSize: '1.5rem', fontWeight: 400 }}>
                                    {w.title}
                                </h3>
                                <p className="text-rise-muted text-[0.83rem] leading-relaxed">{w.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CTA ── */}
                <section id="contact" className="bg-rise-black text-center py-32 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none"
                         style={{ background: 'radial-gradient(circle 400px at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />
                    <div className="relative z-10 max-w-xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-8 h-px bg-rise-gold" />
                            <span className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-rise-gold">Begin Today</span>
                        </div>
                        <h2 className="text-white mb-5" style={{ fontFamily: 'DM Serif Display', fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 400, lineHeight: 1.1 }}>
                            Ready to Scale Your Credit Repair Business?
                        </h2>
                        <p className="text-white/40 text-[0.93rem] leading-relaxed mb-12">
                            Integrate our team into your CRM and let us handle your dispute processing — so you can focus on acquiring clients and scaling your business.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Link href="/apply"
                               className="bg-gold-gradient text-rise-black text-[0.72rem] font-bold tracking-[0.18em] uppercase px-10 py-4 hover:opacity-90 transition-opacity">
                                Book a Demo
                            </Link>
                            <a href="#services"
                               className="border border-rise-gold/35 text-white/70 text-[0.72rem] font-medium tracking-[0.18em] uppercase px-10 py-4 hover:border-rise-gold hover:text-rise-gold transition-all">
                                Learn More First
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── FOOTER ── */}
                <footer className="flex items-center justify-between flex-wrap gap-4 px-8 md:px-16 py-5 border-t border-rise-gold/10 bg-rise-black">
                    <img src="/logo.png" alt="Rise Group Credit" className="h-8 object-contain opacity-65" />
                    <p className="text-[0.68rem] text-white/25 tracking-wide">&copy; 2025 Rise Group Credit. All Rights Reserved.</p>
                    <p className="text-[0.62rem] text-white/20">Credit restoration services. Results may vary.</p>
                </footer>

            </div>
        </>
    );
}
