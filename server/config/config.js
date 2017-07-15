const dotenv = require('dotenv');

dotenv.config({
    silent: true
});

module.exports = {
    SECRET_KEY: process.env.SECRET_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
}