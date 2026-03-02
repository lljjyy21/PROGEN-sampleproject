/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Copy, AlertCircle, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BottomBarProps {
  registerNumber: string;
  officialContact: string;
}

export const BottomBar: React.FC<BottomBarProps> = ({ registerNumber, officialContact }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(registerNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-black/5 p-4 pb-8 z-50 flex items-center gap-3">
      <button 
        onClick={handleCopy}
        className="flex-1 h-12 bg-[#EEEFEA] text-[#2A374D] rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div 
              key="check"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Check className="w-4 h-4 text-[#2E8B57]" />
              已复制编号
            </motion.div>
          ) : (
            <motion.div 
              key="copy"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              复制编号
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      
      <a 
        href={`tel:${officialContact}`}
        className="flex-[2] h-12 bg-[#D65C25] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#D65C25]/20 active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4" />
        联系机构核验
      </a>
      
      <button className="w-12 h-12 bg-[#EEEFEA] text-[#C94A4A] rounded-xl flex items-center justify-center active:scale-95 transition-transform">
        <AlertCircle className="w-5 h-5" />
      </button>
    </div>
  );
};
