// styles/branding.ts

export const calmxBranding = {
  // Brand Colors
  colors: {
    primary: "#3A71EC", // Modern blue - main brand color
    secondary: "#6C63FF", // Electric indigo - accent color
    neutralDark: "#2C3E50", // Dark blue-gray - text
    neutralLight: "#ECF0F1", // Light gray - backgrounds
    accent: {
      success: "#27AE60", // Green - success states
      warning: "#F1C40F", // Yellow - warning states
      error: "#E74C3C", // Red - error states
      info: "#3498DB", // Light blue - info states
    },
    gradients: {
      primary: ["#3A71EC", "#6C63FF"],
      calming: ["#ECF0F1", "#FFFFFF"],
    },
  },

  // Typography
  typography: {
    fontFamily: {
      primary: "Inter", // Modern, clean font
      secondary: "Poppins", // Softer, friendly font
    },
    sizes: {
      heading1: 32,
      heading2: 24,
      heading3: 20,
      body: 16,
      caption: 14,
    },
  },

  // Brand Voice
  voice: {
    taglines: [
      "Peace at your pace",
      "Calm for the digital age",
      "Mindfulness meets modern",
      "Your daily dose of zen",
    ],
    keywords: [
      "modern mindfulness",
      "digital peace",
      "tech-enabled tranquility",
      "next-gen meditation",
    ],
  },

  // Design Elements
  design: {
    borderRadius: {
      small: 8,
      medium: 12,
      large: 16,
      full: 9999,
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    shadows: {
      light: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      },
      medium: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
      },
    },
  },

  // Animation Timings
  animation: {
    durations: {
      fast: 200,
      normal: 300,
      slow: 500,
    },
    easings: {
      default: "ease-in-out",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },
};
