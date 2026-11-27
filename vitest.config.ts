import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    name: 'dungarees',
    exclude: [
      // Setting `exclude` replaces vitest's default, which is what keeps node_modules out — a
      // dependency installed under src ships its own .ts tests and would be collected.
      '**/node_modules/**',
      'src/core/marbles.test.ts', // jest implementation, needs a global expect
    ],
    setupFiles: ['./vitestSetup.ts'],
    typecheck: {
      enabled: true,
      tsconfig: './tsconfig.json',
      include: ['src/**/*.test.{ts,tsx}'],
      exclude: ['**/node_modules/**'],
    },
  },
})
