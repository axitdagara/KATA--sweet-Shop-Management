// Tester.js
const tests = require('./TestCases');

async function runAllTests() {
  console.log('\n Running Sweet Shop Backend Tests...\n');

  await tests.dbconnectionChecker();

  // Seed sample sweets
  await tests.seedDummyData();

  // Run CRUD + search tests
  await tests.addChecker();
  await tests.updateChecker();

  //  test by ID 
  await tests.searchbyIDChecker(2);

  await tests.searchbyNameChecker();
  await tests.searchbyCategoryChecker();
  await tests.searchbyPriceChecker();
  await tests.searchbyQuantityChecker();
  await tests.sortbyChecker();
  await tests.alluniqueidChecker();
  await tests.deleteChecker();

  console.log('\n All test cases executed successfully.\n');
}

runAllTests();
