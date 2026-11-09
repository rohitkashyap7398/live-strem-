import React, { useState } from 'react';
import { X, Phone, User, Mail, BookOpen, CheckCircle, Sparkles, MessageCircle } from 'lucide-react';
import brandLogo from '../assets/logo.png';
import { COURSES } from '../data/coursesData';

interface RequestCallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
}

export const RequestCallbackModal: React.FC<RequestCallbackModalProps> = ({
  isOpen,
  onClose,
  defaultCourseId
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(defaultCourseId || 'data-science-analytics-genai');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg bg-[#0e0e12] border border-white/10 rounded-3xl shadow-2xl overflow-hidden card-inner-glow max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#121217] shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-10 px-2.5 py-1 rounded-xl bg-white/5 border border-[#E10600]/30 flex items-center justify-center shrink-0 shadow-md">
              <img
                src={brandLogo}
                onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                alt="TheCodeSpark Technologies Private Limited"
                className="h-7 w-auto object-contain filter drop-shadow"
              />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-display">Talk with Rohit Sir &amp; Team</h3>
              <p className="text-[11px] font-semibold text-[#ea580c] font-mono">TheCodeSpark Technologies Private Limited</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
          {/* DIRECT 1-CLICK OPTIONS: WHATSAPP & DIRECT CALL */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
                Instant Direct Connect:
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Online Now
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Option 1: WhatsApp */}
              <a
                href="https://wa.me/917398839769?text=Hello%20Rohit%20Sir%2C%20I%20want%20to%20know%20more%20about%20TheCodeSpark%20Technologies%20courses"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Option 2: Direct Call */}
              <a
                href="tel:+917398839769"
                className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-[#ea580c] hover:bg-[#d94412] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#ea580c]/25 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly Now</span>
              </a>
            </div>

            <div className="text-center text-[10.5px] font-mono text-neutral-400 pt-1">
              <span>CEO Helpline: </span>
              <a href="tel:+917398839769" className="text-white hover:text-[#ea580c] font-bold">+91 7398839769</a>
              <span className="mx-1 text-neutral-600">/</span>
              <a href="tel:+919548248925" className="text-white hover:text-[#ea580c] font-bold">+91 9548248925</a>
            </div>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-white/10 w-full" />
            <span className="bg-[#0e0e12] px-3 text-[10.5px] font-mono text-neutral-500 uppercase tracking-widest shrink-0">
              Or Request A Scheduled Callback
            </span>
          </div>

          {isSuccess ? (
            <div className="py-6 text-center space-y-3 bg-white/[0.02] rounded-2xl border border-white/5 p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white font-display">Callback Scheduled!</h4>
              <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-white">{name}</span>. Rohit Sir and our technical mentorship team will call you at <span className="font-mono text-[#ea580c]">{phone}</span> shortly.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="py-2 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#ea580c]" /> Full Name <span className="text-[#ea580c]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 bg-[#16161c] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#ea580c] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#ea580c]" /> Phone Number <span className="text-[#ea580c]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 7398839769"
                  className="w-full px-3.5 py-2.5 bg-[#16161c] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#ea580c] transition-colors font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#ea580c]" /> Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 bg-[#16161c] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#ea580c] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#ea580c]" /> Interested Program
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#16161c] border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#ea580c] transition-colors"
                >
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.id} className="bg-[#121217] text-white">
                      {c.title} {c.price > 0 ? `(₹${c.price.toLocaleString()})` : '(FREE)'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-3 bg-[#181820] rounded-xl border border-white/5 flex items-start gap-2.5 text-[11px] text-neutral-400">
                <Sparkles className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <span>Free 1-on-1 career counselling with Mr. Rohit Kashyap &amp; mentorship team.</span>
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 bg-[#ea580c] hover:bg-[#d94412] disabled:opacity-50 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-lg shadow-[#ea580c]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>Submit &amp; Schedule Callback →</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

