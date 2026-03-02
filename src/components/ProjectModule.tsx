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
    <div className="bg-white mx-4 mt-4 p-5 rounded-2xl shadow-sm border border-black/5">
      <SectionHeader title="代表性项目" icon={<BriefcaseBusiness className="w-4 h-4 text-[#9F9F9C]" />} />
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-[#EEEFEA]/30 rounded-2xl border border-black/5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[#19202F] text-sm font-bold leading-tight flex-1 mr-2">
                {project.projectName}
              </h3>
              <span className="text-[#D65C25] text-[10px] font-bold whitespace-nowrap">
                {project.projectDate}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <p className="text-[#9F9F9C] text-[10px] uppercase font-bold mb-0.5">合作单位</p>
                <p className="text-[#19202F] text-xs font-medium truncate">{project.partner}</p>
              </div>
              <div>
                <p className="text-[#9F9F9C] text-[10px] uppercase font-bold mb-0.5">服务对象</p>
                <p className="text-[#19202F] text-xs font-medium truncate">{project.targetGroup}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-[#19202F]/80 text-xs leading-relaxed">
                {project.content}
              </p>
              <div className="flex items-start gap-2 pt-2 border-t border-black/5">
                <span className="bg-[#2E8B57] text-white text-[9px] px-1.5 py-0.5 rounded font-bold uppercase mt-0.5">成果</span>
                <p className="text-[#19202F] text-xs font-medium leading-relaxed">
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
