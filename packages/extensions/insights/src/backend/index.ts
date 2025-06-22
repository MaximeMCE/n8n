import { defineBackendExtension, type BackendExtension } from '@n8n/extension-sdk/backend';

console.log('✅ insights extension loaded');

export default defineBackendExtension({
	setup(_: BackendExtension) {
		console.log('🧠 Insights extension setup() executed');
	},
});
