// Pre-request for GET with Query Parameters
// Generate dynamic filter value
const dynamicValue = 'filter_' + Math.random().toString(36).substring(7);
pm.environment.set('dynamic_value', dynamicValue);

console.log('Set dynamic_value to:', dynamicValue);
