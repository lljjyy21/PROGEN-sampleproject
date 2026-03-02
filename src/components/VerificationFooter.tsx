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
    <div className="mx-4 mt-6 mb-24 p-5 bg-[#2A374D]/5 rounded-2xl border border-[#2A374D]/10">
      <div className="flex items-center gap-2 mb-3">
        <Info className="w-4 h-4 text-[#2A374D]" />
        <h3 className="text-[#2A374D] text-sm font-bold">核验说明</h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-[#9F9F9C] text-xs">审核单位</span>
          <span className="text-[#19202F] text-xs font-bold flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#2E8B57]" />
            {verifiedBy}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#9F9F9C] text-xs">更新时间</span>
          <span className="text-[#19202F] text-xs font-bold">{updatedAt}</span>
        </div>
        
        <div className="pt-3 border-t border-[#D9D9D9]">
          <p className="text-[#9F9F9C] text-[11px] leading-relaxed">
            {note}
            <br />
            页面信息仅供参考，如有争议请以主管机构登记为准。
          </p>
        </div>
      </div>
    </div>
  );
};
