import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/styles/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { calmxBranding } from "@/styles/branding";

interface MeditationCardProps {
  title: string;
  titleHindi: string;
  duration: string;
  description: string;
  gradient: string[];
}

export function MeditationCard({
  title,
  titleHindi,
  duration,
  description,
  gradient,
  icon,
}: MeditationCardProps & { icon: string }) {
  return (
    <LinearGradient
      colors={gradient}
      style={styles.card}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardTitleHindi}>{titleHindi}</Text>
          </View>
          <MaterialCommunityIcons
            name={icon}
            size={32}
            color="white"
            style={styles.cardIcon}
          />
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardDescription}>{description}</Text>
          <View style={styles.durationContainer}>
            <MaterialCommunityIcons
              name="clock-outline"
              size={18}
              color="white"
            />
            <Text style={styles.durationText}>{duration}</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "transparent",
  },
  gradientHeader: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    ...calmxBranding.design.shadows.medium,
  },
  welcomeText: {
    fontSize: theme.typography.sizes.h3,
    color: "rgba(255,255,255,0.8)",
    fontFamily: theme.typography.fonts.medium,
  },
  appTitle: {
    fontSize: 42,
    color: theme.colors.white,
    fontFamily: theme.typography.fonts.bold,
    marginTop: 4,
  },
  tagline: {
    fontSize: theme.typography.sizes.body,
    color: "rgba(255,255,255,0.9)",
    fontFamily: theme.typography.fonts.regular,
    marginTop: theme.spacing.sm,
  },
  content: {
    flex: 1,
    marginTop: 180,
  },
  cardsContainer: {
    padding: theme.spacing.lg,
  },
  card: {
    borderRadius: theme.borderRadius.lg,
    overflow: "hidden",
    ...calmxBranding.design.shadows.medium,
  },
  cardContent: {
    padding: theme.spacing.lg,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  cardTitle: {
    fontSize: theme.typography.sizes.h2,
    color: theme.colors.white,
    fontFamily: theme.typography.fonts.bold,
  },
  cardTitleHindi: {
    fontSize: theme.typography.sizes.h3,
    color: "rgba(255,255,255,0.9)",
    fontFamily: theme.typography.fonts.medium,
    marginTop: 2,
  },
  cardIcon: {
    ...calmxBranding.design.shadows.light,
  },
  cardBody: {
    marginTop: theme.spacing.md,
  },
  cardDescription: {
    fontSize: theme.typography.sizes.body,
    color: "rgba(255,255,255,0.9)",
    fontFamily: theme.typography.fonts.regular,
    lineHeight: 22,
  },
  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.spacing.md,
  },
  durationText: {
    fontSize: theme.typography.sizes.body,
    color: theme.colors.white,
    fontFamily: theme.typography.fonts.medium,
    marginLeft: theme.spacing.xs,
  },
});

// const styles = StyleSheet.create({
//   card: {
//     borderRadius: theme.borderRadius.lg,
//     marginBottom: theme.spacing.md,
//     overflow: "hidden",
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   content: {
//     padding: theme.spacing.lg,
//   },
//   title: {
//     // ...globalStyles.heading2,
//     color: theme.colors.white,
//   },
//   titleHindi: {
//     // ...globalStyles.heading3,
//     color: theme.colors.white,
//     opacity: 0.9,
//     marginBottom: theme.spacing.xs,
//   },
//   duration: {
//     // ...globalStyles.bodyText,
//     color: theme.colors.white,
//     opacity: 0.8,
//     marginBottom: theme.spacing.sm,
//   },
//   description: {
//     // ...globalStyles.bodyText,
//     color: theme.colors.white,
//     opacity: 0.9,
//   },
// });
