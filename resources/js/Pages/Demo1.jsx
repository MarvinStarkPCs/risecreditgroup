import { Head, Link } from '@inertiajs/react';

const NAV_LINKS = ['Services', 'Process', 'Why Us', 'Contact'];

const STATS = [
    { num: '500+', label: 'Clients Restored' },
    { num: '97%',  label: 'Success Rate' },
    { num: '35',   label: 'Day Update Cycle' },
    { num: '48h',  label: 'Processing Time' },
];

const SERVICES = [
    { n: '01', title: 'Credit Report Analysis',      body: 'Full audit across all three bureaus identifying every negative item eligible for legal challenge.' },
    { n: '02', title: 'Custom Dispute Letters',       body: 'Metro 2-compliant letters crafted personally for each account — not mass-produced templates.' },
    { n: '03', title: 'Bureau & Creditor Disputes',   body: 'Disputes sent to Equifax, Experian, TransUnion, and original creditors simultaneously.' },
    { n: '04', title: '35-Day Progress Updates',      body: 'Every case is reviewed and updated every 35 days, keeping your credit moving forward.' },
    { n: '05', title: 'FCRA & FDCPA Review',          body: 'Attorney review for violations of federal consumer protection laws — included at no extra cost.' },
    { n: '06', title: 'Continuous Processing',        body: 'We run dispute rounds until every legally removable item has been challenged and addressed.' },
];

const PROCESS = [
    { n: '1', title: 'Enroll & Provide ID',  body: 'Submit two forms of identification and your credit monitoring access. That\'s all we need to begin.' },
    { n: '2', title: 'Full Credit Audit',    body: 'We analyze your complete credit profile across all three bureaus and identify every disputable item.' },
    { n: '3', title: 'Dispute Submission',   body: 'Custom letters are submitted to bureaus and creditors within 48–72 hours of your enrollment.' },
    { n: '4', title: 'Track & Repeat',       body: 'Every 35 days we update your file, record improvements, and launch the next round of disputes.' },
];

const WHY = [
    { title: 'Metro 2 Compliance',          body: 'Industry-standard Metro 2 formatting — creditors and bureaus are legally required to respond.' },
    { title: 'Attorney-Reviewed Cases',     body: 'Legal review for FCRA and FDCPA violations at no extra cost — an advantage most services don\'t offer.' },
    { title: 'No Contracts. No Hidden Fees.', body: 'Transparent pricing with no long-term commitments. Pay for results, not promises.' },
    { title: 'Dedicated Case Management',   body: 'A specialist manages your account from start to finish with regular updates every cycle.' },
];

export default function Demo1() {
    return (
        <>
            <Head title="Rise Group Credit – Dark Luxury">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
            </Head>

            <div className="bg-[#0D0D0D] text-white font-[Montserrat] overflow-x-hidden">

                {/* ── NAV ── */}
                <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5 border-b border-gold-subtle bg-[rgba(13,13,13,0.88)] backdrop-blur-xl">
                    <img src="/logo.png" alt="Rise Group Credit" className="h-20 object-contain drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)] rounded-sm" />
                    <ul className="hidden md:flex gap-10">
                        {NAV_LINKS.map(l => (
                            <li key={l}>
                                <a href={`#${l.toLowerCase().replace(' ', '-')}`}
                                   className="text-[0.68rem] font-medium tracking-[0.12em] uppercase text-rise-marble hover:text-rise-gold transition-colors">
                                    {l}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact"
                       className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase px-6 py-2.5 border border-rise-gold text-rise-gold hover:bg-rise-gold hover:text-rise-black transition-all">
                        Get Started
                    </a>
                </nav>

                {/* ── HERO ── */}
                <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
                    {/* glow */}
                    <div className="absolute inset-0 pointer-events-none"
                         style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />
                    <div className="absolute inset-0 marble-veins pointer-events-none" />

                    <div className="relative z-10 max-w-3xl animate-fade-up">
                        <span className="inline-block text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-rise-gold border border-gold-subtle px-5 py-2 mb-10">
                            Credit Restoration Specialists
                        </span>

                        <h1 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(3.5rem,8vw,7rem)', fontWeight: 300, lineHeight: 1.0, marginBottom: '1.8rem', letterSpacing: '-0.01em' }}>
                            Rebuild.<br />
                            <span className="text-gold-gradient">Restore.</span><br />
                            Rise.
                        </h1>

                        <p className="text-[0.95rem] font-light text-rise-marble/60 leading-relaxed max-w-lg mx-auto mb-12 tracking-wide animate-fade-up-delay">
                            We leverage proven compliance methodologies to dispute inaccurate negative items and help you reclaim the financial future you deserve.
                        </p>

                        <div className="flex gap-4 justify-center flex-wrap animate-fade-up-delay-2">
                            <a href="#contact" className="bg-gold-gradient text-rise-black text-[0.72rem] font-bold tracking-[0.18em] uppercase px-10 py-4 hover:opacity-90 transition-opacity">
                                Free Consultation
                            </a>
                            <a href="#process" className="border border-rise-gold/40 text-rise-gold text-[0.72rem] font-medium tracking-[0.18em] uppercase px-10 py-4 hover:border-rise-gold hover:bg-rise-gold/5 transition-all">
                                See How It Works
                            </a>
                        </div>
                    </div>

                    {/* scroll indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[0.6rem] tracking-[0.2em] uppercase text-rise-marble/40">
                        <span>Scroll</span>
                        <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, #C9A84C, transparent)', animation: 'scrollDown 2s ease-in-out infinite' }} />
                    </div>
                </section>

                {/* ── STATS ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-gold-subtle">
                    {STATS.map((s, i) => (
                        <div key={i} className={`py-10 text-center ${i < 3 ? 'border-r border-gold-subtle' : ''}`}>
                            <span className="text-gold-gradient block leading-none mb-2"
                                  style={{ fontFamily: 'Cormorant Garamond', fontSize: '3.2rem', fontWeight: 600 }}>
                                {s.num}
                            </span>
                            <span className="text-[0.62rem] tracking-[0.18em] uppercase text-rise-marble/50">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* ── SERVICES ── */}
                <section id="services" className="px-8 md:px-16 py-28">
                    <span className="text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-rise-gold block mb-3">What We Do</span>
                    <h2 className="mb-3" style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(2.2rem,4vw,3.8rem)', fontWeight: 300, lineHeight: 1.1 }}>
                        Comprehensive Credit <span className="text-gold-gradient">Restoration Services</span>
                    </h2>
                    <p className="text-rise-marble/45 text-[0.88rem] leading-relaxed max-w-md mb-16">
                        Using the Metro 2 compliance method, we identify and dispute every inaccuracy holding your score back.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rise-gold/20">
                        {SERVICES.map(s => (
                            <div key={s.n}
                                 className="bg-rise-black p-10 relative overflow-hidden group hover:bg-[#1f1c17] transition-colors">
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                <span className="text-rise-gold/12 block mb-6 leading-none select-none"
                                      style={{ fontFamily: 'Cormorant Garamond', fontSize: '3.5rem', fontWeight: 700 }}>
                                    {s.n}
                                </span>
                                <h3 className="mb-3" style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.55rem', fontWeight: 500 }}>
                                    {s.title}
                                </h3>
                                <p className="text-rise-marble/45 text-[0.83rem] leading-relaxed">{s.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── PROCESS ── */}
                <section id="process" className="bg-rise-black px-8 md:px-16 py-28">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-rise-gold block mb-3">Our Process</span>
                            <h2 className="mb-3" style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(2.2rem,4vw,3.8rem)', fontWeight: 300, lineHeight: 1.1 }}>
                                A Proven Path to <span className="text-gold-gradient">Better Credit</span>
                            </h2>
                            <p className="text-rise-marble/45 text-[0.88rem] leading-relaxed max-w-md mb-12">
                                From the moment you enroll, we take over the complex work so you can focus on your future.
                            </p>
                            <div className="divide-y divide-rise-gold/15">
                                {PROCESS.map(p => (
                                    <div key={p.n} className="flex gap-6 py-6">
                                        <span className="text-rise-gold min-w-[2rem] leading-none" style={{ fontFamily: 'Cormorant Garamond', fontSize: '2rem', fontWeight: 700 }}>{p.n}</span>
                                        <div>
                                            <h4 className="text-[0.82rem] font-semibold tracking-wide uppercase mb-1.5">{p.title}</h4>
                                            <p className="text-rise-marble/45 text-[0.82rem] leading-relaxed">{p.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative border border-rise-gold/20 p-12 flex flex-col items-center justify-center min-h-80"
                             style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.04), transparent)' }}>
                            <div className="absolute inset-2 border border-rise-gold/10 pointer-events-none" />
                            <img src="/logo.png" alt="Rise" className="h-20 object-contain opacity-60 mb-8" />
                            <p className="text-center text-rise-marble/35 text-[0.8rem] leading-relaxed tracking-wide">
                                Certified credit restoration professionals using the Metro 2 Compliance Method — trusted by hundreds of clients nationwide.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── WHY RISE ── */}
                <section id="why-us" className="px-8 md:px-16 py-28">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        {/* decorative panel */}
                        <div className="relative border border-rise-gold/20 aspect-[4/5] flex items-end p-8 overflow-hidden"
                             style={{ background: 'linear-gradient(135deg, #1a1612, #0d0d0d)' }}>
                            <span className="absolute text-[10rem] font-bold text-rise-gold/[0.04] select-none"
                                  style={{ fontFamily: 'Cormorant Garamond', top: '-2%', right: '-5%' }}>RISE</span>
                            <div className="w-full border border-rise-gold/20 bg-[rgba(13,13,13,0.9)] p-6 backdrop-blur-sm">
                                <strong className="text-gold-gradient block mb-1" style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.5rem' }}>
                                    Restore. Rise.
                                </strong>
                                <span className="text-[0.7rem] text-rise-marble/40 tracking-wider">Your financial future starts here</span>
                            </div>
                        </div>

                        <div>
                            <span className="text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-rise-gold block mb-3">Why Rise Group Credit</span>
                            <h2 className="mb-3" style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(2.2rem,4vw,3.8rem)', fontWeight: 300, lineHeight: 1.1 }}>
                                Excellence in Every <span className="text-gold-gradient">Case We Handle</span>
                            </h2>
                            <p className="text-rise-marble/45 text-[0.88rem] leading-relaxed max-w-md mb-10">
                                We are not a template-based service. Every client receives a personalized strategy built on compliance and results.
                            </p>
                            <div className="flex flex-col gap-3">
                                {WHY.map(w => (
                                    <div key={w.title}
                                         className="flex gap-4 items-start p-5 border border-rise-gold/20 hover:border-rise-gold/50 hover:bg-rise-gold/[0.03] transition-all">
                                        <div className="flex-shrink-0 w-5 h-5 bg-gold-gradient flex items-center justify-center mt-0.5">
                                            <svg className="w-2.5 h-2.5 stroke-rise-black" viewBox="0 0 12 12" fill="none" strokeWidth="3">
                                                <polyline points="1,6 4,9 11,2" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-[0.82rem] font-semibold mb-1">{w.title}</h4>
                                            <p className="text-rise-marble/45 text-[0.8rem] leading-relaxed">{w.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section id="contact" className="text-center py-32 px-6 border-t border-rise-gold/20"
                         style={{ background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1612 50%, #0d0d0d 100%)' }}>
                    <span className="text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-rise-gold block mb-6">Begin Your Journey</span>
                    <h2 className="mb-5" style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 300, lineHeight: 1.1 }}>
                        Ready to <span className="text-gold-gradient">Rise</span> Above<br />Your Credit Challenges?
                    </h2>
                    <p className="text-rise-marble/45 text-[0.95rem] max-w-md mx-auto mb-12 leading-relaxed">
                        Schedule your free, no-obligation credit consultation today. Our specialists are ready to review your case.
                    </p>
                    <a href="tel:+18000000000"
                       className="bg-gold-gradient text-rise-black text-[0.72rem] font-bold tracking-[0.18em] uppercase px-12 py-4 hover:opacity-90 transition-opacity inline-block">
                        Schedule Free Consultation
                    </a>
                </section>

                {/* ── FOOTER ── */}
                <footer className="flex items-center justify-between flex-wrap gap-4 px-16 py-6 border-t border-rise-gold/15">
                    <img src="/logo.png" alt="Rise Group Credit" className="h-8 opacity-60 object-contain" />
                    <p className="text-[0.68rem] text-rise-marble/30 tracking-wide">&copy; 2025 Rise Group Credit. All Rights Reserved.</p>
                    <p className="text-[0.62rem] text-rise-marble/20">Credit restoration services. Results may vary.</p>
                </footer>

                {/* Demo switcher */}
                <div className="fixed bottom-6 right-6 flex gap-2 z-50">
                    {[1,2,3].map(n => (
                        <Link key={n} href={`/demo${n}`}
                              className={`w-9 h-9 flex items-center justify-center text-[0.7rem] font-bold border transition-all ${n===1 ? 'bg-rise-gold text-rise-black border-rise-gold' : 'border-rise-gold/40 text-rise-gold hover:border-rise-gold'}`}>
                            {n}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
