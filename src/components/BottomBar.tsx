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
    <div className="fixed bottom-6 left-4 right-4 z-50">
      <div className="bg-[#2A374D]/90 backdrop-blur-xl border border-white/10 p-3 rounded-[32px] shadow-2xl flex items-center gap-2">
        <button 
          onClick={handleCopy}
          className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center active:scale-90 transition-all hover:bg-white/20"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Check className="w-5 h-5 text-[#2E8B57]" />
              </motion.div>
            ) : (
              <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Copy className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        
        <a 
          href={`tel:${officialContact}`}
          className="flex-1 h-12 bg-[#D65C25] text-white rounded-2xl font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#D65C25]/40 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4" />
          联系机构核验
        </a>
        
        <button className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center active:scale-90 transition-all hover:bg-white/20">
          <AlertCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
