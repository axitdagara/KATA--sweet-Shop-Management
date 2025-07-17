// TestCases.js
const axios = require('axios');

const baseURL = 'http://localhost:3000/api/sweets';

async function seedDummyData() {
  const dummySweets = [
    { name: 'Kaju Katli', category: 'Mithai', price: 200, quantity: 25 },
    { name: 'Gulab Jamun', category: 'Dessert', price: 150, quantity: 40 },
    { name: 'Rasgulla', category: 'Mithai', price: 180, quantity: 35 },
    { name: 'Soan Papdi', category: 'Dry Sweet', price: 100, quantity: 60 },
    { name: 'Ladoo', category: 'Mithai', price: 120, quantity: 50 },
    { name: 'Barfi', category: 'Mithai', price: 140, quantity: 45 },
    { name: 'Chocolate Cake', category: 'Pastry', price: 300, quantity: 20 }
  ];

  console.log(' Seeding dummy sweets.');
  for (const sweet of dummySweets) {
    try {
      const res = await axios.post(baseURL, sweet);
      console.log(` Added: ${res.data.name}`);
    } catch (err) {
      console.error(' Error adding sweet:', sweet.name, err.message);
    }
  }
}

async function addChecker() {
  try {
    const response = await axios.post(baseURL, {
      name: 'Peda',
      category: 'Mithai',
      price: 130,
      quantity: 30
    });
    console.log(' addChecker: Sweet added:', response.data);
  } catch (err) {
    console.error(' addChecker Error:', err.message);
  }
}

async function updateChecker() {
  try {
    const response = await axios.put(`${baseURL}/1`, {
      name: 'Updated Peda',
      category: 'Premium Mithai',
      price: 160,
      quantity: 35
    });
    console.log(' updateChecker: Sweet updated:', response.data);
  } catch (err) {
    console.error(' updateChecker Error:', err.message);
  }
}

async function deleteChecker() {
  try {
    const response = await axios.delete(`${baseURL}/1`);
    console.log(' deleteChecker: Sweet deleted:', response.data);
  } catch (err) {
    console.error(' deleteChecker Error:', err.message);
  }
}

async function searchbyIDChecker(id = 2) {
  try {
    const response = await axios.get(`${baseURL}/id/${id}`);
    console.log(` searchbyIDChecker: Found Sweet with ID ${id}:`, response.data);
  } catch (err) {
    console.error(` searchbyIDChecker Error for ID ${id}:`, err.message);
  }
}

async function searchbyNameChecker() {
  try {
    const response = await axios.get(`${baseURL}/search/name/Kaju`);
    console.log(' searchbyNameChecker:', response.data);
  } catch (err) {
    console.error(' searchbyNameChecker Error:', err.message);
  }
}

async function searchbyCategoryChecker() {
  try {
    const response = await axios.get(`${baseURL}/search/category/Mithai`);
    console.log(' searchbyCategoryChecker:', response.data);
  } catch (err) {
    console.error(' searchbyCategoryChecker Error:', err.message);
  }
}

async function searchbyPriceChecker() {
  try {
    const response = await axios.get(`${baseURL}/search/price/100/300`);
    console.log(' searchbyPriceChecker:', response.data);
  } catch (err) {
    console.error(' searchbyPriceChecker Error:', err.message);
  }
}

async function searchbyQuantityChecker() {
  try {
    const response = await axios.get(`${baseURL}/search/quantity/10/60`);
    console.log(' searchbyQuantityChecker:', response.data);
  } catch (err) {
    console.error(' searchbyQuantityChecker Error:', err.message);
  }
}

async function sortbyChecker() {
  try {
    const response = await axios.get(`${baseURL}/sort/price`);
    console.log(' sortbyChecker:', response.data);
  } catch (err) {
    console.error(' sortbyChecker Error:', err.message);
  }
}

async function alluniqueidChecker() {
  try {
    const response = await axios.get(`${baseURL}/ids`);
    console.log(' alluniqueidChecker:', response.data);
  } catch (err) {
    console.error(' alluniqueidChecker Error:', err.message);
  }
}

async function dbconnectionChecker() {
  try {
    const response = await axios.get(`${baseURL}/ping`);
    console.log('dbconnectionChecker: Database connected:', response.data);
  } catch (err) {
    console.error(' dbconnectionChecker Error:', err.message);
  }
}

module.exports = {
  seedDummyData,
  addChecker,
  updateChecker,
  deleteChecker,
  searchbyIDChecker,
  searchbyNameChecker,
  searchbyCategoryChecker,
  searchbyPriceChecker,
  searchbyQuantityChecker,
  sortbyChecker,
  alluniqueidChecker,
  dbconnectionChecker
};
