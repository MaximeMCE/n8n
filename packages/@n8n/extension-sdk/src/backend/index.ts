export { defineBackendExtension } from './defineBackendExtension.js';
export type { BackendExtension } from './types.js';

import fs from 'fs/promises';
import path from 'path';

export async function loadExtensionsFromFs(folderPath: string) {
	console.log(`🔍 [ExtensionSDK] Loading extensions from: ${folderPath}`);

	const files = await fs.readdir(folderPath);

	for (const file of files) {
		if (file.endsWith('.js')) {
			const fullPath = path.join(folderPath, file);
			console.log(`➡️  Loading extension: ${fullPath}`);
			await import(fullPath);
		}
	}
}
