import { Head, Link } from '@inertiajs/react';

const SERVICES = [
    { n: '01', title: 'Credit Report Analysis',     body: 'Full audit across all three bureaus identifying every negative item eligible for legal challenge.' },
    { n: '02', title: 'Custom Dispute Letters',      body: 'Metro 2-compliant letters crafted personally for each account — not mass-produced templates.' },
    { n: '03', title: 'Bureau & Creditor Disputes',  body: 'We dispute with Equifax, Experian, TransUnion, and original creditors simultaneously.' },
    { n: '04', title: '35-Day Progress Updates',     body: 'Every case is reviewed and updated every 35 days, keeping your credit moving forward.' },
    { n: '05', title: 'FCRA & FDCPA Review',         body: 'Attorney review for violations of federal consumer protection laws — included at no extra cost.' },
    { n: '06', title: 'Continuous Processing',       body: 'We run dispute rounds until every legally removable item has been challenged and addressed.' },
];

const PROCESS = [
    { n: '01', title: 'Enroll & Provide ID',  body: 'Submit two forms of ID and your credit monitoring access. That\'s all we need to begin.' },
    { n: '02', title: 'Full Credit Audit',    body: 'We analyze your complete credit profile across all three bureaus and identify every disputable item.' },
    { n: '03', title: 'Dispute Submission',   body: 'Custom letters submitted to bureaus and creditors within 48–72 hours of enrollment confirmation.' },
    { n: '04', title: 'Track & Repeat',       body: 'Every 35 days we update your file, record improvements, and launch the next round of disputes.' },
];

const TESTIMONIALS = [
    { stars: 5, quote: 'Rise Group Credit removed 9 negative items from my report in just 3 rounds. My score went from 520 to 690. I was able to qualify for a mortgage I thought was impossible.', author: 'Maria R., Miami FL' },
    { stars: 5, quote: 'I had collections, late payments, and two charge-offs. After 4 months with Rise, my credit was unrecognizable. The team kept me updated every single step of the way.', author: 'James T., Houston TX' },
    { stars: 5, quote: 'I was skeptical at first. But within 35 days I already saw results. They handle everything — you don\'t have to know anything about credit law to benefit.', author: 'Angela S., Atlanta GA' },
];

export default function Demo2() {
    return (
        <>
            <Head title="Rise Group Credit – Marble Light">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
            </Head>

            <div className="bg-rise-cream text-rise-black font-[Inter] overflow-x-hidden light-marble-veins">

                {/* ── NAV ── */}
                <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-20 py-5 border-b border-rise-black/10 bg-rise-cream/92 backdrop-blur-xl">
                    <img src="/logo.png" alt="Rise Group Credit" className="h-16 object-contain" />
                    <ul className="hidden md:flex gap-10">
                        {['Services','Process','Results','Contact'].map(l => (
                            <li key={l}>
                                <a href={`#${l.toLowerCase()}`}
                                   className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-rise-muted hover:text-rise-gold-dark transition-colors">
                                    {l}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact"
                       className="bg-rise-black text-rise-gold text-[0.7rem] font-semibold tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#2a2520] transition-colors">
                        Free Consultation
                    </a>
                </nav>

                {/* ── HERO ── */}
                <div className="min-h-screen grid md:grid-cols-2 pt-20">
                    {/* Left — copy */}
                    <div className="flex flex-col justify-center px-8 md:px-20 py-20 relative">
                        <div className="absolute top-1/4 bottom-1/4 right-0 w-px"
                             style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)' }} />

                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-8 h-px bg-rise-gold" />
                            <span className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-rise-gold-dark">
                                Credit Restoration Specialists
                            </span>
                        </div>

                        <h1 className="mb-8 animate-fade-up" style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.8rem,5vw,5rem)', fontWeight: 400, lineHeight: 1.12 }}>
                            Your Credit Story<br />Deserves a<br />
                            <em style={{ fontStyle: 'italic', color: '#8B6914' }}>New Chapter.</em>
                        </h1>

                        <p className="text-rise-muted text-[0.93rem] leading-relaxed max-w-md mb-12 font-light animate-fade-up-delay">
                            We use the Metro 2 compliance methodology to identify, dispute, and eliminate inaccurate negative items — so your score finally reflects who you really are.
                        </p>

                        <div className="flex gap-4 flex-wrap animate-fade-up-delay-2">
                            <a href="#contact"
                               className="bg-rise-black text-rise-gold text-[0.72rem] font-semibold tracking-[0.15em] uppercase px-9 py-4 hover:-translate-y-0.5 hover:shadow-xl transition-all">
                                Start For Free
                            </a>
                            <a href="#process"
                               className="border-[1.5px] border-rise-black text-rise-black text-[0.72rem] font-medium tracking-[0.15em] uppercase px-9 py-4 hover:bg-rise-black hover:text-rise-cream transition-all">
                                Our Process
                            </a>
                        </div>
                    </div>

                    {/* Right — score card */}
                    <div className="bg-rise-black flex items-center justify-center px-12 py-20 relative overflow-hidden">
                        <div className="absolute inset-0 pointer-events-none"
                             style={{ background: 'radial-gradient(ellipse 70% 70% at 30% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />

                        <div className="relative border border-rise-gold/20 p-10 text-center max-w-sm w-full"
                             style={{ background: 'rgba(255,255,255,0.02)' }}>
                            {/* corner accents */}
                            {['top-0 left-0 border-t-2 border-l-2', 'bottom-0 right-0 border-b-2 border-r-2'].map((cls, i) => (
                                <div key={i} className={`absolute w-5 h-5 border-rise-gold ${cls}`} />
                            ))}

                            <img src="/logo.png" alt="Rise" className="h-16 object-contain mx-auto mb-8 opacity-80" />

                            <div className="text-gold-gradient leading-none mb-1"
                                 style={{ fontFamily: 'Playfair Display', fontSize: '5rem', fontWeight: 700 }}>
                                750
                            </div>
                            <span className="text-[0.62rem] tracking-[0.2em] uppercase text-white/35 block mb-8">
                                Credit Score Restored
                            </span>

                            <div className="h-1 bg-white/8 mb-8 overflow-hidden">
                                <div className="h-full w-[72%] bg-gold-gradient" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 border-t border-rise-gold/15 pt-6">
                                <div>
                                    <strong className="text-rise-gold block mb-1" style={{ fontFamily: 'Playfair Display', fontSize: '1.6rem', fontWeight: 400 }}>12</strong>
                                    <span className="text-[0.6rem] uppercase tracking-[0.12em] text-white/30">Items Removed</span>
                                </div>
                                <div>
                                    <strong className="text-rise-gold block mb-1" style={{ fontFamily: 'Playfair Display', fontSize: '1.6rem', fontWeight: 400 }}>180</strong>
                                    <span className="text-[0.6rem] uppercase tracking-[0.12em] text-white/30">Points Added</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── STATS ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 bg-rise-black">
                    {[
                        { n: '500+', l: 'Clients Restored' },
                        { n: '97%',  l: 'Success Rate' },
                        { n: '35',   l: 'Day Cycle' },
                        { n: '48h',  l: 'Processing' },
                    ].map((s, i) => (
                        <div key={i} className={`py-10 text-center ${i < 3 ? 'border-r border-white/5' : ''}`}>
                            <strong className="text-rise-gold block leading-none mb-2"
                                    style={{ fontFamily: 'Playfair Display', fontSize: '2.8rem', fontWeight: 400 }}>
                                {s.n}
                            </strong>
                            <span className="text-[0.62rem] tracking-[0.18em] uppercase text-white/30">{s.l}</span>
                        </div>
                    ))}
                </div>

                {/* ── SERVICES ── */}
                <section id="services" className="bg-white px-8 md:px-20 py-28">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-px bg-rise-gold" />
                                <span className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-rise-gold-dark">What We Do</span>
                            </div>
                            <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400, lineHeight: 1.15 }}>
                                Comprehensive Credit<br /><em style={{ color: '#8B6914' }}>Restoration Services</em>
                            </h2>
                        </div>
                        <p className="text-rise-muted text-[0.88rem] leading-relaxed max-w-xs">
                            From the first audit to the final update — every step handled with precision and compliance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rise-shadow">
                        {SERVICES.map(s => (
                            <div key={s.n}
                                 className="bg-white p-10 relative overflow-hidden group hover:bg-rise-cream transition-colors">
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                <span className="text-rise-gold block mb-4 font-light" style={{ fontFamily: 'Playfair Display', fontSize: '1.1rem' }}>
                                    {s.n}
                                </span>
                                <h3 className="mb-3" style={{ fontFamily: 'Playfair Display', fontSize: '1.4rem', fontWeight: 500 }}>
                                    {s.title}
                                </h3>
                                <p className="text-rise-muted text-[0.83rem] leading-relaxed">{s.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── PROCESS ── */}
                <section id="process" className="bg-rise-cream px-8 md:px-20 py-28">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-px bg-rise-gold" />
                        <span className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-rise-gold-dark">How It Works</span>
                    </div>
                    <h2 className="mb-14" style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400, lineHeight: 1.15 }}>
                        Four Steps to a <em style={{ color: '#8B6914' }}>Better Credit Profile</em>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-rise-shadow">
                        {PROCESS.map(p => (
                            <div key={p.n} className="bg-white p-9 relative group hover:bg-[#fffdf7] transition-colors">
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-gradient" />
                                <div className="text-rise-gold/15 leading-none mb-6 select-none"
                                     style={{ fontFamily: 'Playfair Display', fontSize: '3rem', fontWeight: 700 }}>
                                    {p.n}
                                </div>
                                <h4 className="text-[0.8rem] font-semibold tracking-wide uppercase mb-3">{p.title}</h4>
                                <p className="text-rise-muted text-[0.82rem] leading-relaxed">{p.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── TESTIMONIALS ── */}
                <section id="results" className="bg-rise-black px-8 md:px-20 py-28 text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="w-8 h-px bg-rise-gold" />
                        <span className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-rise-gold">Client Results</span>
                    </div>
                    <h2 className="text-white mb-14" style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400 }}>
                        Real People. <em style={{ color: '#C9A84C' }}>Real Results.</em>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i}
                                 className="border border-rise-gold/15 p-9 text-left hover:border-rise-gold/40 hover:bg-rise-gold/[0.03] transition-all">
                                <div className="text-rise-gold text-sm mb-5 tracking-wider">{'★'.repeat(t.stars)}</div>
                                <p className="text-white/55 text-[0.85rem] leading-relaxed italic mb-6">"{t.quote}"</p>
                                <span className="text-[0.7rem] tracking-[0.12em] uppercase text-rise-gold">— {t.author}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CTA ── */}
                <div id="contact" className="grid md:grid-cols-2 min-h-80">
                    <div className="bg-gold-gradient p-16 md:p-20 flex flex-col justify-center">
                        <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2.8rem', fontWeight: 400, color: '#1A1A1A', lineHeight: 1.2 }}>
                            Your Future Starts<br />With Your Credit.
                        </h2>
                        <p className="text-rise-black/60 text-[0.88rem] leading-relaxed mt-4">
                            A strong credit profile opens doors — to homes, businesses, and opportunities. Let's start rebuilding yours today.
                        </p>
                    </div>
                    <div className="bg-rise-black p-16 md:p-20 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-px bg-rise-gold" />
                            <span className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-rise-gold">Free Consultation</span>
                        </div>
                        <h3 className="text-white mb-3" style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem', fontWeight: 400 }}>
                            No cost. No obligation.<br />Just results.
                        </h3>
                        <p className="text-white/40 text-[0.85rem] leading-relaxed mb-8">
                            Speak with a credit specialist today and get a free analysis of your credit report.
                        </p>
                        <a href="tel:+18000000000"
                           className="bg-gold-gradient text-rise-black text-[0.72rem] font-bold tracking-[0.18em] uppercase px-8 py-4 hover:opacity-90 transition-opacity self-start">
                            Schedule Free Consultation
                        </a>
                    </div>
                </div>

                {/* ── FOOTER ── */}
                <footer className="flex items-center justify-between flex-wrap gap-4 px-8 md:px-20 py-6 border-t border-rise-black/10 bg-rise-cream">
                    <img src="/logo.png" alt="Rise Group Credit" className="h-9 object-contain" />
                    <p className="text-[0.7rem] text-rise-muted tracking-wide">&copy; 2025 Rise Group Credit. All Rights Reserved.</p>
                    <p className="text-[0.65rem] text-rise-muted/60">Credit restoration services. Results may vary.</p>
                </footer>

                {/* Demo switcher */}
                <div className="fixed bottom-6 right-6 flex gap-2 z-50">
                    {[1,2,3].map(n => (
                        <Link key={n} href={`/demo${n}`}
                              className={`w-9 h-9 flex items-center justify-center text-[0.7rem] font-bold border transition-all ${n===2 ? 'bg-rise-gold text-rise-black border-rise-gold' : 'bg-rise-black border-rise-gold/40 text-rise-gold hover:border-rise-gold'}`}>
                            {n}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
