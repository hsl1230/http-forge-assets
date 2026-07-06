// Pre-request: build a dynamic payload value and expose it as a variable
pm.environment.set('resource_label', 'Device-' + Date.now());
console.log('[Showcase] Creating resource with label', pm.environment.get('resource_label'));
