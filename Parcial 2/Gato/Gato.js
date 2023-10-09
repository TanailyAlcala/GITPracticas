<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <title>Document</title>
 <style>
       *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        .contenedor
        {
            height: 100vh;
            width: 100vw;
            background-color: rgb(176, 106, 241);
            display: grid;
            grid-template-columns: 200px 200px 200px;
            grid-template-rows: 200px 200px 200px;
            justify-content: center;
            align-items: stretch;
            justify-items: stretch;
        }
        .caja
        {
            /*width: 100px;*/
            /*height: 100px;*/
            background-color: rgb(245, 183, 230);
            border: 4px solid rgb(124, 239, 247);
            font-size:40px;
            text-align: center;
            line-height: 2em;

        }

 </style>
</head>
<body>
    <div id="cont" class ="contenedor">
        <div id = "caja1" class = "caja"></div>
        <div id = "caja2" class = "caja"></div>
        <div id = "caja3" class = "caja"></div>
        <div id = "caja4" class = "caja"></div>
        <div id = "caja5" class = "caja"></div>
        <div id = "caja6" class = "caja"></div>
        <div id = "caja7" class = "caja"></div>
        <div id = "caja8" class = "caja"></div>
        <div id = "caja9" class = "caja"></div>
        <div id = "caja10"></div>
        <div id = "caja11"><butom id="btnLim" type="button">Limpiar</butom></div>
        <div id = "caja12"></div>
    </div>

    <script>
        document.getElementById("cont").addEventListener("click",funcion(e)
        {
            console.log(e.target.id);

            document.getElementById(e.target.id).innerText="X";

            
        })

    </script>
</body>