
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navbar from './components/Navbar';
import AiAssistant from './components/AiAssistant';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS, ACHIEVEMENTS, PROBLEM_SOLVING, PersonalProjects } from './constants';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xkogdzbj");

  if (state.succeeded) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500/50 mb-6">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h3>
        <p className="text-slate-400 mb-6">Thanks for reaching out! I'll get back to you as soon as possible.</p>
        <button
          onClick={() => window.location.reload()}
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
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 012-2V7a2 2 0 01-2-2H5a2 2 0 01-2 2v10a2 2 0 012 2z"></path></svg>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email</p>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-blue-400 transition-colors">{PERSONAL_INFO.email}</a>
          </div>
        </div>
        <div className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Phone</p>
            <p className="text-white">{PERSONAL_INFO.phone}</p>
          </div>
        </div>
        <div className="flex items-center gap-6 pt-6">
          <a href={PERSONAL_INFO.github} target="_blank" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-slate-500"
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-slate-500"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-slate-500 resize-none"
            required
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>
        <button 
          type="submit" 
          disabled={state.submitting}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3.5 rounded-xl transition-all hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {state.submitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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

const App: React.FC = () => {
  const handleDownloadResume = () => {
    // Create a link to download the actual PDF file
    const link = document.createElement('a');
    link.href = '/assets/Samrat_Hossen.pdf';
    link.download = 'Samrat_Hossen_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen relative pb-20 selection:bg-blue-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Cover Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-pulse"></div>
              
              {/* Space circle container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-2 backdrop-blur-sm border border-white/10">
                {/* Inner photo circle */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/30">
                  <img 
                    src={PERSONAL_INFO.coverPhoto} 
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      // Fallback to a gradient if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.classList.add('bg-gradient-to-br', 'from-blue-600', 'to-indigo-600', 'flex', 'items-center', 'justify-center');
                      target.parentElement!.innerHTML = `<span class="text-white text-4xl font-bold">${PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}</span>`;
                    }}
                  />
                </div>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute top-8 left-2 w-1 h-1 bg-indigo-400 rounded-full animate-bounce"></div>
            </div>
          </div>
          
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 animate-pulse">
            Available for New Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            I build <span className="text-gradient">high-performance</span> digital products.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">Samrat Hossen</span>. A Software Engineer specializing in WordPress ecosystems, complex backend architecture, and modern JavaScript.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleDownloadResume}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download Resume
            </button>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-xl border border-white/10 hover:bg-white/5 font-bold transition-all text-slate-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-[#0a0f1d]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="glass-morphism p-6 rounded-2xl hover:border-blue-500/50 transition-all group">
                <h3 className="text-blue-400 font-bold mb-4 uppercase tracking-wider text-xs">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 group-hover:bg-white/10 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-white/10 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#030712] border-2 border-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                <div className="glass-morphism p-6 rounded-2xl">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-500 bg-white/5 px-3 py-1 rounded-full">{exp.duration}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#0a0f1d]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professonal Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="glass-morphism rounded-2xl overflow-hidden hover:translate-y-[-8px] transition-all flex flex-col border border-white/10">
                {/* <div className="h-48 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 flex items-center justify-center border-b border-white/5">
                  <div className="text-4xl font-bold text-white/20 uppercase tracking-widest">{proj.title[0]}</div>
                </div> */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-white">{proj.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.technologies.map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 uppercase tracking-tighter">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm mb-6 flex-1">{proj.description}</p>
                  {proj.tools && (
                    <div className="text-[11px] text-slate-500 italic mt-auto border-t border-white/5 pt-3">
                      Used tools: {proj.tools.join(', ')}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Personal Projects */}
      <section id='personal_projects' className>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Personal Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PersonalProjects.map((proj, idx) => (
              <div key={idx} className="glass-morphism rounded-2xl overflow-hidden hover:translate-y-[-8px] transition-all flex flex-col border border-white/10">
                {/* <div className="h-48 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 flex items-center justify-center border-b border-white/5">
                  <div className="text-4xl font-bold text-white/20 uppercase tracking-widest">{proj.title[0]}</div>
                </div> */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-white">{proj.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.technologies.map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 uppercase tracking-tighter">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm mb-6 flex-1">{proj.description}</p>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mb-5"
                    >
                      View →
                    </a>
                  )}
                  {proj.tools && (
                    <div className="text-[11px] text-slate-500 italic mt-auto border-t border-white/5 pt-3">
                      Used tools: {proj.tools.join(', ')}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Solving & Achievements */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Problem Solving */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Competitive Programming</h2>
            <div className="glass-morphism p-8 rounded-3xl space-y-8 border-l-4 border-l-blue-600">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.674a1 1 0 00.922-.617l2.108-4.742A1 1 0 0016.446 10h-1.557l.711-2.488A1 1 0 0014.659 6H9.34a1 1 0 00-.941.666l-2.074 6.182a1 1 0 00.941 1.352H8.8l-.711 2.488A1 1 0 009.041 17h.622z"></path></svg>
                </div>
                <div>
                  <p className="text-4xl font-black text-white mb-1">1500+</p>
                  <p className="text-slate-400 font-medium">Problems solved on Online Judges</p>
                </div>
              </div>
              <div className="space-y-4 pt-4 border-t border-white/5">
                <p className="text-slate-300"><span className="text-blue-400 font-bold">Online Judge Presence:</span> Codeforces, LightOJ, Uva, Leetcode, Spoj, Atcoder etc.</p>
                <p className="text-slate-300"><span className="text-blue-400 font-bold">Contests:</span> Participated in 7+ national & regional level contests (NCPC, ICPC Preliminaries).</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Achievements</h2>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="glass-morphism p-4 rounded-xl flex items-center justify-between border border-white/5 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-6">
                    <span className="text-2xl font-bold text-blue-500 w-12">{ach.rank}</span>
                    <div>
                      <h4 className="font-bold text-white text-sm">{ach.contest}</h4>
                      <p className="text-xs text-slate-500">Team: {ach.team}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Qualifications Section */}
            <section id="academic" className="py-20 px-4 bg-[#0a0f1d]/50">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Qualifications</h2>
                  <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>
                
                {/* BSc Degree Card */}
                <div className="flex justify-center">
                  <div className="max-w-3xl w-full">
                    <div className="glass-morphism rounded-3xl border border-white/10 overflow-hidden
                                    hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10
                                    transition-all duration-500 group">
                      
                      {/* Header with Gradient */}
                      <div className="relative bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 p-8 border-b border-white/10">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
                        
                        <div className="relative flex items-start gap-6">
                          {/* Graduation Cap Icon */}
                          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 
                                        flex items-center justify-center shadow-lg shadow-blue-500/30
                                        group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                            </svg>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold text-white">
                                Bachelor of Science in Engineering
                              </h3>
                              <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold">
                                Completed
                              </span>
                            </div>
                            <p className="text-xl text-blue-300 font-semibold mb-1">
                              Computer Science and Engineering
                            </p>
                            <p className="text-slate-400 text-sm">
                              BSc [Eng.] in Computer Science & Engineering
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Body with Details */}
                      <div className="p-8">
                        {/* Institution, Degree, and CGPA in one line */}
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                          {/* Institution */}
                          <div className="glass-morphism p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                              </div>
                              <div>
                                <p className="text-xs text-slate-500 uppercase font-bold">Institution</p>
                                <p className="text-lg font-bold text-white">Comilla University</p>
                                <p className="text-xs text-slate-400">Cumilla, Bangladesh</p>
                              </div>
                            </div>
                          </div>

                          {/* Degree Type */}
                          <div className="glass-morphism p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                              </div>
                              <div>
                                <p className="text-xs text-slate-500 uppercase font-bold">Degree</p>
                                <p className="text-lg font-bold text-white">BSc Eng.</p>
                                <p className="text-xs text-slate-400">Engineering</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* CGPA */}
                          <div className="glass-morphism p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                              </div>
                              <div>
                                <p className="text-xs text-slate-500 uppercase font-bold">CGPA</p>
                                <p className="text-2xl font-black text-white">3.71</p>
                                <p className="text-xs text-slate-400">out of 4.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Academic Highlights */}
                        <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            Academic Highlights
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                              <p className="text-slate-300 text-sm leading-relaxed">
                                Specialized in <span className="text-white font-semibold">Data Structures & Algorithms</span>, Software Engineering, and Database Management Systems
                              </p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                              <p className="text-slate-300 text-sm leading-relaxed">
                                Completed <span className="text-white font-semibold">comprehensive coursework</span> in Web Technologies, Object-Oriented Programming, and Computer Networks
                              </p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                              <p className="text-slate-300 text-sm leading-relaxed">
                                Active participant in <span className="text-white font-semibold">competitive programming</span> throughout academic tenure
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Certificate Download Section */}
                        <div className="mt-6 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-white font-bold text-lg">Official Certificate</h4>
                                <p className="text-slate-400 text-sm">Download verified BSc degree certificate</p>
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/assets/BSC_Certificate.pdf';
                                link.download = 'Samrat_Hossen_BSC_Certificate.pdf';
                                link.target = '_blank';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              }}
                              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 
                                       text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 
                                       shadow-xl shadow-blue-500/30 flex items-center gap-2 group"
                            >
                              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                              </svg>
                              Download Certificate
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto glass-morphism p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Together</h2>
            <p className="text-slate-400">Available for freelance or full-time opportunities. Just a ping away!</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 px-4 text-center border-t border-white/5 mt-20">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Samrat Hossen. All Rights Reserved.</p>
        <p className="text-xs text-slate-600 mt-2">Built with React, Tailwind, and Google Gemini API</p>
      </footer>

      <AiAssistant />
    </div>
  );
};

export default App;
