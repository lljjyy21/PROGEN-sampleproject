/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User, Building2, Briefcase, Hash, Clock, Users, Calendar, Award } from 'lucide-react';
import { SocialWorkerData } from '../types';

interface InfoModuleProps {
  data: SocialWorkerData;
}

export const InfoModule: React.FC<InfoModuleProps> = ({ data }) => {
  const infoItems = [
    { label: '姓名', value: data.name, icon: User },
    { label: '性别', value: data.gender || '未公开', icon: User },
    { label: '年龄段', value: data.ageGroup || '未公开', icon: Clock },
    { label: '所属机构', value: data.organization, icon: Building2 },
    { label: '当前岗位', value: data.position, icon: Briefcase },
    { label: '社工等级', value: data.level, icon: Award },
    { label: '注册编号', value: data.registerNumber, icon: Hash },
    { label: '有效期至', value: data.validUntil, icon: Calendar },
    { label: '擅长对象', value: data.serviceTargets.join('、'), icon: Users },
  ];

  return (
    <div className="bg-white mx-4 mt-4 p-5 rounded-2xl shadow-sm border border-black/5">
      <h2 className="text-[#19202F] text-lg font-bold mb-4 flex items-center gap-2">
        <div className="w-1.5 h-5 bg-[#2A374D] rounded-full" />
        基础信息
      </h2>
      
      <div className="grid grid-cols-1 gap-y-4">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-0.5 p-1.5 bg-[#EEEFEA] rounded-lg">
              <item.icon className="w-4 h-4 text-[#2A374D]" />
            </div>
            <div>
              <p className="text-[#9F9F9C] text-xs font-medium mb-0.5">{item.label}</p>
              <p className="text-[#19202F] text-sm font-semibold leading-snug">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
