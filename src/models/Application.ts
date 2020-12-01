interface ApplicationApplication {
  id: number;
  name: string;
  description: string;
  company: string;
  city: string;
  state: string;
  contractType: string;
  contractDuration: string;
  criteriaList: '[{"id":"_imawsud6e","name":"UML","description":"UML","profile":4,"weight":5},{"id":"_d02z32xfw","name":"Ingles","description":"Ingles","profile":4,"weight":3},{"id":"_hm1vaxxht","name":"Pontos de função","description":"Pontos de função","profile":1,"weight":1},{"id":"_z2j5jhzk5","name":"Experiencia profissional","description":"Experiencia profissional","profile":4,"weight":2}]';
  average: 3.73;
  userId: number;
}

export interface Application {
  id: number;
  answers: string;
  userId: number;
  jobId: number;
  application: ApplicationApplication;
  createdAt: string;
}

export interface Answer {
  id: number;
  name: string;
  description: string;
  profile: number;
  weight: number;
  applicantAnswer: string;
}
