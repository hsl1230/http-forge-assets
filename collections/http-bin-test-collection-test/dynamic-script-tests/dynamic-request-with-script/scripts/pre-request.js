// Complex pre-request script
console.log('=== Starting Dynamic Request ===');

// Calculate values dynamically
const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((a, b) => a + b, 0);
const average = sum / numbers.length;

// Store calculations in variables
pm.environment.set('calculated_sum', sum);
pm.environment.set('calculated_average', average);

// Generate request body dynamically
const requestBody = {
    operation: 'calculate',
    values: numbers,
    metadata: {
        sum: sum,
        average: average,
        count: numbers.length,
        generatedAt: new Date().toISOString()
    },
    requestId: pm.variables.replaceIn('{{$guid}}'),
    environment: pm.environment.name
};

// Update request body
pm.request.body.raw = JSON.stringify(requestBody, null, 2);

// Add custom header
pm.request.headers.add({
    key: 'X-Calculation-Sum',
    value: sum.toString()
});

console.log('Request body set dynamically');
console.log('Sum:', sum, 'Average:', average);