export type JourneyKind = 'work' | 'education' | 'milestone';

export interface JourneyEntry {
  hash: string;
  kind: JourneyKind;
  ref?: { label: string; type: 'head' | 'branch' | 'tag' }[];
  title: string;
  org: string;
  period: string;
  date: string;
  description?: string;
}

export const journey: JourneyEntry[] = [
  {
    hash: 'a7f2e91',
    kind: 'work',
    ref: [{ label: 'HEAD -> main', type: 'head' }, { label: 'origin/main', type: 'branch' }],
    title: 'feat: ai/ml engineer @ avasoft',
    org: 'Avasoft',
    period: 'present',
    date: '2026-now',
    description: 'building document-processing and extraction pipelines on aws/bedrock.',
  },
  {
    hash: '3d4b8c2',
    kind: 'work',
    ref: [{ label: 'v1.0-grad', type: 'tag' }],
    title: 'feat: research intern @ ericsson india',
    org: 'Ericsson India',
    period: 'Aug 2024 — Jan 2025',
    date: '2024-08',
    description: 'research on ai/ml applications in telecom.',
  },
  {
    hash: '9e1d6a0',
    kind: 'education',
    ref: [{ label: 'tag/btech-cse', type: 'tag' }],
    title: 'tag: b.tech computer science — graduated',
    org: 'IIITDM Kancheepuram',
    period: '2021 — 2025',
    date: '2025-05',
    description: 'cse with focus on ai/ml, computer vision, robotics.',
  },
  {
    hash: 'b2c5f47',
    kind: 'work',
    title: 'feat: computer vision intern @ wizbees',
    org: 'Wizbees Technologies',
    period: 'May 2024 — Jul 2024',
    date: '2024-05',
    description: 'computer vision pipelines and deep learning prototypes.',
  },
  {
    hash: '6a0e8d3',
    kind: 'work',
    title: 'feat: robotics intern @ veyyil robotics',
    org: 'Veyyil Robotics',
    period: 'May 2023 — Oct 2023',
    date: '2023-05',
    description: 'autonomous robotic systems with real-time object detection.',
  },
  {
    hash: 'c8f3119',
    kind: 'education',
    ref: [{ label: 'branch/iiitdm', type: 'branch' }],
    title: 'branch: enrolled — b.tech cse',
    org: 'IIITDM Kancheepuram',
    period: '2021',
    date: '2021-08',
    description: 'four-year journey starts.',
  },
  {
    hash: '4d7a2b9',
    kind: 'education',
    ref: [{ label: 'tag/v0.2-hsc', type: 'tag' }],
    title: 'tag: higher secondary — cleared',
    org: 'Kola Perumal Chetty Vaishnav Sr. Sec. School',
    period: '2019 — 2021',
    date: '2021-05',
  },
  {
    hash: '1e0a5c8',
    kind: 'education',
    ref: [{ label: 'tag/v0.1-ssc', type: 'tag' }],
    title: 'tag: secondary school — cleared',
    org: 'Jawahar Vidyalaya Sr. Sec. School',
    period: '2009 — 2019',
    date: '2019-05',
  },
  {
    hash: '0000000',
    kind: 'milestone',
    title: 'initial commit',
    org: '~/jawahar',
    period: '',
    date: '',
    description: 'project bootstrapped.',
  },
];
