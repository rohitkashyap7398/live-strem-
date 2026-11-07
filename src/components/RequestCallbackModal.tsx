import React, { useState } from 'react';
import { X, Phone, User, Mail, BookOpen, CheckCircle, Sparkles } from 'lucide-react';
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
              <h3 className="text-base font-bold text-white font-display">Request A Free Callback</h3>
              <p className="text-xs font-semibold text-[#ff5722] font-mono">TheCodeSpark Technologies Private Limited</p>
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
            <h4 className="text-xl font-bold text-white font-display">Callback Scheduled!</h4>
            <p className="text-sm text-neutral-300 max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-white">{name}</span>. Our senior technical counselor will call you at <span className="font-mono text-[#ff5722]">{phone}</span> within 15 minutes.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 bg-[#ff5722] hover:bg-[#f4511e] text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-[#ff5722]/20"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#ff5722]" /> Full Name <span className="text-[#ff5722]">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3.5 py-2.5 bg-[#16161c] border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff5722] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#ff5722]" /> Phone Number <span className="text-[#ff5722]">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 bg-[#16161c] border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff5722] transition-colors font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#ff5722]" /> Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 bg-[#16161c] border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff5722] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#ff5722]" /> Interested Program
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#16161c] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#ff5722] transition-colors"
              >
                {COURSES.map((c) => (
                  <option key={c.id} value={c.id} className="bg-[#121217] text-white">
                    {c.title} {c.price > 0 ? `(₹${c.price.toLocaleString()})` : '(FREE)'}
                  </option>
                ))}
              </select>
            </div>

            <div className="p-3 bg-[#181820] rounded-xl border border-white/5 flex items-start gap-2.5 text-xs text-neutral-400">
              <Sparkles className="w-4 h-4 text-[#ff5722] shrink-0 mt-0.5" />
              <span>Free personalized 1-on-1 career counselling, portfolio roadmap, and syllabus brochure will be provided.</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-[#ff5722] hover:bg-[#f4511e] disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-[#ff5722]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <span>Submit & Connect with Mentor →</span>
                )}
              </button>
            </div>

            <div className="pt-3 border-t border-white/5 text-center text-xs text-neutral-400">
              <span>Direct Counselor Helpline: </span>
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
