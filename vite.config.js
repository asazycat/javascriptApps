import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

// paths
const rootIndex = resolve(__dirname, 'index.html')
const appsDir = resolve(__dirname, 'src/apps')

// helper function to recursively find all index.html files
function getHtmlEntries(dir, base = 'apps') {
  const entries = {}

  for (const name of fs.readdirSync(dir)) {
    const fullPath = resolve(dir, name)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      const indexPath = resolve(fullPath, 'index.html')
      if (fs.existsSync(indexPath)) {
        // create a clean key for the entry name
        const entryName = `${base}/${name}`
        entries[entryName] = indexPath
      }
      // recursively check nested folders
      Object.assign(entries, getHtmlEntries(fullPath, `${base}/${name}`))
    }
  }

  return entries
}

// collect all entries
const appsInput = getHtmlEntries(appsDir)
const input = {
  main: rootIndex,
  ...appsInput
}

// export config
export default defineConfig({
  build: {
    rollupOptions: {
      input
    }
  }
})