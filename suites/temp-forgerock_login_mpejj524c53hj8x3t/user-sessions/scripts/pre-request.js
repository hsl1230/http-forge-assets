// Pre-request script - runs before the request is sent
// Available: agl.request, agl.env, agl.variables, agl.cookies

// Example: Add dynamic header
// agl.request.setHeader('X-Request-Time', Date.now().toString());

// Example: Use environment variable
// const apiKey = agl.env.get('apiKey');
// agl.request.setHeader('Authorization', 'Bearer ' + apiKey);

// Example: Run auth collection first (async)
// if (!agl.cookies.has('accessToken')) {
//     await agl.runCollection('Auth');
// }

console.log('Pre-request script executed');

// Save the code as a Postman environment variable
const client_secret = pm.environment.get("client_secret");

console.log(`before user/session client_secret=${client_secret}: ` + '{{client_secret}}');
