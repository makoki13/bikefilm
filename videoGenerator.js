/*
 * videoGenerator.js
 * 
 * Descripción: Este módulo se encarga de generar una película o secuencia de video a partir
 *              de un conjunto de imágenes, simulando el movimiento de un vehículo a lo largo
 *              de un trayecto.
 * 
 * Autor: Makoki
 * Versión: 1.0
 * Fecha de última modificación: 20240411
 * 
 * Dependencias:
 *   - ffmpeg: Módulo para generar películas o manipular videos desde Node.js.
 * 
 * Uso:
 *   Este módulo puede ser utilizado para generar una película a partir de un conjunto de imágenes.
 *   Para ello, se debe llamar a la función generateVideo() pasando como argumentos la lista de
 *   imágenes, la velocidad del vehículo y cualquier otra configuración deseada. Esta función
 *   devolverá el archivo de video generado.
 * 
 * Ejemplo de uso:
 *   const videoGenerator = require('./videoGenerator');
 *   const videoFile = videoGenerator.generateVideo(imageList, vehicleSpeed);
 *   // Hacer algo con el archivo de video generado...
 * 
 * Notas:
 *   - Se requiere la instalación de ffmpeg en el sistema para utilizar este módulo.
 *   - La duración y apariencia del video generado dependerán de los parámetros y configuraciones
 *     utilizados, así como de la calidad y resolución de las imágenes de entrada.
 *   - Se recomienda ajustar adecuadamente la velocidad del vehículo y la duración de las imágenes
 *     para lograr un efecto de movimiento realista en el video generado.
 */
