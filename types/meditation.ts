// types/meditation.ts

export interface Section {
  id: string;
  title: string;
  titleEnglish: string;
  content: string[];
  pauses?: number[];
  silentPeriods?: {
    duration: number;
    gentleReminders: boolean;
  };
  soundEffect?: string;
  pauseDuration?: number;
}

export interface MeditationContent {
  title: string;
  titleEnglish: string;
  duration: string;
  sections: Section[];
}

export interface MeditationType {
  id: string;
  title: string;
  titleHindi: string;
  duration: string;
  description: string;
  gradient: string[];
  icon: string;
}

export interface MeditationSection {
  id: string;
  title: string;
  titleEnglish: string;
  content: string[];
  pauses: number[];
}
