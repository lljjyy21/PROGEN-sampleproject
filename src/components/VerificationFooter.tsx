/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Info, ShieldCheck } from 'lucide-react';

interface VerificationFooterProps {
  verifiedBy: string;
  updatedAt: string;
  note: string;
}

export const VerificationFooter: React.FC<VerificationFooterProps> = ({ verifiedBy, updatedAt, note }) => {
  return (
    <div className="mx-4 mt-8 mb-32 p-6 bg-[#2A374D]/5 backdrop-blur-sm rounded-[32px] border border-[#2A374D]/10">
      <div className="flex items-center gap-2 mb-4">
        <Info className="w-4 h-4 text-[#2A374D]" />
        <h3 className="text-[#2A374D] text-xs font-black uppercase tracking-widest">核验说明</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-white/50 rounded-2xl">
          <span className="text-[#9F9F9C] text-[10px] font-black uppercase tracking-widest">审核单位</span>
          <span className="text-[#19202F] text-xs font-black flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2E8B57]" />
            {verifiedBy}
          </span>
        </div>
        <div className="flex justify-between items-center p-3 bg-white/50 rounded-2xl">
          <span className="text-[#9F9F9C] text-[10px] font-black uppercase tracking-widest">更新时间</span>
          <span className="text-[#19202F] text-xs font-black">{updatedAt}</span>
        </div>
        
        <div className="pt-4 border-t border-black/5">
          <p className="text-[#9F9F9C] text-[10px] font-medium leading-relaxed italic">
            {note}
            <br />
            页面信息仅供参考，如有争议请以主管机构登记为准。
          </p>
        </div>
      </div>
    </div>
  );
};
