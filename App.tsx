import React from 'react';
import Navbar from './components/Navbar';
import AiAssistant from './components/AiAssistant';
import ContactForm from './components/ContactForm';
import ProjectCard from './components/ProjectCard';
import ProfilePhoto from './components/ProfilePhoto';
import SectionHeading from './components/SectionHeading';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS, ACHIEVEMENTS, PROBLEM_SOLVING, PERSONAL_PROJECTS, EDUCATION } from './constants';

const firstName = PERSONAL_INFO.name.replace(/^MD\.\s*/, '');

const DownloadIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
);

const StarIcon: React.FC<{ className: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative pb-20 selection:bg-blue-500/30">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="about" className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <ProfilePhoto src={PERSONAL_INFO.coverPhoto} name={PERSONAL_INFO.name} />
            </div>

            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 animate-pulse">
              Available for New Opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              I build <span className="text-gradient">high-performance</span> digital products.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">{firstName}</span>. A {PERSONAL_INFO.role} specializing in WordPress ecosystems, complex backend architecture, and modern JavaScript.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={PERSONAL_INFO.resume}
                download="Samrat_Hossen_Resume.pdf"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20 flex items-center gap-2"
              >
                <DownloadIcon />
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl border border-white/10 hover:bg-white/5 font-bold transition-all text-slate-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Work Experience" />
            <div className="space-y-8">
              {EXPERIENCES.map((exp) => (
                <div key={`${exp.role}-${exp.duration}`} className="relative pl-8 border-l-2 border-white/10 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#030712] border-2 border-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                  <div className="glass-morphism p-6 rounded-2xl">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
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

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-[#0a0f1d]/50">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Technical Expertise" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILLS.map((skill) => (
                <div key={skill.category} className="glass-morphism p-6 rounded-2xl hover:border-blue-500/50 transition-all group">
                  <h3 className="text-blue-400 font-bold mb-4 uppercase tracking-wider text-xs">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 group-hover:bg-white/10 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Professional Projects" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((proj) => <ProjectCard key={proj.title} project={proj} />)}
            </div>
          </div>
        </section>

        {/* Personal Projects Section */}
        <section id="personal-projects" className="py-20 px-4 bg-[#0a0f1d]/50">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Personal Projects" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PERSONAL_PROJECTS.map((proj) => <ProjectCard key={proj.title} project={proj} />)}
            </div>
          </div>
        </section>

        {/* Problem Solving & Achievements */}
        <section id="achievements" className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Competitive Programming</h2>
              <div className="glass-morphism p-8 rounded-3xl space-y-8 border-l-4 border-l-blue-600">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.674a1 1 0 00.922-.617l2.108-4.742A1 1 0 0016.446 10h-1.557l.711-2.488A1 1 0 0014.659 6H9.34a1 1 0 00-.941.666l-2.074 6.182a1 1 0 00.941 1.352H8.8l-.711 2.488A1 1 0 009.041 17h.622z"></path></svg>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-white mb-1">{PROBLEM_SOLVING.problemsSolved}</p>
                    <p className="text-slate-400 font-medium">Problems solved on Online Judges</p>
                  </div>
                </div>
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <p className="text-slate-300"><span className="text-blue-400 font-bold">Online Judge Presence:</span> {PROBLEM_SOLVING.onlineJudges.join(', ')} etc.</p>
                  <p className="text-slate-300"><span className="text-blue-400 font-bold">Contests:</span> {PROBLEM_SOLVING.contests}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Achievements</h2>
              <ul className="space-y-4">
                {ACHIEVEMENTS.map((ach) => (
                  <li key={ach.contest} className="glass-morphism p-4 rounded-xl flex items-center justify-between gap-4 border border-white/5 hover:border-white/20 transition-all">
                    <div className="flex items-center gap-6">
                      <span className="text-2xl font-bold text-blue-500 w-16 shrink-0">{ach.rank}</span>
                      <div>
                        <h3 className="font-bold text-white text-sm">{ach.contest}</h3>
                        <p className="text-xs text-slate-500">Team: {ach.team}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <StarIcon className="w-4 h-4 text-blue-400" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Academic Qualifications Section */}
        <section id="academic" className="py-20 px-4 bg-[#0a0f1d]/50">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Academic Qualifications" />

            <div className="flex justify-center">
              <div className="max-w-3xl w-full">
                <div className="glass-morphism rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group">

                  {/* Header with Gradient */}
                  <div className="relative bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 p-6 md:p-8 border-b border-white/10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>

                    <div className="relative flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                        </svg>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{EDUCATION.degree}</h3>
                          <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold">
                            {EDUCATION.status}
                          </span>
                        </div>
                        <p className="text-xl text-blue-300 font-semibold">{EDUCATION.field}</p>
                      </div>
                    </div>
                  </div>

                  {/* Body with Details */}
                  <div className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="glass-morphism p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 uppercase font-bold">Institution</p>
                            <p className="text-lg font-bold text-white">{EDUCATION.institution}</p>
                            <p className="text-xs text-slate-400">{EDUCATION.location}</p>
                          </div>
                        </div>
                      </div>

                      <div className="glass-morphism p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 uppercase font-bold">Degree</p>
                            <p className="text-lg font-bold text-white">{EDUCATION.shortDegree}</p>
                            <p className="text-xs text-slate-400">CSE</p>
                          </div>
                        </div>
                      </div>

                      <div className="glass-morphism p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                            <StarIcon className="w-5 h-5 text-green-400" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 uppercase font-bold">CGPA</p>
                            <p className="text-2xl font-black text-white">{EDUCATION.cgpa}</p>
                            <p className="text-xs text-slate-400">out of {EDUCATION.cgpaScale}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Academic Highlights */}
                    <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        Academic Highlights
                      </h4>
                      <ul className="space-y-3">
                        {EDUCATION.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                            <p className="text-slate-300 text-sm leading-relaxed">{highlight}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certificate Download Section */}
                    <div className="mt-6 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg">Official Certificate</h4>
                            <p className="text-slate-400 text-sm">Download verified BSc degree certificate</p>
                          </div>
                        </div>
                        <a
                          href={PERSONAL_INFO.certificate}
                          download="Samrat_Hossen_BSC_Certificate.pdf"
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center gap-2 group/btn"
                        >
                          <DownloadIcon className="w-5 h-5 group-hover/btn:animate-bounce" />
                          Download Certificate
                        </a>
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
          <div className="max-w-4xl mx-auto glass-morphism p-6 sm:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Together</h2>
              <p className="text-slate-400">Available for freelance or full-time opportunities. Just a ping away!</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="pt-20 pb-10 px-4 text-center border-t border-white/5 mt-20">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} {firstName}. All Rights Reserved.</p>
        <p className="text-xs text-slate-600 mt-2">Built with React, Tailwind, and Google Gemini API</p>
      </footer>

      <AiAssistant />
    </div>
  );
};

export default App;
