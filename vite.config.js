import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input:  ['src/apps/calculator/index.js', 'src/apps/timer/index.js', 'src/apps/todo-list/index.js'],
      lib: {
        entry: ['src/main.js'],
        fileName: (format, entryName) => `my-lib-${entryName}.${format}.js`,
        cssFileName: 'my-lib-style',
      }
    },
  },
})