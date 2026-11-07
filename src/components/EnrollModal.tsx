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
  const [email, setEmail] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [batch, setBatch] = useState('upcoming-immediate');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const basePrice = course.price;
  const discountAmount = discountApplied ? Math.round(basePrice * 0.1) : 0;
  const finalPrice = Math.max(0, basePrice - discountAmount);

  const applyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'SPARK10' || couponCode.trim().toUpperCase() === 'SHER10') {
      setDiscountApplied(true);
    } else {
      alert("Invalid coupon! Try code 'SPARK10' for an additional 10% off.");
    }
  };

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !phone || !email) return;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg bg-[#0e0e12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden card-inner-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-[#121217]">
          <div className="flex items-center gap-3">
            <div className="h-11 px-2.5 py-1 rounded-xl bg-white/5 border border-[#ff5722]/30 flex items-center justify-center shrink-0 shadow-md">
              <img
                src={brandLogo}
                onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                alt="TheCodeSpark Technologies Private Limited"
                className="h-8 w-auto object-contain filter drop-shadow"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#ff5722] font-semibold">
                  {course.isComingSoon ? '🚀 Early Bird Pre-Booking' : 'Fast Track Enrollment'}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white font-bold">
                  {course.codeName}
                </span>
              </div>
              <h3 className="text-base font-bold text-white font-display line-clamp-1 mt-0.5">{course.title}</h3>
              <p className="text-[10px] text-neutral-400 font-mono">TheCodeSpark Technologies Private Limited</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white font-display">Enrollment Confirmed!</h4>
            <p className="text-sm text-neutral-300 max-w-sm mx-auto">
              Welcome to the cohort, <span className="font-semibold text-white">{studentName}</span>! Your batch onboarding link and Discord community invite have been sent to <span className="font-mono text-[#ff5722]">{email}</span>.
            </p>
            <div className="p-3 bg-[#16161c] rounded-xl border border-white/5 text-xs text-neutral-400 font-mono">
              Enrolled Batch: {batch === 'upcoming-immediate' ? 'Immediate Batch (Starting Monday)' : 'Weekend Special Batch'}
            </div>
            <div className="pt-2">
              <button
                onClick={handleFinish}
                className="w-full py-2.5 px-4 bg-[#ff5722] hover:bg-[#f4511e] text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-[#ff5722]/20"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleEnroll} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Price Banner */}
            <div className="p-4 bg-[#141419] rounded-xl border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-xs text-neutral-400">Total Program Fee</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-extrabold text-white font-mono">
                    ₹{finalPrice.toLocaleString()}
                  </span>
                  {course.originalPrice && (
                    <span className="text-xs text-neutral-500 line-through font-mono">
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
              <div className="text-right text-xs text-neutral-400">
                <span className="block font-mono text-emerald-400 font-semibold">100% Placement Support</span>
                <span>GST included</span>
              </div>
            </div>

            {/* Batch Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-300">Select Batch Cohort</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setBatch('upcoming-immediate')}
                  className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                    batch === 'upcoming-immediate'
                      ? 'border-[#ff5722] bg-[#ff5722]/10 text-white font-semibold'
                      : 'border-white/5 bg-[#16161c] text-neutral-400 hover:text-white'
                  }`}
                >
                  <span className="block font-medium">Regular Batch</span>
                  <span className="text-[10px] text-neutral-400">Mon - Fri Live Masterclasses</span>
                </button>
                <button
                  type="button"
                  onClick={() => setBatch('weekend')}
                  className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                    batch === 'weekend'
                      ? 'border-[#ff5722] bg-[#ff5722]/10 text-white font-semibold'
                      : 'border-white/5 bg-[#16161c] text-neutral-400 hover:text-white'
                  }`}
                >
                  <span className="block font-medium">Weekend Batch</span>
                  <span className="text-[10px] text-neutral-400">Sat - Sun Working Professionals</span>
                </button>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">Candidate Full Name *</label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Rahul Verma"
                  className="w-full px-3.5 py-2 bg-[#16161c] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#ff5722]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 9876543210"
                    className="w-full px-3.5 py-2 bg-[#16161c] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#ff5722] font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@gmail.com"
                    className="w-full px-3.5 py-2 bg-[#16161c] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#ff5722]"
                  />
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="pt-1">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-neutral-500" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Have coupon code? (e.g. SPARK10)"
                    className="w-full pl-9 pr-3 py-2 bg-[#16161c] border border-white/10 rounded-xl text-xs text-white uppercase font-mono placeholder:normal-case placeholder-neutral-500 focus:outline-none focus:border-[#ff5722]"
                  />
                </div>
                <button
                  type="button"
                  onClick={applyCoupon}
                  className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold rounded-xl text-white transition-colors"
                >
                  Apply
                </button>
              </div>
              {discountApplied && (
                <div className="text-[11px] text-emerald-400 mt-1 font-mono flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Extra 10% instant discount applied (Saved ₹{discountAmount.toLocaleString()})
                </div>
              )}
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 p-2.5 bg-[#141419] rounded-xl border border-white/5 text-[11px] text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>7-Day Money Back Guarantee & Certificate with QR Verification</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3 px-4 bg-[#ff5722] hover:bg-[#f4511e] disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-[#ff5722]/25 flex items-center justify-center gap-2 cursor-pointer"
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

            <div className="pt-2 text-center text-xs text-neutral-400">
              <span>Admission Helpdesk: </span>
              <a href="tel:+917398839769" className="text-white hover:text-[#ff5722] font-mono font-bold">+91 7398839769</a>
              <span className="mx-1.5 text-neutral-600">/</span>
              <a href="tel:+919548248925" className="text-white hover:text-[#ff5722] font-mono font-bold">+91 9548248925</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
