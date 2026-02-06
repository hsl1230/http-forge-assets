// Global test script for entire collection,
console.log('✅ Request completed: ' + pm.info.requestName)
console.log('Status: ' + pm.response.code + ' ' + pm.response.status)
console.log('Time: ' + pm.response.responseTime + 'ms')

// Basic response validation,
pm.test('Global test: Response time is less than 10 seconds', function () {
    pm.expect(pm.response.responseTime).to.be.below(10000)
})

// Log to collection variable,
let requestHistory = pm.collectionVariables.get('request_history') || '[]'
requestHistory = JSON.parse(requestHistory)
requestHistory.push({
    name: pm.info.requestName,
    timestamp: new Date().toISOString(),
    status: pm.response.code,
    time: pm.response.responseTime,
})
pm.collectionVariables.set('request_history', JSON.stringify(requestHistory))

// Log collection statistics,
console.log('📊 Collection Statistics:')
console.log('- Total requests in session: ' + requestHistory.length)
console.log('- Session ID: ' + pm.collectionVariables.get('session_id'));
