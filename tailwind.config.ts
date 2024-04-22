import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      blue50: "#EBF0FE",
      blue100: "#D5DFFB",
      blue200: "#ABBFF8",
      blue300: "#ABBFF8",
      blue400: "#5780F1",
      blue500: "#2D60ED",
      blue600: "#244DBE",
      blue700: "#1B3A8E",
      blue800: "#12265F",
      blue900: "#0C193E",
      blue950: "#09132F",
      gray50: "#FAFAFA",
      gray100: "#F2F3F5",
      gray200: "#E6E7EB",
      gray300: "#C6C8CC",
      gray400: "#ACAEB3",
      gray500: "#919399",
      gray600: "#787A80",
      gray700: "#5F6166",
      gray800: "#46484D",
      gray900: "#2E3033",
      gray950: "#17181A",
      attention: '#3349D8',
      success: '#2C8C1C',
      coution: '#B75F00',
      critical: '#DB2C36',
      modalBackground: 'rgba(9, 19, 47, 0.08)',
      attentionBackground: '#EFF4F4',
      successBackground: '#E7FAD4',
      coutionBackground: '#FFF2CC',
      criticalBackground: '#FFE6D8',
      transparent: 'transparent',
      current: 'currentColor'
    },
    fontSize: {
      headlineLarge: [
        '64px',
        {
          fontWeight: 700,
          lineHeight: '72px',
        },
      ],
      headlineMedium: [
        '48px',
        {
          fontWeight: 700,
          lineHeight: '52px',
        },
      ],
      headlineSmall: [
        '40px',
        {
          fontWeight: 700,
          lineHeight: '42px',
        },
      ],
      titleLarge: [
        '32px',
        {
          fontWeight: 600,
          lineHeight: '48px',
        },
      ],
      titleMedium: [
        '24px',
        {
          fontWeight: 600,
          lineHeight: '36px',
        },
      ],
      titleSmall: [
        '20px',
        {
          fontWeight: 600,
          lineHeight: '32px',
        },
      ],
      bodyLarge: [
        '20px',
        {
          fontWeight: 500,
          lineHeight: '28px',
        },
      ],
      bodyMedium: [
        '18px',
        {
          fontWeight: 400,
          lineHeight: '26px',
        },
      ],
      bodySmall: [
        '16px',
        {
          fontWeight: 400,
          lineHeight: '24px',
        },
      ],
      labelLarge: [
        '14px',
        {
          fontWeight: 500,
          lineHeight: '20px',
        },
      ],
      labelMedium: [
        '14px',
        {
          fontWeight: 400,
          lineHeight: '20px',
        },
      ],
      labelSmall: [
        '12px',
        {
          fontWeight: 400,
          lineHeight: '16px',
        },
      ],
    },
    screens: {
      sm: { max: '719px' },
      md: { min: '720px', max: '1419px' },
      lg: { min: '1420px' },
    },
  },
  plugins: [],
};
export default config;
