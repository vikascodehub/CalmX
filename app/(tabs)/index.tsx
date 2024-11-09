import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import { Audio } from "expo-av";
import * as Speech from "expo-speech";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { meditationContent } from "@/constants/meditationData";
import { theme } from "@/styles/theme";
import { globalStyles } from "@/styles/globalStyles";

export default function MeditationScreen() {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [currentContentIndex, setCurrentContentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const soundRef = useRef<Audio.Sound | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const meditationRef = useRef<boolean>(false);

  // Add refs to track current positions
  const sectionRef = useRef<number>(0);
  const contentIndexRef = useRef<number>(0);

  useEffect(() => {
    setupAudio();
    return () => {
      cleanup();
    };
  }, []);

  const cleanup = async () => {
    meditationRef.current = false;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
    }
    await Speech.stop();
  };

  const setupAudio = async () => {
    try {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        shouldDuckAndroid: true,
      });
    } catch (error) {
      console.error("Failed to setup audio:", error);
      Alert.alert(
        "Error",
        "Failed to initialize audio. Please restart the app."
      );
    }
  };

  const speakContent = async (text: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setIsSpeaking(true);
      Speech.speak(text, {
        language: "hi-IN",
        pitch: 1.0,
        rate: 0.75,
        onDone: () => {
          setIsSpeaking(false);
          resolve();
        },
        onError: (error) => {
          console.error("Speech error:", error);
          setIsSpeaking(false);
          reject(error);
        },
        onStopped: () => {
          setIsSpeaking(false);
          resolve();
        },
      });
    });
  };

  const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
      timerRef.current = setTimeout(resolve, ms);
    });
  };

  const startMeditation = async () => {
    try {
      setIsLoading(true);
      setIsPlaying(true);
      meditationRef.current = true;

      // Reset both state and refs
      setCurrentSection(0);
      setCurrentContentIndex(0);
      sectionRef.current = 0;
      contentIndexRef.current = 0;

      await runMeditation();
    } catch (error) {
      console.error("Error starting meditation:", error);
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
    }
  };

  const runMeditation = async () => {
    while (
      meditationRef.current &&
      sectionRef.current < meditationContent.sections.length
    ) {
      const section = meditationContent.sections[sectionRef.current];

      // Speak section title
      if (meditationRef.current) {
        await speakContent(section.title);
        await delay(1000); // Pause after title
      }

      // Speak section content
      while (
        meditationRef.current &&
        contentIndexRef.current < section.content.length
      ) {
        // Update state for UI
        setCurrentSection(sectionRef.current);
        setCurrentContentIndex(contentIndexRef.current);

        await speakContent(section.content[contentIndexRef.current]);

        // Pause between content items
        const pauseDuration = section.pauses?.[contentIndexRef.current] || 1000;
        await delay(pauseDuration);

        // Increment content index
        contentIndexRef.current++;
      }

      // Move to next section if meditation is still running
      if (meditationRef.current) {
        if (sectionRef.current < meditationContent.sections.length - 1) {
          // Reset content index and increment section
          contentIndexRef.current = 0;
          sectionRef.current++;

          // Update state for UI
          setCurrentSection(sectionRef.current);
          setCurrentContentIndex(0);

          // Pause between sections
          await delay(section.silentPeriods?.duration || 1000);
        } else {
          // End of meditation
          meditationRef.current = false;
          setIsPlaying(false);
          // Reset all positions
          sectionRef.current = 0;
          contentIndexRef.current = 0;
          setCurrentSection(0);
          setCurrentContentIndex(0);
        }
      }
    }
  };

  const pauseMeditation = async () => {
    meditationRef.current = false;
    setIsPlaying(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }
    await Speech.stop();
    setIsSpeaking(false);
  };

  const currentSectionData = meditationContent.sections[currentSection];

  return (
    <View style={globalStyles.container}>
      <StatusBar style="light" />

      <LinearGradient
        colors={theme.colors.gradient.primary}
        style={globalStyles.gradientHeader}
      >
        <Text style={[globalStyles.heading1, styles.headerText]}>
          {meditationContent.title}
        </Text>
        <Text style={[globalStyles.heading3, styles.headerText]}>
          {meditationContent.titleEnglish}
        </Text>
        <Text style={[styles.duration, styles.headerText]}>
          {meditationContent.duration}
        </Text>
      </LinearGradient>

      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={[
            globalStyles.button,
            styles.actionButton,
            isPlaying && styles.buttonPlaying,
            (isLoading || isSpeaking) && styles.buttonActive,
          ]}
          onPress={isPlaying ? pauseMeditation : startMeditation}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color={theme.colors.white} />
          ) : (
            <Text style={globalStyles.buttonText}>
              {isPlaying ? "रुकें (Pause)" : "शुरू करें (Start)"}
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.contentContainer}>
        {currentSectionData && (
          <View style={[globalStyles.card, styles.sectionCard]}>
            <Text
              style={[
                globalStyles.heading2,
                isSpeaking && styles.activeSpeaking,
              ]}
            >
              {currentSectionData.title}
            </Text>
            <Text style={globalStyles.heading3}>
              {currentSectionData.titleEnglish}
            </Text>
            {currentSectionData.content.map((text, index) => (
              <Text
                key={index}
                style={[
                  globalStyles.bodyText,
                  styles.contentText,
                  currentContentIndex === index &&
                    isSpeaking &&
                    styles.activeSpeaking,
                ]}
              >
                {text}
              </Text>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: theme.colors.white,
    marginBottom: theme.spacing.sm,
  },
  duration: {
    fontSize: theme.typography.sizes.body,
    fontFamily: theme.typography.fonts.regular,
    opacity: 0.8,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: theme.spacing.lg,
    marginTop: -theme.spacing.lg,
    zIndex: 1,
  },
  actionButton: {
    backgroundColor: theme.colors.primary,
  },
  buttonPlaying: {
    backgroundColor: theme.colors.error,
  },
  buttonActive: {
    backgroundColor: theme.colors.success,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },
  sectionCard: {
    marginBottom: theme.spacing.md,
  },
  contentText: {
    marginBottom: theme.spacing.sm,
  },
  activeSpeaking: {
    color: theme.colors.primary,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm,
    ...theme.shadows.small,
  },
});
