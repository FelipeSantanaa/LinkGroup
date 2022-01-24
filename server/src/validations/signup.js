const {check} = require('express-validator'),

validateRegisters =  [
    check('name').notEmpty().withMessage('Informe seu nome.').bail()
    .isLength({max: 50}).withMessage('Nome extenso demais!')
];

module.exports = validateRegisters;