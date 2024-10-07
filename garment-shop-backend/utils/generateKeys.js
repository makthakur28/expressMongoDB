// utils/generateKeys.js
const crypto = require('crypto');

const generateSecretKey = crypto.randomBytes(32).toString('hex');


console.log(generateSecretKey);

// module.exports = { generateSecretKey };