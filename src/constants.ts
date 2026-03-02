/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SocialWorkerData } from './types';

export const MOCK_DATA: SocialWorkerData = {
  avatar: 'https://picsum.photos/seed/sw-avatar/300/300',
  name: '陈晓琳',
  roleType: '注册社工',
  registerStatus: 'active',
  registerNumber: 'SW-2024-0892',
  organization: '深圳市福田区社会工作者协会',
  position: '高级项目主管',
  experienceYears: 8,
  serviceArea: '深圳市福田区',
  level: '中级社工师',
  validUntil: '2026-12-31',
  gender: '女',
  ageGroup: '30-35岁',
  specialties: [
    '老年人服务',
    '青少年心理支持',
    '社区治理',
    '困境家庭帮扶',
    '志愿者组织',
    '个案服务',
    '家庭走访',
    '社区活动策划'
  ],
  serviceTargets: ['老年人', '青少年', '困境家庭'],
  serviceExperiences: [
    {
      organizationName: '深圳市福田区社会工作者协会',
      startDate: '2022.03',
      endDate: '至今',
      role: '高级项目主管',
      targetGroup: '老年人 / 困境家庭',
      description: '负责福田区“温暖夕阳”老年人关爱项目的统筹与执行。',
      highlights: '组织社区服务项目 12 场，覆盖 300+ 人次，建立 5 个社区互助小组。'
    },
    {
      organizationName: '广州市越秀区社区服务中心',
      startDate: '2018.06',
      endDate: '2022.02',
      role: '驻点社工',
      targetGroup: '青少年',
      description: '开展青少年心理健康辅导与课后兴趣小组。',
      highlights: '累计服务青少年 150 余名，成功干预 12 例高危心理个案。'
    },
    {
      organizationName: '东莞市社会工作协会',
      startDate: '2016.07',
      endDate: '2018.05',
      role: '助理社工',
      targetGroup: '流动人口家庭',
      description: '协助开展流动人口子女融合项目。',
      highlights: '协助举办 20 场社区融合活动。'
    }
  ],
  projects: [
    {
      projectName: '“温暖夕阳”长者关爱计划',
      projectDate: '2023.01 - 2024.12',
      partner: '福田区民政局',
      targetGroup: '独居/高龄长者',
      content: '通过入户走访、适老化改造咨询及社区康乐活动，提升长者生活质量。',
      result: '项目满意度达 98%，被评为年度优秀社区服务项目。'
    },
    {
      projectName: '“青禾成长”心理支持项目',
      projectDate: '2020.05 - 2021.12',
      partner: '越秀区教育局',
      targetGroup: '初中生',
      content: '建立校园心理咨询室，开展情绪管理工作坊。',
      result: '覆盖 3 所学校，服务学生 800 余人次。'
    }
  ],
  certificates: [
    {
      title: '中华人民共和国社会工作者职业资格证书 (中级)',
      imageUrl: 'https://picsum.photos/seed/cert1/600/400',
      issueDate: '2020.11',
      issuer: '人力资源和社会保障部'
    },
    {
      title: '心理咨询师二级证书',
      imageUrl: 'https://picsum.photos/seed/cert2/600/400',
      issueDate: '2019.05',
      issuer: '中国心理学会'
    },
    {
      title: '优秀社工荣誉证书',
      imageUrl: 'https://picsum.photos/seed/cert3/600/400',
      issueDate: '2022.12',
      issuer: '深圳市社工协会'
    }
  ],
  reviews: [
    {
      source: '福田区民政局项目办',
      date: '2024.01',
      content: '陈晓琳同志在“温暖夕阳”项目中表现出极高的专业素养和责任感，深受长者喜爱。'
    },
    {
      source: '越秀区某中学德育处',
      date: '2021.06',
      content: '陈老师的心理辅导非常有效，帮助多名学生走出了情绪阴霾，是学校不可或缺的伙伴。'
    }
  ],
  verifiedBy: '深圳市社会工作者协会',
  updatedAt: '2026-02-25 14:30',
  verificationNote: '本页面信息已通过机构核验，注册状态实时同步。',
  officialContact: '0755-8888XXXX'
};
