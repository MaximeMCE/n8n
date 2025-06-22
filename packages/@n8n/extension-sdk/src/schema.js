'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.extensionManifestSchema = void 0;
const zod_1 = require('zod');
exports.extensionManifestSchema = zod_1.z.object({
	name: zod_1.z.string(),
	displayName: zod_1.z.string(),
	description: zod_1.z.string(),
	publisher: zod_1.z.string(),
	version: zod_1.z.string(),
	categories: zod_1.z.array(zod_1.z.string()),
	entry: zod_1.z.object({
		backend: zod_1.z.string(),
		frontend: zod_1.z.string(),
	}),
	minSDKVersion: zod_1.z.string(),
	permissions: zod_1.z.object({
		frontend: zod_1.z.array(zod_1.z.string()),
		backend: zod_1.z.array(zod_1.z.string()),
	}),
	events: zod_1.z.array(zod_1.z.string()),
	extends: zod_1.z.object({
		views: zod_1.z.object({
			workflows: zod_1.z.object({
				header: zod_1.z.string(),
			}),
		}),
	}),
});
//# sourceMappingURL=schema.js.map
