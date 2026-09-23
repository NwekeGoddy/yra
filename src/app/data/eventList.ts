export interface YraEvent {
  id: number;
  title: string;
  cardTitle: string;
  category: string;
  categoryType: 'training' | 'seminar' | 'workshop';
  shortDescription: string;
  date: string;
  location: string;
  duration: string;
  fee?: string;
  hasFee: boolean;
  heroColor: 'teal' | 'orange';
  details: string;
}

export const EVENT_LIST: YraEvent[] = [
  {
    id: 1,
    title: 'BOOTCAMP',
    cardTitle: 'YRA Global Research Bootcamp 2026',
    category: 'BootCamp',
    categoryType: 'training',
    shortDescription: '',
    date: '2025-08-20',
    location: 'Online',
    duration: '4 Weeks',
    fee: '₦15,000',
    hasFee: true,
    heroColor: 'teal',
    details:
      'This BootCamp covers full-stack research methodology with real-world projects, mentorship, and portfolio building. You will work in teams, ship features weekly, and finish with a deployable capstone project.',
  },
  {
    id: 2,
    title: 'SLR',
    cardTitle: 'How to Write a Systematic Literature Review',
    category: 'SLR',
    categoryType: 'seminar',
    shortDescription: 'Practical SLR writing and publication session.',
    date: '2025-09-20',
    location: 'Online',
    duration: '1 Day',
    hasFee: false,
    heroColor: 'orange',
    details:
      'Learn how to conduct a proper Systematic Literature Review — search strategy design, screening, quality assessment, data extraction, and synthesis. Ideal for postgraduate students and academic researchers.',
  },
  {
    id: 3,
    title: 'SPSS',
    cardTitle: 'Data Analysis with SPSS for Researchers',
    category: 'SPSS',
    categoryType: 'workshop',
    shortDescription: 'Hands-on statistical analysis workshop.',
    date: '2025-06-20',
    location: 'Online',
    duration: '2 Days',
    hasFee: false,
    heroColor: 'teal',
    details:
      'Master SPSS from data entry to advanced statistical analysis — descriptives, regression, ANOVA, correlation, and reporting. Perfect for research, business analytics, and thesis work.',
  },
  {
    id: 4,
    title: 'BOOTCAMP',
    cardTitle: 'YRA Global Research Bootcamp 2026',
    category: 'BootCamp',
    categoryType: 'training',
    shortDescription: '',
    date: '2025-02-20',
    location: 'Online',
    duration: '4 Weeks',
    fee: '₦15,000',
    hasFee: true,
    heroColor: 'teal',
    details:
      'This BootCamp covers full-stack research methodology with real-world projects, mentorship, and portfolio building. You will work in teams, ship features weekly, and finish with a deployable capstone project.',
  },
];
