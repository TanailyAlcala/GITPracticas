const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) =>{
    res.json({mensaje: "Server Express respondiendo al get"});
})

app.post('/',(req, res)=>{
    resizeTo.json({mensaje:"Server express respondiendo a get"});
})

app.delete('/', (req, res)=>{
    resizeTo.json({mensaje:"Server express respondiendo a delete"});
})

app.listen(8082,(req, res)=>{
    console.log("Servidor express corriendo en puerto 8082");
});