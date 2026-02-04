// Generate unique data for POST
const postId = Math.floor(Math.random() * 10000);
pm.environment.set('generated_post_id', postId);
console.log('Generated Post ID:', postId);