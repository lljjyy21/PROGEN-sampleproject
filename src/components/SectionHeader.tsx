/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon }) => (
  <h2 className="text-[#19202F] text-xs font-black mb-5 flex items-center justify-between uppercase tracking-wider opacity-60">
    <div className="flex items-center gap-2">
      <div className="w-1 h-1 bg-[#2A374D] rounded-full" />
      {title}
    </div>
    {icon}
  </h2>
);
