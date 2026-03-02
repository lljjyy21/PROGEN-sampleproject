/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionHeader } from './SectionHeader';

interface TagModuleProps {
  tags: string[];
}

export const TagModule: React.FC<TagModuleProps> = ({ tags }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md mx-4 mt-4 p-6 rounded-[32px] shadow-sm border border-white/40">
      <SectionHeader title="擅长领域" />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-4 py-2 bg-white text-[#2A374D] text-xs font-black rounded-2xl border border-black/5 shadow-sm active:scale-95 transition-transform"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
