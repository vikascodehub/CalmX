// app/index.tsx
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/styles/theme";
import { globalStyles } from "@/styles/globalStyles";
import { calmxBranding } from "@/styles/branding";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - theme.spacing.lg * 2;

interface MeditationCardProps {
  title: string;
  titleHindi: string;
  duration: string;
  description: string;
  gradient: string[];
}

const meditationTypes = [
  {
    id: "guided-breathing",
    title: "Guided Breathing",
    titleHindi: "श्वास ध्यान",
    duration: "10 mins",
    description: "Calm your mind through focused breathing exercises",
    gradient: ["#4CA1AF", "#2C3E50"],
    icon: "breath",
  },
  {
    id: "stress-relief",
    title: "Stress Relief",
    titleHindi: "तनाव मुक्ति",
    duration: "15 mins",
    description: "Release tension and find inner peace",
    gradient: ["#FF512F", "#DD2476"],
    icon: "meditation",
  },
  {
    id: "anxiety-relief",
    title: "Anxiety Relief",
    titleHindi: "चिंता मुक्ति",
    duration: "12 mins",
    description: "Reduce anxiety through mindful meditation",
    gradient: ["#56ab2f", "#a8e063"],
    icon: "peace",
  },
  {
    id: "sleep-better",
    title: "Sleep Better",
    titleHindi: "अच्छी नींद",
    duration: "20 mins",
    description: "Relax your mind and body for better sleep",
    gradient: ["#141E30", "#243B55"],
    icon: "moon-waning-crescent",
  },
];

export default function Dashboard() {
  const insets = useSafeAreaInsets();
  const scrollY = new Animated.Value(0);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [200, 120],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <LinearGradient
          colors={calmxBranding.colors.gradients.primary}
          style={[
            styles.gradientHeader,
            { paddingTop: insets.top + theme.spacing.md },
          ]}
        >
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.appTitle}>CalmX</Text>
          <Text style={styles.tagline}>{calmxBranding.voice.taglines[0]}</Text>
        </LinearGradient>
      </Animated.View>

      <Animated.ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.cardsContainer}>
          {meditationTypes.map((meditation, index) => (
            <Link
              key={meditation.id}
              href={`/meditations/${meditation.id}`}
              asChild
            >
              <TouchableOpacity
                style={[
                  styles.cardWrapper,
                  { marginTop: index === 0 ? 0 : theme.spacing.lg },
                ]}
              >
                <MeditationCard {...meditation} />
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
}

// components/MeditationCard.tsx
function MeditationCard({
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
  cardWrapper: {
    width: CARD_WIDTH,
  },
  card: {
    borderRadius: theme.borderRadius.lg,
    overflow: "hidden",
    marginTop: 10,
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
