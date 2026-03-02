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
    <div className="bg-white mx-4 mt-4 p-5 rounded-2xl shadow-sm border border-black/5">
      <SectionHeader title="服务经历" icon={<History className="w-4 h-4 text-[#9F9F9C]" />} />
      
      <div className="space-y-6 relative">
        {/* Timeline Line */}
        <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-[#D9D9D9] rounded-full" />
        
        <AnimatePresence mode="popLayout">
          {visibleExperiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="relative pl-8"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-4 h-4 bg-white border-2 border-[#2A374D] rounded-full z-10" />
              
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[#D65C25] text-xs font-bold tracking-tight">
                  {exp.startDate} - {exp.endDate}
                </span>
                <span className="bg-[#EEEFEA] text-[#2A374D] px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                  {exp.role}
                </span>
              </div>
              
              <h3 className="text-[#19202F] text-sm font-bold mb-1 leading-tight">
                {exp.organizationName}
              </h3>
              
              <div className="space-y-2">
                <p className="text-[#9F9F9C] text-xs leading-relaxed">
                  <span className="font-bold text-[#19202F]/60">服务对象：</span>{exp.targetGroup}
                </p>
                <p className="text-[#19202F]/80 text-xs leading-relaxed">
                  {exp.description}
                </p>
                <div className="bg-[#EEEFEA]/50 p-2 rounded-lg border-l-2 border-[#D65C25]">
                  <p className="text-[#D65C25] text-[11px] font-bold mb-0.5 uppercase tracking-wide">项目亮点</p>
                  <p className="text-[#19202F] text-xs leading-relaxed font-medium">
                    {exp.highlights}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-6 py-2.5 flex items-center justify-center gap-1 text-[#2A374D] text-xs font-bold border border-[#D9D9D9] rounded-xl active:bg-[#EEEFEA] transition-colors"
        >
          {isExpanded ? (
            <>收起更多经历 <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>展开更多经历 ({experiences.length - displayCount}) <ChevronDown className="w-4 h-4" /></>
          )}
        </button>
      )}
    </div>
  );
};
