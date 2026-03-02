/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ServiceExperience } from '../types';
import { ChevronDown, ChevronUp, History } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceModuleProps {
  experiences: ServiceExperience[];
}

export const ExperienceModule: React.FC<ExperienceModuleProps> = ({ experiences }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayCount = 2;
  const hasMore = experiences.length > displayCount;
  const visibleExperiences = isExpanded ? experiences : experiences.slice(0, displayCount);

  return (
    <div className="bg-white/70 backdrop-blur-md mx-4 mt-4 p-6 rounded-[32px] shadow-sm border border-white/40">
      <SectionHeader title="服务经历" icon={<History className="w-4 h-4 text-[#9F9F9C]" />} />
      
      <div className="space-y-8 relative">
        {/* Timeline Line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#2A374D] via-[#D9D9D9] to-transparent" />
        
        <AnimatePresence mode="popLayout">
          {visibleExperiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="relative pl-10"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 bg-white border-2 border-[#2A374D] rounded-full z-10 flex items-center justify-center shadow-sm">
                <div className="w-2 h-2 bg-[#2A374D] rounded-full" />
              </div>
              
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[#D65C25] text-[10px] font-black tracking-widest uppercase">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>
              
              <div className="bg-white p-4 rounded-2xl border border-black/5 shadow-sm">
                <h3 className="text-[#19202F] text-sm font-black mb-1 leading-tight">
                  {exp.organizationName}
                </h3>
                <p className="text-[#2A374D] text-[10px] font-bold uppercase tracking-wider mb-3">{exp.role}</p>
                
                <div className="space-y-3">
                  <p className="text-[#19202F]/60 text-xs leading-relaxed">
                    <span className="font-black text-[#19202F]">服务对象：</span>{exp.targetGroup}
                  </p>
                  <div className="bg-[#EEEFEA]/50 p-3 rounded-xl border-l-4 border-[#D65C25]">
                    <p className="text-[#19202F] text-xs leading-relaxed font-medium italic">
                      “{exp.highlights}”
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-8 py-3 flex items-center justify-center gap-2 text-[#2A374D] text-xs font-black border border-black/10 rounded-2xl active:scale-95 transition-all bg-white shadow-sm"
        >
          {isExpanded ? (
            <>收起更多经历 <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>查看更多经历 ({experiences.length - displayCount}) <ChevronDown className="w-4 h-4" /></>
          )}
        </button>
      )}
    </div>
  );
};
