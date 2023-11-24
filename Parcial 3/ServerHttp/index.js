const http = require ('http');

const servidor = http.createServer((req, res)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	rest.write("Sevidor Http Node contestando a petition get");
	rest.end();
		
});

servidor.listen(8082, () => {
	console.log("Servidor corriendo en el puerto 8082");
});
