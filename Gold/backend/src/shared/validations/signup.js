const Validator = require('validator')
const isEmpty = require('lodash/isEmpty');

 function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.email)) {
        errors.email = 'O EMAIL É OBRIGATORIO'
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'EMAIL INVALIDO'
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = 'O NOME É OBRIGATÓRIO'
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'A SENHA É OBRIGATÓRIA'
    }

    if (Validator.isEmpty(data.passwordComp)) {
        errors.passwordComp = 'A SENHA DE CONFIRMAÇÃO É OBRIGATORIA'
    }

    if (!Validator.equals(data.password, data.passwordComp)) {
        errors.passwordConf = 'AS SENHAS SÃO DIFERENTES'
    }

    console.log(data)
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateInput;