import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Tag, CreditCard, Sparkles } from 'lucide-react';
import brandLogo from '../assets/logo.png';
import { Course } from '../data/coursesData';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course;
}

export const EnrollModal: React.FC<EnrollModalProps> = ({
  isOpen,
  onClose,
  course
}) => {
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState<string | null>(null);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [batch, setBatch] = useState('upcoming-immediate');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const basePrice = course.price;
  const discountAmount = discountApplied ? Math.round(basePrice * 0.1) : 0;
  const finalPrice = Math.max(0, basePrice - discountAmount);

  const applyCoupon = () => {
    setCouponError(null);
    if (couponCode.trim().toUpperCase() === 'SPARK10' || couponCode.trim().toUpperCase() === 'SHER10') {
      setDiscountApplied(true);
      setCouponError(null);
    } else {
      setCouponError("Invalid coupon! Try code 'SPARK10' for an additional 10% off.");
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(digitsOnly);
    if (phoneError && digitsOnly.length === 10) {
      setPhoneError(null);
    }
  };

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !email.trim()) return;
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setPhoneError(null);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleFinish = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#0e0e12] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden card-inner-glow max-h-[92vh] grid grid-cols-1 md:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side Edge-to-Edge Photo Panel (unique image for Enrollment form) */}
        <div className="relative h-44 sm:h-52 md:h-auto md:col-span-5 bg-white dark:bg-[#141419] overflow-hidden shrink-0">
          <img
            src="/assets/aistudio/image_f19d5f3e.png"
            alt="Enroll at TheCodeSpark Technologies Private Limited"
            className="w-full h-full object-cover object-right md:object-center"
          />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right Side Enrollment Content */}
        <div className="relative md:col-span-7 flex flex-col max-h-[calc(92vh-11rem)] sm:max-h-[calc(92vh-13rem)] md:max-h-[92vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#121217] shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-10 px-2 py-1 rounded-xl bg-white dark:bg-white/5 border border-[#ff5722]/30 flex items-center justify-center shrink-0 shadow-sm dark:shadow-md">
                <img
                  src={brandLogo}
                  onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                  alt="TheCodeSpark Technologies Private Limited"
                  className="h-7 w-auto object-contain filter drop-shadow"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#ff5722] font-semibold">
                    {course.isComingSoon ? 'Early Bird Pre-Booking' : 'Fast Track Enrollment'}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white font-bold">
                    {course.codeName}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display line-clamp-1 mt-0.5">{course.title}</h3>
                <p className="text-[10px] text-slate-500 dark:text-neutral-400 font-mono truncate">TheCodeSpark Technologies Private Limited</p>
              </div>
            </div>
            <button
              type="button"
              data-magnetic="true"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-200/80 dark:bg-white/10 text-slate-600 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors shrink-0 ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {isSuccess ? (
            <div className="p-8 text-center space-y-5 overflow-y-auto flex-1 flex flex-col items-center justify-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                  Thank You!
                </h4>
                <p className="text-sm text-slate-600 dark:text-neutral-300 max-w-xs mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900 dark:text-white">{studentName}</span>. Your submission has been received. Our team will contact you shortly.
                </p>
              </div>
              <div className="pt-1">
                <button
                  type="button"
                  data-magnetic="true"
                  onClick={handleFinish}
                  className="px-8 py-2.5 bg-[#ff5722] hover:bg-[#f4511e] text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-[#ff5722]/20 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleEnroll} className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1">
              {/* Price Banner */}
              <div className="p-3.5 sm:p-4 bg-slate-50 dark:bg-[#141419] rounded-xl border border-slate-200 dark:border-white/5 flex items-center justify-between gap-2">
                <div>
                  <span className="text-xs text-slate-500 dark:text-neutral-400">Total Program Fee</span>
                  <div className="flex items-baseline gap-2 mt-0.5 flex-wrap">
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                      ₹{finalPrice.toLocaleString()}
                    </span>
                    {course.originalPrice && (
                      <span className="text-xs text-slate-400 dark:text-neutral-500 line-through font-mono">
                        ₹{course.originalPrice.toLocaleString()}
                      </span>
                    )}
                    {course.discountBadge && (
                      <span className="text-[10px] font-mono text-[#ff5722] bg-[#ff5722]/10 border border-[#ff5722]/20 px-1.5 py-0.5 rounded">
                        {course.discountBadge}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right text-xs text-slate-500 dark:text-neutral-400 shrink-0">
                  <span className="block font-mono text-emerald-600 dark:text-emerald-400 font-semibold">100% Placement Support</span>
                  <span>GST included</span>
                </div>
              </div>

              {/* Batch Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700 dark:text-neutral-300">Select Batch Cohort</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setBatch('upcoming-immediate')}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-colors ${
                      batch === 'upcoming-immediate'
                        ? 'border-[#ff5722] bg-[#ff5722]/10 text-slate-900 dark:text-white font-semibold'
                        : 'border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#16161c] text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <span className="block font-medium">Regular Batch</span>
                    <span className="text-[10px] text-slate-500 dark:text-neutral-400">Mon - Fri Live Masterclasses</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBatch('weekend')}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-colors ${
                      batch === 'weekend'
                        ? 'border-[#ff5722] bg-[#ff5722]/10 text-slate-900 dark:text-white font-semibold'
                        : 'border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#16161c] text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <span className="block font-medium">Weekend Batch</span>
                    <span className="text-[10px] text-slate-500 dark:text-neutral-400">Sat - Sun Working Professionals</span>
                  </button>
                </div>
              </div>

              {/* Inputs */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-slate-700 dark:text-neutral-300 block mb-1">Candidate Full Name *</label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Rahul Verma"
                    className="w-full px-3.5 py-2 bg-slate-50 dark:bg-[#16161c] border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5722]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-medium text-slate-700 dark:text-neutral-300">WhatsApp / Phone *</label>
                      <span
                        className={`text-[10px] font-mono tabular-nums ${
                          phone.length === 10
                            ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                            : 'text-slate-400 dark:text-neutral-500'
                        }`}
                      >
                        {phone.length}/10 digits
                      </span>
                    </div>
                    <div className="flex items-center bg-slate-50 dark:bg-[#16161c] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden focus-within:border-[#ff5722]">
                      <span className="px-2.5 py-2 text-xs font-mono font-semibold text-slate-600 dark:text-neutral-300 border-r border-slate-200 dark:border-white/10 select-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="10-digit number"
                        className="w-full px-3 py-2 bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none font-mono"
                      />
                    </div>
                    {phoneError && (
                      <p className="text-[11px] text-red-600 dark:text-red-400 mt-1 font-mono">
                        {phoneError}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-700 dark:text-neutral-300 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@gmail.com"
                      className="w-full px-3.5 py-2 bg-slate-50 dark:bg-[#16161c] border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5722]"
                    />
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="pt-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400 dark:text-neutral-500" />
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Have coupon code? (e.g. SPARK10)"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#16161c] border border-slate-200 dark:border-white/10 rounded-xl text-xs text-slate-900 dark:text-white uppercase font-mono placeholder:normal-case placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#ff5722]"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={applyCoupon}
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-semibold rounded-xl text-slate-900 dark:text-white transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {discountApplied && (
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-mono flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Extra 10% instant discount applied (Saved ₹{discountAmount.toLocaleString()})
                  </div>
                )}
                {couponError && (
                  <div className="text-[11px] text-red-600 dark:text-red-400 mt-1 font-mono">
                    {couponError}
                  </div>
                )}
              </div>

              {/* Trust badge */}
              <div className="flex items-center gap-2 p-2.5 bg-slate-50 dark:bg-[#141419] rounded-xl border border-slate-200 dark:border-white/5 text-[11px] text-slate-600 dark:text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>7-Day Money Back Guarantee &amp; Certificate with QR Verification</span>
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  data-magnetic="true"
                  disabled={isProcessing}
                  className="w-full py-3 px-4 bg-[#ff5722] hover:bg-[#f4511e] disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-[#ff5722]/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isProcessing ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4" />
                      <span>
                        {course.isComingSoon
                          ? 'Reserve Pre-Booking Seat (₹0 Advance) →'
                          : `Complete Enrollment (₹${finalPrice.toLocaleString()}) →`}
                      </span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-1 text-center text-xs text-slate-500 dark:text-neutral-400">
                <span>Admission Helpdesk: </span>
                <a href="tel:+917398839769" className="text-slate-900 dark:text-white hover:text-[#ff5722] font-mono font-bold">+91 7398839769</a>
                <span className="mx-1.5 text-slate-400 dark:text-neutral-600">/</span>
                <a href="tel:+919548248925" className="text-slate-900 dark:text-white hover:text-[#ff5722] font-mono font-bold">+91 9548248925</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
