import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA, type ManifestOptions } from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> | false = {
  theme_color: "#ffffff",
  background_color: "#ffffff",
  icons: [
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "icon512_maskable.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "icon512_rounded.png",
      type: "image/png",
    },
  ],
  screenshots: [
    {
      src: "/public/screenshots/desktop.png",
      type: "image/png",
      sizes: "3195x1684",
      form_factor: "wide",
    },
    {
      src: "/public/screenshots/mobile.png",
      type: "image/png",
      sizes: "1128x1498",
      form_factor: "narrow",
    },
  ],
  orientation: "any",
  display: "standalone",
  lang: "ru-RU",
  name: "Заметки",
  short_name: "notes",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*{html,css,js,ico,png,svg}"],
      },
      manifest: manifest,
    }),
  ],
});
