export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
};

export const certifications: Certification[] = [
  { title: 'Introduction to Generative AI', issuer: 'Google Cloud Skills Boost', date: 'October 2025', credentialId: 'WBYUI6BK7IJK' },
  { title: 'Introduction to Large Language Models', issuer: 'Google Cloud Skills Boost', date: 'October 2025', credentialId: 'FESVHYV5051B' },
  { title: 'Introduction to Responsible AI', issuer: 'Google Cloud Skills Boost', date: 'October 2025', credentialId: 'RVA8QVUCSTAL' },
];
