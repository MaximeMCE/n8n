'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var tsup_1 = require('tsup');
exports.default = (0, tsup_1.defineConfig)([
	{
		clean: false,
		entry: ['src/*.ts', '!src/*.test.ts', '!src/*.d.ts', '!src/__tests__/**/*'],
		outDir: 'dist',
		format: ['cjs', 'esm'],
		sourcemap: true,
		dts: false,
	},
	{
		clean: false,
		entry: [
			'src/backend/define.ts',
			'src/backend/index.ts',
			'src/backend/types.ts',
			'!src/backend/**/*.test.ts',
			'!src/backend/**/*.d.ts',
			'!src/backend/__tests__/**/*',
		],
		outDir: 'dist/backend',
		format: ['cjs', 'esm'],
		sourcemap: true,
		dts: false,
	},
	{
		clean: false,
		entry: [
			'src/frontend/define.ts',
			'src/frontend/index.ts',
			'src/frontend/types.ts',
			'!src/frontend/**/*.test.ts',
			'!src/frontend/**/*.d.ts',
			'!src/frontend/__tests__/**/*',
		],
		outDir: 'dist/frontend',
		format: ['cjs', 'esm'],
		sourcemap: true,
		dts: false,
	},
]);
