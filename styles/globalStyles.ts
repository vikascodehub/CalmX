// styles/globalStyles.ts

import { Platform, StyleSheet } from "react-native";
import { theme } from "./theme";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  gradientHeader: {
    padding: theme.spacing.lg,
    paddingTop: Platform.OS === "ios" ? 50 : theme.spacing.lg,
    borderBottomLeftRadius: theme.borderRadius.lg,
    borderBottomRightRadius: theme.borderRadius.lg,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    ...theme.shadows.medium,
  },
  button: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.full,
    minWidth: 160,
    alignItems: "center",
    ...theme.shadows.small,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.typography.sizes.body,
    fontFamily: theme.typography.fonts.medium,
  },
  heading1: {
    fontSize: theme.typography.sizes.h1,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
    textAlign: "center",
  },
  heading2: {
    fontSize: theme.typography.sizes.h2,
    fontFamily: theme.typography.fonts.medium,
    color: theme.colors.text.primary,
  },
  heading3: {
    fontSize: theme.typography.sizes.h3,
    fontFamily: theme.typography.fonts.medium,
    color: theme.colors.text.secondary,
  },
  bodyText: {
    fontSize: theme.typography.sizes.body,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.text.primary,
    lineHeight: 24,
  },
});
