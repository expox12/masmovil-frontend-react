var foo = require('../public/data.json');


exports.getAllPhones = (req, res, next) => {
    res.send(foo);
}
