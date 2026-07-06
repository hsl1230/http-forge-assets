var jsonData = pm.response.json();
var actionURL = jsonData.actionURL;
pm.environment.set("actionURL", actionURL);

actionURL = pm.environment.get('actionURL');
console.log(`actionURL = ${actionURL}`);

const list = pm.environment.get('list');

console.log(list[2]);
