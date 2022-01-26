const { application } = require('express')
const { check, body, validationResult } = require('express-validator')
const express = require('express')
const app = express()

module.exports = app.post(
  '/register',
  body('email').isEmail().withMessage('E-mail inválido!').bail(),
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    next()
  }
)
