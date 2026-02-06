// Global pre-request script for entire collection,
console.log('🚀 Starting HTTP Forge Test Collection');
console.log('====================================');
console.log('Collection: ' + pm.info.collectionName);
console.log('Timestamp: ' + new Date().toISOString());
console.log('Environment: ' + pm.environment.name);

// Initialize session variables,
const sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
pm.collectionVariables.set('session_id', sessionId);
console.log('Session ID: ' + sessionId);

// Validate required environment variables,
const requiredVars = ['base_url', 'username'];
requiredVars.forEach(function (varName) {
    if (!pm.environment.get(varName)) {
        console.error('Missing required environment variable: ' + varName);
    }
});

// Add global header to all requests,
pm.request.headers.add({
    key: 'X-Collection-Global',
    value: 'HTTP_Forge_Test'
});
