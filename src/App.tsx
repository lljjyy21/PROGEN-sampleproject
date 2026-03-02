/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { IdentityCard } from './components/IdentityCard';
import { InfoModule } from './components/InfoModule';
import { TagModule } from './components/TagModule';
import { ExperienceModule } from './components/ExperienceModule';
import { ProjectModule } from './components/ProjectModule';
import { CertificateModule } from './components/CertificateModule';
import { FeedbackModule } from './components/FeedbackModule';
import { VerificationFooter } from './components/VerificationFooter';
import { BottomBar } from './components/BottomBar';
import { MOCK_DATA } from './constants';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen max-w-md mx-auto relative bg-[#EEEFEA]">
      {/* Main Content */}
      <main className="pb-10">
        <IdentityCard data={MOCK_DATA} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <InfoModule data={MOCK_DATA} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <TagModule tags={MOCK_DATA.specialties} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ExperienceModule experiences={MOCK_DATA.serviceExperiences} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ProjectModule projects={MOCK_DATA.projects} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <CertificateModule certificates={MOCK_DATA.certificates} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <FeedbackModule reviews={MOCK_DATA.reviews} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <VerificationFooter 
            verifiedBy={MOCK_DATA.verifiedBy}
            updatedAt={MOCK_DATA.updatedAt}
            note={MOCK_DATA.verificationNote}
          />
        </motion.div>
      </main>

      {/* Fixed Bottom Bar */}
      <BottomBar 
        registerNumber={MOCK_DATA.registerNumber}
        officialContact={MOCK_DATA.officialContact}
      />
    </div>
  );
}
