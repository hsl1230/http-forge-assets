// Request-level pre-request script
console.log('=== Request Pre-request Script ===');
console.log('Request name:', pm.info.requestName);

// Set request-specific variable
pm.variables.set('request_start_time', Date.now());
console.log('Request start time set');