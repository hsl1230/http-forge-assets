// Folder-level test script
console.log('=== Folder Test Script ===');
console.log('Request completed in folder:', pm.info.requestName);

// Folder-level assertions
pm.test('Folder-level: Response is valid', function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201, 204]);
});

// Update folder execution stats
let folderStats = pm.collectionVariables.get('folder_stats') || '{}';
folderStats = JSON.parse(folderStats);
folderStats[pm.info.requestName] = {
    timestamp: new Date().toISOString(),
    status: pm.response.code,
    time: pm.response.responseTime
};
pm.collectionVariables.set('folder_stats', JSON.stringify(folderStats));
