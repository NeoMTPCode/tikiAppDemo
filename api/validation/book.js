const Validator = require('validator');
const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
}

module.exports = function validateBookInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.author = !isEmpty(data.author) ? data.author : '';

    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name is required';
    }

    if(Validator.isEmpty(data.author)) {
        errors.author = 'Author is required';
    }

    if(!Validator.isLength(data.name, {min: 10, max: 150})) {
        errors.name = 'Name must have 10 chars';
    }

    if(!Validator.isLength(data.author, {min: 5, max: 150})) {
        errors.author = 'Author must have 5 chars';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};