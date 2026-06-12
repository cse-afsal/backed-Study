const lodash = require("lodash");
const names = ["sangam","john","afsal"];
const capitalize = lodash.map(names,lodash.capitalize);
console.log(capitalize);