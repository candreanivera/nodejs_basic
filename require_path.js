/**
 * R E Q U I R E - P A T H
 * And File locations, directories
 */

const path = require("path");

// Returns path + filename 
console.log(`El nombre del archivo es ${__filename}`);
//Returns only filename
console.log(`El nombre del archivo es ${path.basename(__filename)}`);
//Returns only the path
console.log(__dirname);


