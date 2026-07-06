// Collection-level pre-request script
// Runs before EVERY request in this collection.
console.log('[Showcase] Starting request:', pm.info.requestName);
pm.environment.set('request_started_at', new Date().toISOString());
