import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/backend/index.ts'],
	outDir: 'dist/backend',
	format: ['cjs', 'esm'],
	sourcemap: true,
	dts: false,
});
