export function defineBackendExtension(options: {
	setup: (n8n: { logger: Console }) => void;
}) {
	return options;
}
