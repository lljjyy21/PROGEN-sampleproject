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
  <h2 className="text-[#19202F] text-lg font-bold mb-4 flex items-center gap-2">
    <div className="w-1.5 h-5 bg-[#2A374D] rounded-full" />
    {title}
    {icon}
  </h2>
);
