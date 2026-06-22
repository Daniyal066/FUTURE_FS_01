import React from 'react';
import { Globe, Database, Terminal } from 'lucide-react';
import { skillsMatrix } from '../data/portfolioData';

export default function Skills() {
  const categories = [
    {
      title: 'Languages',
      icon: <Globe className="h-6 w-6 text-indigo-400" />,
      items: skillsMatrix.languages
    },
    {
      title: 'Backend & Databases',
      icon: <Database className="h-6 w-6 text-violet-400" />,
      items: skillsMatrix.backendAndDatabases
    },
    {
      title: 'Developer Tools',
      icon: <Terminal className="h-6 w-6 text-cyan-400" />,
      items: skillsMatrix.developerTools
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills Matrix
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A comprehensive overview of languages, frameworks, databases, and developer environments I work with.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 bg-slate-900/40 border border-slate-800/80 backdrop-blur-md rounded-2xl flex flex-col hover:border-slate-700/60 transition-all duration-300 shadow-md"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-2 bg-slate-900 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skill Badges List */}
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-2 text-sm font-medium text-slate-300 bg-slate-950 border border-slate-800/80 rounded-xl hover:border-indigo-500/50 hover:bg-slate-900/50 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
