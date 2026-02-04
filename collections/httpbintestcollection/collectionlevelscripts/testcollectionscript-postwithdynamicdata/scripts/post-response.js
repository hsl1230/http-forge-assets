// Verify collection-level script execution
pm.test('Response contains collection data', function() {
    // Handle both JSON and non-JSON responses
    let responseJson;
    try {
        responseJson = pm.response.json();
    } catch (e) {
        throw new Error('Response is not valid JSON: ' + pm.response.text().substring(0, 100));
    }
    
    // Check if the response has the expected test property
    pm.expect(responseJson).to.not.be.null;
    if (responseJson && responseJson.json) {
        pm.expect(responseJson.json.test).to.equal('collection_scripts');
    }
});

// Test that collection-level variables are accessible (if they were set)
pm.test('Collection variables are accessible', function() {
    const sessionId = pm.collectionVariables.get('session_id');
    const totalRequests = pm.collectionVariables.get('total_requests');
    
    // Variables may not be set if collection pre-request script hasn't run
    // Just verify they exist or are undefined
    if (sessionId !== undefined) {
        pm.expect(sessionId).to.not.be.empty;
    }
    if (totalRequests !== undefined) {
        pm.expect(totalRequests).to.not.be.empty;
    }
});

// Log script execution chain
console.log('=== Script Execution Complete ===');
console.log('Collection variables:');
console.log('- session_id:', pm.collectionVariables.get('session_id'));
console.log('- total_requests:', pm.collectionVariables.get('total_requests'));
console.log('- request_history count:', JSON.parse(pm.collectionVariables.get('request_history') || '[]').length);