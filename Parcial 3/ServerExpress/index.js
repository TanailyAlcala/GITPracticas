const express = require('express');
const app = express();
const mysql2= require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');
const { default: jsPDF } = require('jspdf');
const path = require('path');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const multer = require('multer');
const upload = multer();

/*const connection = mysql2.createConnection({
    host: 'localhost', 
    port: '3306',
    user: 'root',
    password: 'Aabt.lrna7',
    database: 'PRACTICA1'
});*/


/*connection.connect()
    .then(() => {
        console.log('CONEXION EXITOSA');
    })
    .catch((error) => {
        throw error;
    });*/

const pool = mysql2.createPool({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'Aabt.lrna7',
        database: 'PRACTICA1',
        connectionLimit: 10 // ajustar
    });

app.get('/canciones1', async (req, res) => {
    if (!req.query.id_cancion) {
        return res.status(400).json({ error: "Parámetro 'id_cancion' faltante en la consulta" });
    }

    if (isNaN(req.query.id_cancion)) {
        return res.status(400).json({ error: "El valor de 'id_cancion' debe ser un número" });
    }

    const id_cancionValue = Number(req.query.id_cancion);

    try {
        const connection = await mysql2.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'Aabt.lrna7',
            database: 'PRACTICA1'
        });

        const [rows, fields] = await connection.execute('SELECT * FROM canciones1 WHERE id_cancion = ?', [id_cancionValue]);
        
        await connection.end();
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ error: "Error al procesar la solicitud" });
    }
});

app.delete('/canciones1', async (req, res) => {
    if (!req.query.id_cancion) {
        return res.status(400).json({ error: "Parámetro 'id_cancion' faltante en la consulta" });
    }

    if (isNaN(req.query.id_cancion)) {
        return res.status(400).json({ error: "El valor de 'id_cancion' debe ser un número" });
    }

    const id_cancionValue = Number(req.query.id_cancion);

    try {
        const connection = await mysql2.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'Aabt.lrna7',
            database: 'PRACTICA1'
        });

        const deleteQuery = 'DELETE FROM canciones1 WHERE id_cancion = ?';
        const [result] = await connection.execute(deleteQuery, [id_cancionValue]);

        await connection.end();

        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 0, mensaje: "El ID especificado no existe." });
        }

        return res.status(200).json({ status: 1, mensaje: "ID eliminado exitosamente." });
    } catch (error) {
        return res.status(500).json({ error: "Error al procesar la solicitud" });
    }
});

/*app.post('/canciones1', upload.none(), async (req, res) => {
    const { nombre_cancion, artista, genero, disco, año_lanzamiento } = req.body;

    if (!nombre_cancion || !artista || !genero || !disco || !año_lanzamiento) {
        return res.status(400).json({ error: "Todos los campos son obligatorios: nombre de la cancion, artista, genero, disco, año de lanzamiento." });
    }

    if (isNaN(año_lanzamiento)) {
        return res.status(400).json({ error: "El año de lanzamiento debe ser un número." });
    }

    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(
            `INSERT INTO canciones1 (nombre_cancion, artista, genero, disco, año_lanzamiento) VALUES (?, ?, ?, ?, ?)`,
            [nombre_cancion, artista, genero, disco, año_lanzamiento]
        );
        connection.release();

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al agregar la canción." });
    }
});*/
/*app.post('/canciones1', (req,res)=>{
    const nombre_cancion = req.body.nombre_cancion;
    const artista = req.body.artista;
    const genero = req.body.genero;
    const disco = req.body.disco;
    const año_lanzamiento = req.body.año_lanzamiento;

    const script = `INSERT INTO canciones1 (nombre_cancion, artista, genero, disco, año_lanzamiento) VALUES ('${nombre_cancion}', '${artista}', '${genero}', '${disco}', '${año_lanzamiento}')`;

    connection.query(script, function (err, results, fields){
        if(results && results.affectedRows == 1){
            res.status(200).json({ mensaje: "El usuario se ha agregado"});
        }
        else{
            res.status(400).json({mensaje: "No se pudo agregar el usuario"});
        }
    })
});*/

/*app.post('/canciones1', upload.none(), async (req, res) => {
    const nombre_cancion = req.body.nombre_cancion;
    const artista = req.body.artista;
    const genero = req.body.genero;
    const disco = req.body.disco;
    const año_lanzamiento = req.body.año_lanzamiento;

    const script = `INSERT INTO canciones1 (nombre_cancion, artista, genero, disco, año_lanzamiento) VALUES ('${nombre_cancion}', '${artista}', '${genero}', '${disco}', '${año_lanzamiento}')`;

    connection.query(script, function (err, results, fields){
        if(results && results.affectedRows == 1){
            res.status(200).json({ mensaje: "El usuario se ha agregado"});
        }
        else{
            res.status(400).json({mensaje: "No se pudo agregar el usuario"});
        }
    })
});*/
app.post('/canciones1', async (req, res) => {
    const nombre_cancion = req.body.nombre_cancion;
    const artista = req.body.artista;
    const genero = req.body.genero;
    const disco = req.body.disco;
    const año_lanzamiento = req.body.año_lanzamiento;

    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(
            `INSERT INTO canciones1 (nombre_cancion, artista, genero, disco, año_lanzamiento) VALUES (?, ?, ?, ?, ?)`,
            [nombre_cancion, artista, genero, disco, año_lanzamiento]
        );
        connection.release();

        res.status(200).json({ mensaje: "La canción se ha agregado exitosamente" });
    } catch (error) {
        console.error("Error al agregar la canción:", error);
        res.status(500).json({ mensaje: "Error al agregar la canción." });
    }
});


app.put('/canciones1', async (req, res) => {
    try {
        if (!req.query.id_cancion || isNaN(req.query.id_cancion) || !req.query.nombre_cancion || !req.query.artista || !req.query.genero || !req.query.disco || !req.query.año_lanzamiento) {
            return res.status(400).json({ error: "Completa todos los campos y asegúrate de que 'ID' sea un número" });
        }

        const id_cancionValue = Number(req.query.id_cancion);
        const nombre_cancion = req.query.nombre_cancion;
        const artista = req.query.artista;
        const genero = req.query.genero;
        const disco = req.query.disco;
        const año_lanzamiento = req.query.año_lanzamiento;

        const connection = await mysql2.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'Aabt.lrna7',
            database: 'PRACTICA1'
        });

        const updateQuery = 'UPDATE canciones1 SET nombre_cancion = ?, artista = ?, genero = ?, disco = ?, año_lanzamiento = ? WHERE id_cancion = ?';
        const [result] = await connection.execute(updateQuery, [nombre_cancion, artista, genero, disco, año_lanzamiento, id_cancionValue]);

        await connection.end();

        if (result.affectedRows === 1) {
            return res.status(200).json({ status: 1, mensaje: "Canción modificada exitosamente", datos: {} });
        } else {
            return res.status(404).json({ status: 0, mensaje: "El ID especificado no existe o no se pudo actualizar la canción", datos: {} });
        }
    } catch (error) {
        return res.status(500).json({ error: "Error al procesar la solicitud", datos: {} });
    }   
});



app.post('/canciones1/formato', upload.none(), (req, res) => {
    const doc = new jsPDF();
    doc.text(`CANCION`, 10, 10);
    doc.text(`ID: ${req.body.id_cancion}`, 10, 20);
    doc.text(`Nombre de la canción: ${req.body.nombre_cancion}`, 10, 30);
    doc.text(`Artista: ${req.body.artista}`, 10, 40);
    doc.text(`Genero: ${req.body.genero}`, 10, 50);
    doc.text(`Disco: ${req.body.disco}`, 10, 60);
    doc.text(`Año de lanzamiento: ${req.body.año_lanzamiento}`, 10, 70);
    let archivoPDF = path.join(__dirname, 'Archivo.pdf');
    doc.save(archivoPDF);
    res.sendFile(archivoPDF);
});

app.listen(8082,(req, res)=>{
    console.log("Servidor Express corriendo en puerto 8082");
});
