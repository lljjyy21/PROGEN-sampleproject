/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceExperience {
  organizationName: string;
  startDate: string;
  endDate: string;
  role: string;
  targetGroup: string;
  description: string;
  highlights: string;
}

export interface ProjectCase {
  projectName: string;
  projectDate: string;
  partner: string;
  targetGroup: string;
  content: string;
  result: string;
}

export interface Certificate {
  title: string;
  imageUrl: string;
  issueDate: string;
  issuer: string;
}

export interface Review {
  source: string;
  date: string;
  content: string;
}

export interface SocialWorkerData {
  avatar: string;
  name: string;
  roleType: string; // e.g., "注册社工", "持证社工"
  registerStatus: 'active' | 'pending' | 'expired';
  registerNumber: string;
  organization: string;
  position: string;
  experienceYears: number;
  serviceArea: string;
  level: string;
  validUntil: string;
  gender?: string;
  ageGroup?: string;
  specialties: string[];
  serviceTargets: string[];
  serviceExperiences: ServiceExperience[];
  projects: ProjectCase[];
  certificates: Certificate[];
  reviews: Review[];
  verifiedBy: string;
  updatedAt: string;
  verificationNote: string;
  officialContact: string;
}
