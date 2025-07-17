const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'axit@1234',
  database:'sweet_shop'
});

db.connect(err => {
  if (err) throw err;
  console.log(' MySQL Connected');
});

module.exports = db;
