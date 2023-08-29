# Modelo de Caja de Html
## El modelo de cajas es el comportamiento de CSS que hace que todos los elementos de las páginas se representen mediante cajas rectangulares.  
Las cajas de una página se crean automáticamente. Cada vez que se inserta una etiqueta HTML, se crea una nueva caja rectangular que encierra los contenidos de ese elemento.  

Los navegadores crean y colocan las cajas de forma automática, pero CSS permite modificar todas sus características.  
 
 **Cada una de las cajas está formada por seis partes.**  

 1. **Contenido** *(content)*: se trata del contenido HTML del elemento (las palabras de un párrafo, una imagen, el texto de una lista de elementos, etc.)
2. **Relleno** *(padding)*: espacio libre opcional existente entre el contenido y el borde.
3. **Borde** *(border)*: línea que encierra completamente el contenido y su relleno.
4. **Imagen de fondo** *(background image)*: imagen que se muestra por detrás del contenido y el espacio de relleno.
5. **Color de fondo** *(background color)*: color que se muestra por detrás del contenido y el espacio de relleno.
6. **Margen** *(margin)*: separación opcional existente entre la caja y el resto de cajas adyacentes.  

*Datos adicionales*
* El relleno y el margen son transparentes, por lo que en el espacio ocupado por el relleno se muestra el color o imagen de fondo (si están definidos) y en el espacio ocupado por el margen se muestra el color o imagen de fondo de su elemento padre (si están definidos).  
* Si ningún elemento padre tiene definido un color o imagen de fondo, se muestra el color o imagen de fondo de la propia página (si están definidos). Si una caja define tanto un color como una imagen de fondo, la imagen tiene más prioridad y es la que se visualiza. 
* Si la imagen de fondo no cubre totalmente la caja del elemento o si la imagen tiene zonas transparentes, también se visualiza el color de fondo. 
* Combinando imágenes transparentes y colores de fondo se pueden lograr efectos gráficos muy interesantes.



# Propiedad Display  
La *propiedad display* en CSS nos ayuda a **controlar dónde se va a ver un elemento** HTML dentro de la pantalla para estructurar nuestra página web.  
Cada elemento tiene un valor de display por defecto dependiendo de qué tipo de elemento sea.  

**Valores de la propiedad Display**  

La propiedad display se usa para definir un elemento con uno de cuatro valores1:
* *block*: un salto de línea antes y después del elemento
* *inline*: ningún salto de línea antes ni después del elemento
* *list-item*: igual que block, salvo que se agrega un marcador de ítems de lista
* *none*: sin visualización  





