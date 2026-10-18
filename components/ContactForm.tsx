import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { PERSONAL_INFO } from '../constants';

const FORMSPREE_FORM_ID = "xkogdzbj";

const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-slate-500";

const ContactForm: React.FC = () => {
  const [state, handleSubmit, reset] = useForm(FORMSPREE_FORM_ID);

  if (state.succeeded) {
    return (
      <div className="text-center py-12" role="status">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500/50 mb-6">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h3>
        <p className="text-slate-400 mb-6">Thanks for reaching out! I'll get back to you as soon as possible.</p>
        <button
          onClick={reset}
          className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <div className="flex items-center gap-4 group">
          <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 012-2V7a2 2 0 01-2-2H5a2 2 0 01-2 2v10a2 2 0 012 2z"></path></svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email</p>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-blue-400 transition-colors break-all">{PERSONAL_INFO.email}</a>
          </div>
        </div>
        <div className="flex items-center gap-4 group">
          <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Phone</p>
            <a href={`tel:${PERSONAL_INFO.phone.replace(/[^\d+]/g, '')}`} className="text-white hover:text-blue-400 transition-colors">{PERSONAL_INFO.phone}</a>
          </div>
        </div>
        <div className="flex items-center gap-6 pt-6">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input id="name" type="text" name="name" placeholder="Your Name" autoComplete="name" className={inputClass} required />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input id="email" type="email" name="email" placeholder="Email Address" autoComplete="email" className={inputClass} required />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Your Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows={4} className={`${inputClass} resize-none`} required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
        </div>
        <ValidationError errors={state.errors} className="text-red-400 text-sm" />
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3.5 rounded-xl transition-all hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {state.submitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
