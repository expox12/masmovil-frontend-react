var phones = require('../public/data.json');


exports.getAllPhones = (req, res, next) => {
    res.send(phones);
}

exports.getOnePhone = (req, res, next) => {
    const phoneId = req.params.id;
    res.send(phones.filter(el => el.id == phoneId));
}
