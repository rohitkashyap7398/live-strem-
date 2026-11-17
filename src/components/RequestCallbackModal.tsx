import React, { useEffect, useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import { COURSES } from '../data/coursesData';

interface RequestCallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
}

const OWNER_GMAIL = 'thecodespark3464@gmail.com';

const ENQUIRY_OPTIONS = [
  'Online Course (Website)',
  'Offline Course',
  '45-Day Summer Industrial Training',
  'Apprenticeship Program',
  'IGNITE 1.0 – Full Stack + GenAI',
];

export const RequestCallbackModal: React.FC<RequestCallbackModalProps> = ({
  isOpen,
  onClose,
  defaultCourseId,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryFor, setEnquiryFor] = useState('Online Course (Website)');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!defaultCourseId) return;
    const matched = COURSES.find((c) => c.id === defaultCourseId);
    if (matched?.title.toLowerCase().includes('summer')) {
      setEnquiryFor('45-Day Summer Industrial Training');
    } else if (matched?.title.toLowerCase().includes('ignite')) {
      setEnquiryFor('IGNITE 1.0 – Full Stack + GenAI');
    }
  }, [defaultCourseId]);

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(digitsOnly);
    if (errorMsg && digitsOnly.length === 10) {
      setErrorMsg(null);
    }
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(`New Callback Request: ${name} (${enquiryFor})`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone no.: +91 ${phone}`,
        `Enquiry For: ${enquiryFor}`,
        '',
        'Message:',
        message || 'Please call me back regarding course details.',
      ].join('\n')
    );
    return `mailto:${OWNER_GMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg('Please enter your Name and Email address.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone,
          enquiryFor,
          message: message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || 'Unable to send callback request right now.');
      }

      setIsSuccess(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unable to send callback request right now.';
      setErrorMsg(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setErrorMsg(null);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[440px] bg-white dark:bg-[#0c0c10] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          data-magnetic="true"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="overflow-y-auto px-6 py-7 sm:px-7">
          {/* Header matching uploaded design */}
          <div className="text-center space-y-1.5 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
              Request a Callback
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 dark:text-neutral-400">
              Fill the form below to request a callback from our team.
            </p>
          </div>

          {isSuccess ? (
            <div className="py-6 text-center space-y-5">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                  Thank You!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed max-w-xs mx-auto">
                  Thank you, <span className="font-semibold text-slate-900 dark:text-white">{name}</span>. Your callback request has been received. Our team will contact you shortly.
                </p>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  data-magnetic="true"
                  onClick={handleResetAndClose}
                  className="px-8 py-2.5 rounded-lg bg-[#e05a2b] hover:bg-[#d14d1f] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700 dark:text-neutral-300">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name here"
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#141419] border border-slate-200 dark:border-white/10 rounded-lg text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#e05a2b] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700 dark:text-neutral-300">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email here"
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#141419] border border-slate-200 dark:border-white/10 rounded-lg text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#e05a2b] transition-colors"
                />
              </div>

              {/* Phone no. strictly 10 digits with +91 */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-medium text-slate-700 dark:text-neutral-300">
                    Phone no.
                  </label>
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
                <div className="flex items-center bg-slate-50 dark:bg-[#141419] border border-slate-200 dark:border-white/10 rounded-lg overflow-hidden focus-within:border-[#e05a2b] transition-colors">
                  <div className="flex items-center gap-1.5 pl-3 pr-2.5 py-2.5 border-r border-slate-200 dark:border-white/10 shrink-0 select-none">
                    <span className="inline-flex flex-col w-4 h-3 rounded-[2px] overflow-hidden border border-black/10 shrink-0" aria-hidden="true">
                      <span className="h-1 bg-[#FF9933]" />
                      <span className="h-1 bg-white" />
                      <span className="h-1 bg-[#138808]" />
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-700 dark:text-neutral-200">
                      +91
                    </span>
                  </div>
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full px-3 py-2.5 bg-transparent text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none font-mono"
                  />
                </div>
              </div>

              {/* Enquiry For */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700 dark:text-neutral-300">
                  Enquiry For
                </label>
                <select
                  value={enquiryFor}
                  onChange={(e) => setEnquiryFor(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#141419] border border-slate-200 dark:border-white/10 rounded-lg text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#e05a2b] transition-colors cursor-pointer"
                >
                  {ENQUIRY_OPTIONS.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="bg-white dark:bg-[#141419] text-slate-900 dark:text-white"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* How can we help you? */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700 dark:text-neutral-300">
                  How can we help you?
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="E.g. I want details about the offline course, fees, and schedule..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#141419] border border-slate-200 dark:border-white/10 rounded-lg text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#e05a2b] transition-colors resize-none"
                />
              </div>

              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-600 dark:text-red-400 space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                  <a
                    href={buildMailtoHref()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e05a2b] hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send directly via Gmail app</span>
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  data-magnetic="true"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#e05a2b] hover:bg-[#d14d1f] disabled:opacity-60 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all shadow-lg shadow-[#e05a2b]/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Book My Callback</span>
                    </>
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
