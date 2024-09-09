import { defineConfig } from '@tutorialkit/theme';

export default defineConfig({
  content: {
    pipeline: {
      include: '**',
    },
  },

  // add your UnoCSS config here: https://unocss.dev/guide/config-file
});
