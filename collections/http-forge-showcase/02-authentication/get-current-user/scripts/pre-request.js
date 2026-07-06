// Verify the access_token is present and not expired before proceeding.
// The token is set by the "Login - Get JWT" post-response script.
var token = pm.environment.get('access_token');
if (token) {
    try {
        var payload = JSON.parse(atob(token.split('.')[1]));
        var nowSecs = Math.floor(Date.now() / 1000);
        if (payload.exp && payload.exp < nowSecs) {
            console.warn('[Showcase] access_token is expired — clearing so Login can refresh it');
            pm.environment.unset('access_token');
        }
    } catch (e) {
        console.warn('[Showcase] Could not decode access_token:', e.message);
    }
}
if (!pm.environment.get('access_token')) {
    console.warn('[Showcase] access_token not set — Login - Get JWT must run first in the same collection run');
}