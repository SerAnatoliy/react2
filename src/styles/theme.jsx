export const theme = Object.freeze({
  colors: {
    accent: "#026DD6",
    white: "#ffffff",
    gray: "#9e9e9e",
    light: "#f2f2f2",
    dark: "#212121",
    mainBackground: ["linear-gradient(to bottom, #0284FE,  #4BA7FE)"],
    tagBackground: ["linear-gradient(to bottom, #505256, #B0B7C3)"],
  },
  fontSizes: {
    small: "14px",
    medium: "18px",
    large: "22px",
  },
  spacing: (value) => `${4 * value}px`,
  shadows: {
    small:
      "0 0 1px 0 rgba(8, 11, 14, 0.06) 0 6px 6px -1px rgba(8, 11, 14, 0.1)",
    regular:
      "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1)",
    medium:
      "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 32px 40px -1px",
  },
  animation: {
    cubicBezier: "0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)",
  },
});
