// const getUserAndSectionData = require('./getUserAndSectionData');
const getData = require('./getData');
const saveSectionData = require('./saveSectionData');
const makeNewSection = require('./makeNewSection');
const deleteSection = require('./deleteSection');
const checkForStaleData = require('./checkForStaleData');

module.exports = {
  getData,
  makeNewSection,
  saveSectionData,
  deleteSection,
  checkForStaleData,
};
