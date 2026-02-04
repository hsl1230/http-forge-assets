// Pre-request for Bearer Token
console.log('Bearer Token:', pm.environment.get('auth_token').substring(0, 20) + '...');

// Generate dynamic value
const dynamicValue = 'dyn_' + Date.now();
pm.environment.set('dynamic_value', dynamicValue);

// Increment global counter
let counter = parseInt(pm.environment.get('global_counter') || 0);
counter++;
pm.environment.set('global_counter', counter.toString());
console.log('Request counter:', counter);