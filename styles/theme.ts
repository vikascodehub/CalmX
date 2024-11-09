// styles/theme.ts

import { Platform } from "react-native";

export const theme = {
  colors: {
    primary: "#3A71EC",
    secondary: "#6C63FF",
    success: "#27AE60",
    error: "#E74C3C",
    background: "#F5F5F5",
    white: "#FFFFFF",
    text: {
      primary: "#2C3E50",
      secondary: "#34495E",
      light: "#7F8C8D",
    },
    gradient: {
      primary: ["#3A71EC", "#6C63FF"],
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    full: 9999,
  },
  typography: {
    sizes: {
      h1: 28,
      h2: 22,
      h3: 18,
      body: 16,
      caption: 14,
    },
    fonts: {
      regular: Platform.select({ ios: "System", android: "Roboto" }),
      medium: Platform.select({ ios: "System", android: "Roboto-Medium" }),
      bold: Platform.select({ ios: "System", android: "Roboto-Bold" }),
    },
  },
  shadows: {
    small: Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
    medium: Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
};

export type Theme = typeof theme;
