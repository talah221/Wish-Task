const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
        SERVER_PORT: Joi.number().default(3000),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);


const EXTERNAL_APIS = {
    photos: 'https://my-json-server.typicode.com/coing-dev/photo-api/photos',
    images: 'https://my-json-server.typicode.com/coing-dev/photo-api/images'
}

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    env: envVars.NODE_ENV,
    serverPort: envVars.SERVER_PORT,
    EXTERNAL_APIS
};