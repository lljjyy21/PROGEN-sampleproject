/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionHeader } from './SectionHeader';
import { ProjectCase } from '../types';
import { BriefcaseBusiness } from 'lucide-react';

interface ProjectModuleProps {
  projects: ProjectCase[];
}

export const ProjectModule: React.FC<ProjectModuleProps> = ({ projects }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md mx-4 mt-4 p-6 rounded-[32px] shadow-sm border border-white/40">
      <SectionHeader title="代表性项目" icon={<BriefcaseBusiness className="w-4 h-4 text-[#9F9F9C]" />} />
      
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="p-5 bg-white rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-[#19202F] text-sm font-black leading-tight flex-1 mr-4">
                {project.projectName}
              </h3>
              <span className="text-[#D65C25] text-[10px] font-black tracking-widest uppercase bg-[#D65C25]/5 px-2 py-1 rounded-lg">
                {project.projectDate.split('-')[0]}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-[#EEEFEA]/50 rounded-2xl">
                <p className="text-[#9F9F9C] text-[9px] font-black uppercase tracking-wider mb-1">合作单位</p>
                <p className="text-[#19202F] text-xs font-bold truncate">{project.partner}</p>
              </div>
              <div className="p-3 bg-[#EEEFEA]/50 rounded-2xl">
                <p className="text-[#9F9F9C] text-[9px] font-black uppercase tracking-wider mb-1">服务对象</p>
                <p className="text-[#19202F] text-xs font-bold truncate">{project.targetGroup}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="text-[#19202F]/70 text-xs leading-relaxed font-medium">
                {project.content}
              </p>
              <div className="flex items-start gap-3 pt-3 border-t border-black/5">
                <div className="bg-[#2E8B57] text-white text-[9px] px-2 py-1 rounded-lg font-black uppercase tracking-wider">项目成果</div>
                <p className="text-[#19202F] text-xs font-bold leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
