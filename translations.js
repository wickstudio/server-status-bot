const fs = require('fs');

function getTranslation(key, language) {
  const translations = JSON.parse(fs.readFileSync(`${__dirname}/${language}.json`, 'utf8'));
  return translations[key] || key;
}

module.exports = {
  getTranslation,
};
