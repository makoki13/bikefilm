/*
 * gpxParser.js
 * 
 * Descripción: Este módulo se encarga de leer y analizar archivos GPX (GPS Exchange Format),
 *              extrayendo las coordenadas de latitud y longitud del trayecto definido en el fichero.
 * 
 * Autor: Makoki
 * Versión: 1.0
 * Fecha de última modificación: 20240411
 * 
 * Dependencias:
 *   - fs: Módulo del sistema de archivos de Node.js para leer archivos.
 *   - xml2js: Biblioteca para convertir datos XML en objetos JavaScript.
 * 
 * Uso:
 *   Este módulo puede ser utilizado para leer un archivo GPX y obtener las coordenadas del trayecto
 *   definido en el mismo. Para ello, se debe llamar a la función parseGPX() pasando como argumento
 *   la ruta al archivo GPX. Esta función devolverá un objeto con las coordenadas extraídas.
 * 
 * Ejemplo de uso:
 *   const gpxParser = require('./gpxParser');
 *   const coordenadas = gpxParser.parseGPX('ruta/al/archivo.gpx');
 *   console.log(coordenadas);
 * 
 * Notas:
 *   - Este módulo actualmente solo soporta archivos GPX en formato XML estándar. No se garantiza
 *     compatibilidad con otras variantes o extensiones del formato GPX.
 *   - La precisión y fiabilidad de las coordenadas extraídas pueden variar dependiendo de la calidad
 *     y la cantidad de información proporcionada en el archivo GPX.
 */
