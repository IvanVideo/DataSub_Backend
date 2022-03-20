const cards = require('../models/cards');

const createCard = (req, res, next) => {
  const {
    CardNumber,
    ExpDate,
    Cvv,
    Amount,
  } = req.body;
  cards.create({
    CardNumber,
    ExpDate,
    Cvv,
    Amount,
  })
    .then((item) => res.send({ RequestId: item._id, Amount: Amount }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new Error('Некоректные данные');
      }
      throw err;
    })
    .catch(next);
};

module.exports = {
  createCard,
};