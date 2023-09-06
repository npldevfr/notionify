import { defineConfig } from 'tsup'
import jsonPackage from './package.json'

const external: string[] = [
  ...Object.keys(jsonPackage.dependencies || {}),
  ...Object.keys(jsonPackage.peerDependencies || {}),
]

export default defineConfig((options) => {
  return [
    {
      ...options,
      entryPoints: ['src/index.ts'],
      external,
      dts: true,
      clean: true,
      target: 'node16',
      format: ['esm'],
      outExtension: () => ({ js: '.mjs' }),
    },
  ]
})
