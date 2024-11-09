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
