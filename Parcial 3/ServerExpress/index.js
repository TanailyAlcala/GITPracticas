const express = require('express');
const app = express();
const mysql= require('mysql2');
const cors = require('cors');




const connection = mysql.createConnection({
    host: 'localhost', 
    port: '3306',
    user: 'root',
    password: 'Aabt.lrna7',
    database: 'PRACTICA1'
});

app.use(cors());

app.get('/canciones1', (req, res) =>{

console.log(req.query.id_cancion);

let consulta='';

if(typeof(req.query.id_cancion)=='undifined'){
consulta = 'select * from canciones1';
} else {
        consulta = `select * from canciones1 where id_cancion = ${req.query.id_cancion}`
        }
        console.log(consulta);

    connection.query(
    'SELECT * FROM canciones1',
    function(err, results, fields) {
        if(results.leght==0){
             res.json(results);
        } else{
            res.json(results);
        }
       res.json(results);
     }
     );
   
    });

app.use(cors());

app.get('/',(req, res)=>{
    res.json({ mensaje:"Server Express respondiendo a get"});
})

app.post('/',(req, res)=>{
    resizeTo.json({mensaje:"Server express respondiendo a get"});
 });

app.delete('/', (req, res)=>{
    resizeTo.json({mensaje:"Server express respondiendo a delete"});
});

app.listen(8082,(req, res)=>{
    console.log("Servidor express corriendo en puerto 8082");
});
