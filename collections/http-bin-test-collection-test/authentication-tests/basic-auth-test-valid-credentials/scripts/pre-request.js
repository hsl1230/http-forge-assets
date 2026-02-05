// Pre-request script for Basic Auth
console.log('Starting Basic Auth request...');
console.log('Username:', pm.environment.get('username'));

// Generate timestamp for request tracking
const timestamp = new Date().toISOString();
pm.environment.set('request_timestamp', timestamp);
console.log('Request timestamp:', timestamp);

// Validate environment variables
if (!pm.environment.get('username') || !pm.environment.get('password')) {
    throw new Error('Username or password environment variables not set');
}