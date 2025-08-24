import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

const rootIndex = resolve(__dirname, 'index.html')
const appsDir = resolve(__dirname, 'src/apps')

const appsInput = fs.readdirSync(appsDir)
  .filter(name => fs.existsSync(resolve(appsDir, name, 'index.html')))
  .reduce((entries, name) => {
    entries[name] = resolve(appsDir, name, 'index.html')
    return entries
  }, {})


const input = {
  main: rootIndex,
  ...appsInput
}

export default defineConfig({
  build: {
    rollupOptions: {
      input
    }
  }
})