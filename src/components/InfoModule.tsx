/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User, Building2, Briefcase, Hash, Clock, Users, Calendar, Award } from 'lucide-react';
import { SocialWorkerData } from '../types';
import { SectionHeader } from './SectionHeader';

interface InfoModuleProps {
  data: SocialWorkerData;
}

export const InfoModule: React.FC<InfoModuleProps> = ({ data }) => {
  const infoItems = [
    { label: '姓名', value: data.name, icon: User },
    { label: '所属机构', value: data.organization, icon: Building2 },
    { label: '当前岗位', value: data.position, icon: Briefcase },
    { label: '社工等级', value: data.level, icon: Award },
    { label: '注册编号', value: data.registerNumber, icon: Hash },
    { label: '有效期至', value: data.validUntil, icon: Calendar },
  ];

  return (
    <div className="bg-white/70 backdrop-blur-md mx-4 mt-6 p-6 rounded-[32px] shadow-sm border border-white/40">
      <SectionHeader title="基础信息" />
      
      <div className="grid grid-cols-1 gap-y-5">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 group">
            <div className="p-2.5 bg-[#EEEFEA] rounded-2xl group-hover:bg-[#2A374D] group-hover:text-white transition-colors duration-300">
              <item.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 border-b border-black/5 pb-1 group-last:border-0">
              <p className="text-[#9F9F9C] text-[10px] font-black uppercase tracking-wider mb-0.5">{item.label}</p>
              <p className="text-[#19202F] text-sm font-bold tracking-tight">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
