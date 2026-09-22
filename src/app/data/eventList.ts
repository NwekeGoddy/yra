export interface YraEvent {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  price: string;
  details: string;
}

export const EVENT_LIST: YraEvent[] = [
  {
    id: 1,
    title: 'BootCamp',
    category: 'BootCamp',
    description: 'Intensive hands-on coding bootcamp for aspiring developers.',
    date: '15/03/2025',
    time: '9:00 AM - 4:00 PM',
    venue: 'YRA Hall, Lagos',
    price: '₦25,000',
    details:
      'This BootCamp covers full-stack web development with real-world projects, mentorship, and portfolio building. You will work in teams, ship features weekly, and finish with a deployable capstone project.',
  },
  {
    id: 2,
    title: 'SLR',
    category: 'SLR',
    description: 'Systematic Literature Review training for researchers.',
    date: '22/03/2025',
    time: '10:00 AM - 2:00 PM',
    venue: 'Online (Zoom)',
    price: '₦10,000',
    details:
      'Learn how to conduct a proper Systematic Literature Review — search strategy design, screening, quality assessment, data extraction, and synthesis. Ideal for postgraduate students and academic researchers.',
  },
  {
    id: 3,
    title: 'SPSS',
    category: 'SPSS',
    description: 'Data analysis with SPSS for beginners and intermediates.',
    date: '05/04/2025',
    time: '11:00 AM - 3:00 PM',
    venue: 'YRA Lab, Abuja',
    price: '₦15,000',
    details:
      'Master SPSS from data entry to advanced statistical analysis — descriptives, regression, ANOVA, correlation, and reporting. Perfect for research, business analytics, and thesis work.',
  },
];