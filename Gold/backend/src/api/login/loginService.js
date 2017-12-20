const Login = require('./login')

Login.methods(['get', 'post', 'put', 'delete'])
Login.updateOptions({new: true, runValidators: true})

module.exports = Login