// Request-level test script
console.log('=== Request Test Script ===');

pm.test('Collection script test passed', function() {
    pm.response.to.have.status(200);
});

// Calculate request duration
const startTime = pm.variables.get('request_start_time');
const duration = Date.now() - startTime;
console.log('Request duration:', duration, 'ms');

// Store in collection variable
pm.collectionVariables.set('last_request_duration', duration.toString());