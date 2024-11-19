import {
  meditationContents,
  meditationTypes,
} from "@/constants/meditationData";
import { MeditationContent, MeditationType } from "@/types/meditation";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// API class
export class MeditationAPI {
  // Get all meditation cards
  static async getMeditationCards(): Promise<{
    success: boolean;
    data?: MeditationType[];
    error?: string;
  }> {
    try {
      await delay(800); // Simulate network delay
      return {
        success: true,
        data: meditationTypes,
      };
    } catch (error) {
      return {
        success: false,
        error: "Failed to fetch meditation cards",
      };
    }
  }

  // Get meditation content by ID
  static async getMeditationContent(id: string): Promise<{
    success: boolean;
    data?: MeditationContent;
    error?: string;
  }> {
    try {
      await delay(1000); // Simulate network delay

      const content = meditationContents[id];

      if (!content) {
        return {
          success: false,
          error: "Meditation content not found",
        };
      }

      return {
        success: true,
        data: content,
      };
    } catch (error) {
      return {
        success: false,
        error: "Failed to fetch meditation content",
      };
    }
  }
}

// Usage example:
/*
import { MeditationAPI } from './api/mockMeditationApi';

// Getting meditation cards
async function fetchMeditationCards() {
  try {
    const response = await MeditationAPI.getMeditationCards();
    if (response.success && response.data) {
      console.log('Meditation cards:', response.data);
    } else {
      console.error('Error:', response.error);
    }
  } catch (error) {
    console.error('Failed to fetch meditation cards:', error);
  }
}

// Getting specific meditation content
async function fetchMeditationContent(id: string) {
  try {
    const response = await MeditationAPI.getMeditationContent(id);
    if (response.success && response.data) {
      console.log('Meditation content:', response.data);
    } else {
      console.error('Error:', response.error);
    }
  } catch (error) {
    console.error('Failed to fetch meditation content:', error);
  }
}
*/
