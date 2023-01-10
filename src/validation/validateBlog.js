import joi from 'joi';
const { schema } = require('../models/Blog');

const validator= (schema) => (payload) => schema.validate(payload, { abortEarly: false})


const blogSchema= joi.object({
    title: joi.string().required().trim(),
    content: joi.string().required().min(5).trim(),
    image: joi.string()
});

const validateBlog= validator(blogSchema)

export default  validateBlog