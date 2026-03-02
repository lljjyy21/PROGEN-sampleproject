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
    active: { color: 'bg-[#2E8B57]', text: '有效 / 已注册', icon: ShieldCheck, glow: 'shadow-[#2E8B57]/20' },
    pending: { color: 'bg-[#D65C25]', text: '待核验', icon: ShieldCheck, glow: 'shadow-[#D65C25]/20' },
    expired: { color: 'bg-[#C94A4A]', text: '异常 / 失效', icon: ShieldCheck, glow: 'shadow-[#C94A4A]/20' },
  };

  const status = statusConfig[data.registerStatus];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mesh-gradient text-white p-8 rounded-b-[40px] shadow-2xl relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white rounded-full blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-[#D65C25] rounded-full blur-[60px]" />
      </div>
      
      <div className="flex flex-col items-center text-center relative z-10">
        <div className="relative mb-4">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12, delay: 0.2 }}
            className="w-24 h-24 rounded-[32px] overflow-hidden border-4 border-white/20 shadow-2xl"
          >
            <img 
              src={data.avatar} 
              alt={data.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={cn("absolute -bottom-1 -right-1 p-1.5 rounded-full shadow-lg border-2 border-[#2A374D]", status.color)}
          >
            <status.icon className="w-4 h-4 text-white" />
          </motion.div>
        </div>
        
        <h1 className="text-3xl font-black tracking-tighter mb-1">{data.name}</h1>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-white/60 text-xs font-bold tracking-widest uppercase">{data.roleType}</span>
          <div className="w-1 h-1 bg-white/30 rounded-full" />
          <span className="text-white/60 text-xs font-bold tracking-widest uppercase">{data.level}</span>
        </div>
        
        <div className={cn("inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-wide shadow-xl", status.color, status.glow)}>
          <ShieldCheck className="w-4 h-4" />
          {status.text.toUpperCase()}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-8 p-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10">
        <div className="text-center">
          <p className="text-white/40 text-[9px] font-black uppercase tracking-wider mb-1">注册编号</p>
          <p className="text-xs font-mono font-bold tracking-tighter">{data.registerNumber}</p>
        </div>
        <div className="text-center border-x border-white/10">
          <p className="text-white/40 text-[9px] font-black uppercase tracking-wider mb-1">从业年限</p>
          <p className="text-xs font-bold">{data.experienceYears} 年</p>
        </div>
        <div className="text-center">
          <p className="text-white/40 text-[9px] font-black uppercase tracking-wider mb-1">服务区域</p>
          <p className="text-xs font-bold truncate">{data.serviceArea.split('区')[0]}区</p>
        </div>
      </div>
    </motion.div>
  );
};
