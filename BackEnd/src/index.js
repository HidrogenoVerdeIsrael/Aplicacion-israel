const express = require('express');
const app = express();
const {Pool}=require('pg');
const cors = require('cors');
const port=3001

app.use(express.json());
app.use(cors());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd_israel',
    password: 'hidrogenoisrael',
    port: 5432,
})

app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuario')
        res.json(result.rows);
    } catch (error) {
        console.error(error.message);
    }
})
app.post('/users', async (req, res) => {
    try {
        const {nombre, edad }=req.body;
        const result = await pool.query('INSERT INTO usuario (nombre, edad) VALUES ($1, $2) RETURNING *', [nombre, edad]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        const {id} =req.params;
        const {nombre, edad }=req.body;
        const result = await pool.query('UPDATE usuario SET nombre=$1, edad=$2 WHERE id=$3 RETURNING *', [nombre, edad, id]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})
app.delete('/users/:id', async (req, res) => {
    try {
        const {id} =req.params;
        const result = await pool.query('DELETE FROM usuario WHERE id=$1 RETURNING *', [id]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

app.get('/', (req, res) => {
    res.send("Hola, mundo")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})