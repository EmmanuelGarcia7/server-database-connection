const db = require('../database');

module.exports = {
  getAll: (callback) => {
    const queryString = 'SELECT * FROM demo_table';
    db.query(queryString, (err, data) => {
      if (err) {
        callback(err);
      } else {
        return data;
      }
    })
  },
  create: (param, callback) => {
    const name = param.name;
    const city = param.city;

    const queryString = "INSERT INTO demo_table (name, city) VALUES (?,?)";
    const queryArgs = [name, city];
    db.query(queryString, queryArgs, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(data);
      }
    })
  }
}