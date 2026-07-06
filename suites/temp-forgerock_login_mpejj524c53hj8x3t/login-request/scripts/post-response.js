var jsonData = pm.response.json();
var actionURL = jsonData.actionURL;
pm.environment.set("actionURL", actionURL);

actionURL = pm.environment.get('actionURL');
console.log(`actionURL = ${actionURL}`);
