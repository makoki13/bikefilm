/*
 * streetViewDownloader.js
 * 
 * Descripción: Este módulo se encarga de descargar imágenes de Google Street View correspondientes
 *              a las coordenadas proporcionadas.
 * 
 * Autor: Makoki
 * Versión: 1.0
 * Fecha de última modificación: 20240411
 * 
 * Dependencias:
 *   - axios: Módulo para realizar solicitudes HTTP desde Node.js.
 * 
 * Uso:
 *   Este módulo puede ser utilizado para descargar imágenes de Google Street View. Para ello,
 *   se debe llamar a la función downloadStreetViewImage() pasando como argumentos la latitud y
 *   longitud de la ubicación deseada, así como cualquier parámetro adicional compatible con la
 *   API de Street View (por ejemplo, tamaño de la imagen, orientación, etc.). Esta función
 *   devolverá la imagen descargada como un buffer de Node.js.
 * 
 * Ejemplo de uso:
 *   const streetViewDownloader = require('./streetViewDownloader');
 *   const imageBuffer = streetViewDownloader.downloadStreetViewImage(latitude, longitude);
 *   // Hacer algo con la imagen descargada...
 * 
 * Notas:
 *   - Se requiere una clave de API válida de Google Maps para utilizar la API de Street View.
 *   - La resolución y calidad de las imágenes descargadas pueden variar dependiendo de la
 *     disponibilidad y cobertura de Street View en la ubicación especificada.
 *   - Se recomienda revisar y respetar los términos de servicio de Google Maps al utilizar
 *     la API de Street View para descargar imágenes.
 */
