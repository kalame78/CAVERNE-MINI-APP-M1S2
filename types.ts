
export enum Step {
  CHALLENGE = 'CHALLENGE',
  ANALYSIS = 'ANALYSIS',
  EXPERIENCE = 'EXPERIENCE',
  RESONANCE = 'RESONANCE',
  COMMITMENT = 'COMMITMENT'
}

export interface QuizQuestion {
  id: number;
  type: 'text' | 'choice';
  question: string;
  options?: string[];
  answer: string;
  hint?: string;
}
