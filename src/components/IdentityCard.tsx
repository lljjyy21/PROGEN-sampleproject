/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, MapPin, Calendar, Award } from 'lucide-react';
import { SocialWorkerData } from '../types';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

interface IdentityCardProps {
  data: SocialWorkerData;
}

export const IdentityCard: React.FC<IdentityCardProps> = ({ data }) => {
  const statusConfig = {
    active: { color: 'bg-[#2E8B57]', text: '有效 / 已注册', icon: ShieldCheck },
    pending: { color: 'bg-[#D65C25]', text: '待核验', icon: ShieldCheck },
    expired: { color: 'bg-[#C94A4A]', text: '异常 / 失效', icon: ShieldCheck },
  };

  const status = statusConfig[data.registerStatus];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#2A374D] text-white p-6 rounded-b-[32px] shadow-xl relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      
      <div className="flex items-start gap-4 relative z-10">
        <div className="relative">
          <img 
            src={data.avatar} 
            alt={data.name} 
            className="w-20 h-20 rounded-2xl object-cover border-2 border-white/20 shadow-lg"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
            <status.icon className={cn("w-5 h-5", status.color.replace('bg-', 'text-'))} />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold tracking-tight">{data.name}</h1>
            <span className="bg-[#D65C25] text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              {data.roleType}
            </span>
          </div>
          
          <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium mb-3", status.color)}>
            <status.icon className="w-3.5 h-3.5" />
            {status.text}
          </div>
          
          <p className="text-white/70 text-sm font-medium">{data.organization}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
        <div className="text-center">
          <p className="text-white/50 text-[10px] uppercase tracking-wider mb-1">注册编号</p>
          <p className="text-sm font-mono font-bold">{data.registerNumber}</p>
        </div>
        <div className="text-center border-x border-white/10">
          <p className="text-white/50 text-[10px] uppercase tracking-wider mb-1">从业年限</p>
          <p className="text-sm font-bold">{data.experienceYears}年</p>
        </div>
        <div className="text-center">
          <p className="text-white/50 text-[10px] uppercase tracking-wider mb-1">服务区域</p>
          <p className="text-sm font-bold truncate">{data.serviceArea}</p>
        </div>
      </div>

      {/* Badge Icon */}
      <div className="absolute bottom-4 right-6 opacity-10">
        <Award className="w-12 h-12" />
      </div>
    </motion.div>
  );
};
