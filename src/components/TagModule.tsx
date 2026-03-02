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
    <div className="bg-white mx-4 mt-4 p-5 rounded-2xl shadow-sm border border-black/5">
      <SectionHeader title="擅长领域" />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1.5 bg-[#EEEFEA] text-[#2A374D] text-xs font-bold rounded-full border border-black/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
