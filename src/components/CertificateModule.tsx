/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Certificate } from '../types';
import { FileCheck, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CertificateModuleProps {
  certificates: Certificate[];
}

export const CertificateModule: React.FC<CertificateModuleProps> = ({ certificates }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white/70 backdrop-blur-md mx-4 mt-4 p-6 rounded-[32px] shadow-sm border border-white/40">
      <SectionHeader title="资质证明" icon={<FileCheck className="w-4 h-4 text-[#9F9F9C]" />} />
      
      <div className="grid grid-cols-2 gap-4">
        {certificates.map((cert, index) => (
          <motion.div 
            key={index} 
            whileHover={{ y: -4 }}
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#EEEFEA] border border-black/5 cursor-pointer shadow-sm"
            onClick={() => setSelectedImage(cert.imageUrl)}
          >
            <img 
              src={cert.imageUrl} 
              alt={cert.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#2A374D]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <ZoomIn className="text-white w-8 h-8" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#2A374D]/90 to-transparent">
              <p className="text-white text-[10px] font-black tracking-tight leading-tight">{cert.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white p-2">
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
