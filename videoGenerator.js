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

const ffmpeg = require('fluent-ffmpeg');

// Función para generar un video a partir de una lista de imágenes
function generateVideo(imageList, outputFilename, fps = 30) {
    return new Promise((resolve, reject) => {
        try {
            // Crear un nuevo comando ffmpeg
            const command = ffmpeg();

            // Agregar cada imagen al comando ffmpeg como un fotograma
            imageList.forEach(imagePath => {
                command.input(imagePath);
            });

            // Configurar la velocidad de fotogramas (FPS) del video
            command.fps(fps);

            // Configurar la salida del video
            command.output(outputFilename)
                .on('end', () => {
                    resolve(outputFilename);
                })
                .on('error', (error) => {
                    reject(error);
                })
                .run();
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    generateVideo
};

