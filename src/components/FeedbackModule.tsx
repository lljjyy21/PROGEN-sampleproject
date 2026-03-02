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
    <div className="bg-white mx-4 mt-4 p-5 rounded-2xl shadow-sm border border-black/5">
      <SectionHeader title="服务评价" icon={<MessageSquareQuote className="w-4 h-4 text-[#9F9F9C]" />} />
      
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="relative p-4 bg-[#EEEFEA]/30 rounded-2xl border border-black/5">
            <Quote className="absolute top-3 right-4 w-8 h-8 text-[#2A374D]/5" />
            
            <p className="text-[#19202F] text-sm italic leading-relaxed mb-3 relative z-10">
              “{review.content}”
            </p>
            
            <div className="flex items-center justify-between pt-3 border-t border-black/5">
              <div className="flex flex-col">
                <span className="text-[#19202F] text-xs font-bold">{review.source}</span>
                <span className="text-[#9F9F9C] text-[10px]">{review.date}</span>
              </div>
              <span className="text-[#D65C25] text-[10px] font-bold uppercase tracking-wider">机构推荐</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
