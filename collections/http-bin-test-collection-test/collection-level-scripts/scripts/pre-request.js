// Folder-level pre-request script
console.log('=== Folder Pre-request Script ===');
console.log('Folder:', pm.info.requestName || 'Folder-level execution');

// Initialize folder-level variables
if (!pm.variables.get('folder_execution_count')) {
    pm.variables.set('folder_execution_count', 0);
}

// Increment folder execution counter,
let folderCount = parseInt(pm.variables.get('folder_execution_count'));
folderCount++;
pm.variables.set('folder_execution_count', folderCount);
console.log('Folder execution count:', folderCount);

// Add folder-specific header,
pm.request.headers.add({
    key: 'X-Folder-Level',
    value: 'true'
});
