import React from 'react';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="glass-morphism rounded-2xl overflow-hidden hover:-translate-y-2 transition-all flex flex-col border border-white/10">
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 uppercase tracking-tighter">
            {tech}
          </span>
        ))}
      </div>
      <p className="text-slate-400 text-sm mb-6 flex-1">{project.description}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mb-5"
        >
          View <span className="sr-only">{project.title}</span> →
        </a>
      )}
      {project.tools && (
        <div className="text-[11px] text-slate-500 italic mt-auto border-t border-white/5 pt-3">
          Used tools: {project.tools.join(', ')}
        </div>
      )}
    </div>
  </div>
);

export default ProjectCard;
