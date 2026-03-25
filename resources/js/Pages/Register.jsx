import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

const STEPS = ['Business', 'Contact', 'Agreement', 'Confirm'];

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        company: '', website: '', address: '', city: '', state: '', zip: '', source: '',
        name: '', email: '', phone: '',
        agree1: false, agree2: false, signature: '',
    });

    const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
    const inp = 'w-full bg-white/5 border border-white/10 text-white placeholder-white/25 text-[0.83rem] px-4 py-3 focus:outline-none focus:border-rise-gold/60 transition-colors';
    const label = 'block text-white/50 text-[0.72rem] tracking-[0.12em] uppercase mb-1.5';

    return (
        <>
            <Head title="Standard Plan Registration — Rise Group Credit" />
            <div className="min-h-screen bg-rise-black text-white font-sans">

                {/* Nav */}
                <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-16 h-14 sm:h-16 border-b border-white/5 bg-rise-black/95 backdrop-blur-sm">
                    <Link href="/" className="text-[0.75rem] sm:text-[0.8rem] font-bold tracking-[0.18em] sm:tracking-[0.22em] uppercase text-white hover:text-rise-gold transition-colors">
                        Rise Group Credit
                    </Link>
                    <Link href="/" className="text-white/40 text-[0.68rem] sm:text-[0.72rem] tracking-[0.1em] hover:text-rise-gold transition-colors">
                        ← Back
                    </Link>
                </nav>

                <div className="pt-20 sm:pt-24 pb-16 px-4 flex flex-col items-center min-h-screen">

                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-10 max-w-lg w-full">
                        <p className="text-rise-gold text-[0.62rem] tracking-[0.28em] uppercase mb-2 sm:mb-3">Standard Plan</p>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.06em] text-white mb-2 sm:mb-3">Partner Registration</h1>
                        <p className="text-white/40 text-[0.78rem] sm:text-[0.82rem]">Complete the form below to begin your partnership.</p>
                    </div>

                    {/* Step indicator */}
                    <div className="flex items-center mb-8 sm:mb-12 w-full max-w-xl">
                        {STEPS.map((s, i) => (
                            <div key={i} className="flex items-center flex-1">
                                <div className="flex flex-col items-center flex-1">
                                    <div className={`w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-[0.6rem] sm:text-[0.65rem] font-bold border transition-all ${step > i + 1 ? 'bg-rise-gold border-rise-gold text-rise-black' : step === i + 1 ? 'border-rise-gold text-rise-gold bg-transparent' : 'border-white/15 text-white/25 bg-transparent'}`}>
                                        {step > i + 1 ? '✓' : i + 1}
                                    </div>
                                    <span className={`mt-1 text-[0.55rem] sm:text-[0.58rem] tracking-[0.08em] uppercase ${step === i + 1 ? 'text-rise-gold' : 'text-white/20'}`}>{s}</span>
                                </div>
                                {i < STEPS.length - 1 && (
                                    <div className={`h-px flex-1 mx-0.5 mb-4 transition-all ${step > i + 1 ? 'bg-rise-gold/60' : 'bg-white/10'}`} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Card */}
                    <div className="w-full max-w-xl border border-white/8 bg-white/2 p-5 sm:p-8 md:p-10">

                        {/* ── Step 1 ── */}
                        {step === 1 && (
                            <div>
                                <h2 className="text-[0.98rem] sm:text-[1.05rem] font-medium tracking-[0.06em] text-white mb-1">Business Information</h2>
                                <p className="text-white/35 text-[0.78rem] sm:text-[0.8rem] mb-6 sm:mb-8">Tell us about your credit repair business</p>
                                <div className="space-y-4 sm:space-y-5">
                                    <div>
                                        <label className={label}>Company Name <span className="text-rise-gold">*</span></label>
                                        <input className={inp} placeholder="Enter your company name" value={form.company} onChange={e => set('company', e.target.value)} />
                                    </div>
                                    <div>
                                        <label className={label}>Website <span className="text-white/25">(Optional)</span></label>
                                        <input className={inp} placeholder="https://www.yourcompany.com" value={form.website} onChange={e => set('website', e.target.value)} />
                                    </div>
                                    <div>
                                        <label className={label}>Business Address <span className="text-rise-gold">*</span></label>
                                        <input className={inp} placeholder="Street address" value={form.address} onChange={e => set('address', e.target.value)} />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <div>
                                            <label className={label}>City <span className="text-rise-gold">*</span></label>
                                            <input className={inp} placeholder="City" value={form.city} onChange={e => set('city', e.target.value)} />
                                        </div>
                                        <div>
                                            <label className={label}>State <span className="text-rise-gold">*</span></label>
                                            <input className={inp} placeholder="State" value={form.state} onChange={e => set('state', e.target.value)} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className={label}>ZIP Code <span className="text-rise-gold">*</span></label>
                                        <input className={inp} placeholder="ZIP Code" value={form.zip} onChange={e => set('zip', e.target.value)} />
                                    </div>
                                    <div>
                                        <label className={label}>How did you hear about us?</label>
                                        <input className={inp} placeholder="e.g., Google, Referral, Social Media" value={form.source} onChange={e => set('source', e.target.value)} />
                                    </div>
                                </div>
                                <button onClick={() => setStep(2)} className="mt-8 sm:mt-10 w-full bg-gold-gradient text-rise-black text-[0.72rem] font-bold tracking-[0.18em] uppercase py-3.5 sm:py-4 hover:opacity-90 transition-opacity">
                                    Continue →
                                </button>
                            </div>
                        )}

                        {/* ── Step 2 ── */}
                        {step === 2 && (
                            <div>
                                <h2 className="text-[0.98rem] sm:text-[1.05rem] font-medium tracking-[0.06em] text-white mb-1">Contact Details</h2>
                                <p className="text-white/35 text-[0.78rem] sm:text-[0.8rem] mb-6 sm:mb-8">Provide your contact information</p>
                                <div className="space-y-4 sm:space-y-5">
                                    <div>
                                        <label className={label}>Full Name <span className="text-rise-gold">*</span></label>
                                        <input className={inp} placeholder="Enter your full name" value={form.name} onChange={e => set('name', e.target.value)} />
                                    </div>
                                    <div>
                                        <label className={label}>Email Address <span className="text-rise-gold">*</span></label>
                                        <input type="email" className={inp} placeholder="you@company.com" value={form.email} onChange={e => set('email', e.target.value)} />
                                        <p className="text-white/25 text-[0.68rem] sm:text-[0.7rem] mt-1.5">We'll send your login credentials and important updates to this email.</p>
                                    </div>
                                    <div>
                                        <label className={label}>Phone Number</label>
                                        <input type="tel" className={inp} placeholder="(555) 123-4567" value={form.phone} onChange={e => set('phone', e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex gap-2 sm:gap-3 mt-8 sm:mt-10">
                                    <button onClick={() => setStep(1)} className="flex-1 border border-white/15 text-white/50 text-[0.68rem] sm:text-[0.72rem] font-medium tracking-[0.14em] uppercase py-3.5 sm:py-4 hover:border-white/30 hover:text-white/70 transition-all">
                                        Back
                                    </button>
                                    <button onClick={() => setStep(3)} className="flex-[2] bg-gold-gradient text-rise-black text-[0.68rem] sm:text-[0.72rem] font-bold tracking-[0.18em] uppercase py-3.5 sm:py-4 hover:opacity-90 transition-opacity">
                                        Continue →
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* ── Step 3 ── */}
                        {step === 3 && (
                            <div>
                                <h2 className="text-[0.98rem] sm:text-[1.05rem] font-medium tracking-[0.06em] text-white mb-1">Partner Agreement</h2>
                                <p className="text-white/35 text-[0.78rem] sm:text-[0.8rem] mb-6 sm:mb-8">Please read and accept the agreement below</p>
                                <div className="space-y-4 sm:space-y-5">
                                    <label className="flex gap-3 cursor-pointer group">
                                        <div className={`mt-0.5 w-4 h-4 shrink-0 border flex items-center justify-center transition-all ${form.agree1 ? 'bg-rise-gold border-rise-gold' : 'border-white/20 group-hover:border-rise-gold/50'}`}
                                            onClick={() => set('agree1', !form.agree1)}>
                                            {form.agree1 && <svg className="w-2.5 h-2.5 text-rise-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                                        </div>
                                        <span className="text-white/55 text-[0.78rem] sm:text-[0.8rem] leading-relaxed">I have read and agree to the Partner Agreement</span>
                                    </label>
                                    <label className="flex gap-3 cursor-pointer group">
                                        <div className={`mt-0.5 w-4 h-4 shrink-0 border flex items-center justify-center transition-all ${form.agree2 ? 'bg-rise-gold border-rise-gold' : 'border-white/20 group-hover:border-rise-gold/50'}`}
                                            onClick={() => set('agree2', !form.agree2)}>
                                            {form.agree2 && <svg className="w-2.5 h-2.5 text-rise-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                                        </div>
                                        <span className="text-white/55 text-[0.78rem] sm:text-[0.8rem] leading-relaxed">I authorize the transactions with Diamond Outsourcing LLC. I confirm that I have received and inspected everything and that it is correct. I forgo my right to dispute this transaction with my bank and will seek to resolve any issues with the merchant directly or through any other means.</span>
                                    </label>
                                    <div className="pt-2">
                                        <label className={label}>Electronic Signature <span className="text-rise-gold">*</span></label>
                                        <input className={inp} placeholder="Type your full legal name" value={form.signature} onChange={e => set('signature', e.target.value)} />
                                        <p className="text-white/25 text-[0.68rem] sm:text-[0.7rem] mt-1.5">By typing your name, you agree that this constitutes a legal electronic signature.</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 sm:gap-3 mt-8 sm:mt-10">
                                    <button onClick={() => setStep(2)} className="flex-1 border border-white/15 text-white/50 text-[0.68rem] sm:text-[0.72rem] font-medium tracking-[0.14em] uppercase py-3.5 sm:py-4 hover:border-white/30 hover:text-white/70 transition-all">
                                        Back
                                    </button>
                                    <button
                                        onClick={() => { if (form.agree1 && form.agree2 && form.signature.trim()) setStep(4); }}
                                        disabled={!form.agree1 || !form.agree2 || !form.signature.trim()}
                                        className="flex-[2] bg-gold-gradient text-rise-black text-[0.68rem] sm:text-[0.72rem] font-bold tracking-[0.18em] uppercase py-3.5 sm:py-4 hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed">
                                        Continue →
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* ── Step 4 ── */}
                        {step === 4 && (
                            <div className="text-center">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 border border-rise-gold/40 flex items-center justify-center mx-auto mb-5 sm:mb-6">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-rise-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-[1.1rem] sm:text-[1.3rem] font-light tracking-[0.06em] text-white mb-2">Application Submitted!</h2>
                                <p className="text-white/40 text-[0.78rem] sm:text-[0.82rem] mb-8 sm:mb-10">Thank you for applying to become a Diamond Outsourcing partner.</p>

                                <div className="border border-rise-gold/20 bg-rise-gold/5 p-4 sm:p-6 text-left mb-4 sm:mb-6">
                                    <p className="text-rise-gold text-[0.62rem] tracking-[0.2em] uppercase mb-3 sm:mb-4">Next Step: Complete Your Payment</p>
                                    <p className="text-white/60 text-[0.78rem] sm:text-[0.8rem] leading-relaxed mb-3 sm:mb-4">
                                        Please complete your <span className="text-white font-medium">$417 enrollment fee</span> and include your application reference number in the memo or payment notes.
                                    </p>
                                    <p className="text-white/60 text-[0.78rem] sm:text-[0.8rem] leading-relaxed mb-3 sm:mb-4">
                                        For payment instructions or questions, contact{' '}
                                        <a href="mailto:team@diamondoutsourcing.com" className="text-rise-gold hover:underline break-all">team@diamondoutsourcing.com</a>.
                                    </p>
                                    <p className="text-white/60 text-[0.78rem] sm:text-[0.8rem] leading-relaxed">
                                        Your application will be processed within <span className="text-white">1–2 business days</span> after payment.
                                    </p>
                                    <p className="text-white/40 text-[0.72rem] mt-3 sm:mt-4">Best regards,<br />Diamond Credit Repair Team</p>
                                </div>

                                <div className="border border-white/8 p-4 sm:p-5 text-left mb-6 sm:mb-8">
                                    <p className="text-white/50 text-[0.72rem] sm:text-[0.75rem] leading-relaxed">
                                        <span className="text-white/70 font-medium">Important:</span> After payment, our team will create your account and send login credentials via email within 1–2 business days.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                    <Link href="/" className="flex-1 border border-white/15 text-white/50 text-[0.68rem] sm:text-[0.72rem] font-medium tracking-[0.14em] uppercase py-3.5 hover:border-white/30 hover:text-white/70 transition-all flex items-center justify-center">
                                        Return Home
                                    </Link>
                                    <a href="/login" className="flex-1 bg-gold-gradient text-rise-black text-[0.68rem] sm:text-[0.72rem] font-bold tracking-[0.18em] uppercase py-3.5 hover:opacity-90 transition-opacity flex items-center justify-center">
                                        Sign In
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
