// Another request-level script
console.log('=== Second Request Pre-request ===');

// Access collection variable set by collection-level script
const totalRequests = pm.collectionVariables.get('total_requests');
console.log('Total requests from collection variable:', totalRequests);

// Modify request body based on collection data
const body = JSON.parse(pm.request.body.raw);
body.collectionData = {
    session: pm.collectionVariables.get('session_id'),
    lastStatus: pm.collectionVariables.get('last_response_status'),
    historyCount: JSON.parse(pm.collectionVariables.get('request_history') || '[]').length
};
pm.request.body.raw = JSON.stringify(body, null, 2);