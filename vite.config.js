// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

/**
 * אם שם הריפו שלך הוא למשל "reactulator"
 * שים   base: '/reactulator/'
 * אם תחליט על שם אחר—שנה גם כאן וגם ב-manifest (start_url) במקרה הצורך.
 */
export default defineConfig({
  base: '/reactulator/',          // <--- הנתיב ש-GitHub Pages מוסיף אוטומטית
  plugins: [
    react(),

    // תוסף PWA
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],   // או png ולהוסיף אם תרצה
      manifest: {
        name: 'Reactulator',
        short_name: 'Reactulator',
        start_url: '/reactulator/',     // הבסיס + "/"
        display: 'standalone',
        background_color: '#4f46e5',
        theme_color: '#4f46e5',
        icons: [
          {
            src: '/reactulator/icons/icon-192.png', // שים לב ל-base כאן גם
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/reactulator/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
