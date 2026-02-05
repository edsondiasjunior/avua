import localFont from "next/font/local";

export const nohemi = localFont({
  src: [
    { path: "../fonts/Nohemi-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Nohemi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Nohemi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Nohemi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

export const workSans = localFont({
  src: [{ path: "../fonts/WorkSans-VariableFont_wght.ttf", style: "normal" }],
  variable: "--font-work-sans",
  display: "swap",
});
