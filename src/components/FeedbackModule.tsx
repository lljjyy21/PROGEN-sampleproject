/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Review } from '../types';
import { Quote, MessageSquareQuote } from 'lucide-react';

interface FeedbackModuleProps {
  reviews: Review[];
}

export const FeedbackModule: React.FC<FeedbackModuleProps> = ({ reviews }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md mx-4 mt-4 p-6 rounded-[32px] shadow-sm border border-white/40">
      <SectionHeader title="服务评价" icon={<MessageSquareQuote className="w-4 h-4 text-[#9F9F9C]" />} />
      
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="relative p-6 bg-white rounded-3xl border border-black/5 shadow-sm">
            <Quote className="absolute top-4 right-6 w-12 h-12 text-[#2A374D]/5" />
            
            <p className="text-[#19202F] text-sm font-medium italic leading-relaxed mb-6 relative z-10">
              “{review.content}”
            </p>
            
            <div className="flex items-center justify-between pt-4 border-t border-black/5">
              <div className="flex flex-col">
                <span className="text-[#19202F] text-xs font-black tracking-tight">{review.source}</span>
                <span className="text-[#9F9F9C] text-[10px] font-bold uppercase tracking-wider mt-0.5">{review.date}</span>
              </div>
              <div className="px-3 py-1 bg-[#D65C25]/10 rounded-full">
                <span className="text-[#D65C25] text-[9px] font-black uppercase tracking-wider">机构推荐</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
