import React from 'react';
import { GraduationCap, School, BookOpen, Award } from 'lucide-react';
import { educationTimeline, certifications } from '../data/portfolioData';

export default function About() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'graduation-cap':
        return <GraduationCap className="h-5 w-5 text-indigo-400" />;
      case 'school':
        return <School className="h-5 w-5 text-indigo-400" />;
      default:
        return <BookOpen className="h-5 w-5 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-900/50 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About & Education
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            My academic foundation and qualifications that have shaped my journey as a developer.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2"></div>

          {/* Education items */}
          <div className="space-y-12">
            {educationTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.id} className="relative flex flex-col md:flex-row md:items-center">
                  
                  {/* Timeline bullet / icon wrapper */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="p-3 bg-slate-900 border border-slate-700 rounded-full shadow-xl">
                      {getIcon(item.icon)}
                    </div>
                  </div>

                  {/* Left / Right Card Wrap */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                    isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                  }`}>
                    <div className="p-6 sm:p-8 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-2xl hover:border-slate-700/80 transition-all duration-300 shadow-md hover:shadow-lg">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
                        {item.duration}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.degree}
                      </h3>
                      <h4 className="text-md font-medium text-indigo-400 mb-2">
                        {item.institution}
                      </h4>
                      {item.location && (
                        <p className="text-sm font-semibold text-emerald-400 mb-3">
                          {item.location}
                        </p>
                      )}
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Certifications Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
            <div className="w-8 h-0.5 bg-indigo-500 mx-auto mt-3 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.title}
                className="p-5 bg-slate-900/40 border border-slate-800/80 backdrop-blur-md rounded-xl flex items-start space-x-4 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="p-2.5 bg-slate-950 rounded-lg text-indigo-400">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white leading-snug">{cert.title}</h4>
                  <p className="text-sm text-slate-400 mt-1">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
