const keys = require('./keys');

//Express APP Setup
const express = require('express');
const express = require('body-parser');
const express = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client setup
const {Pool} = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.database,
    password: keys.pgPassword,
    post: keys.pgPort
});
pgClient.on('error', () => console.log('Lost PG Connection'));

pgClient.query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch((err) => console.log(err));