const models = require('./models');

module.exports = {
  get: (req, res) => {
    models.getAll((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.sendStatus(200);
      }
    })
  },
  post: (req, res) => {
    models.create(req.body, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    })
  }
}