const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    password: "4311",
    host: "localhost",
    port: "5432",
    database: "paws",
});

module.exports = pool;