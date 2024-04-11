const gpxParser = require('./gpxParser');
const streetViewDownloader = require('./streetViewDownloader');
const videoGenerator = require('./videoGenerator');

const gpxFilePath = 'rutas/ejemplo.gpx'; // Ruta al archivo GPX
const apiKey = 'AIzaSyBo-8i4j7lBIuzEQ2EFEJ2ou8aU5AB1ePs'; // API de Google Maps

const imagePaths = [];

// Parsear el archivo GPX y obtener las coordenadas
gpxParser.parseGPX(gpxFilePath)
    .then(coordinates => {
        // Para cada coordenada, descargar una imagen de Street View
        const limite = 10
        let imagenes = 0
        coordinates.forEach(coord => {
            const { latitude, longitude } = coord;
            streetViewDownloader.downloadStreetViewImage(latitude, longitude, apiKey)
                .then(imageBuffer => {
                    // Hacer algo con la imagen descargada (guardarla en disco, mostrarla en una página web, etc.)
                    /* console.log(
                        `Imagen descargada para coordenadas (${latitude}, ${longitude}):`, 
                        imageBuffer
                    ); */
                    // Por ejemplo, aquí puedes guardar la imagen en disco
                    imagenes++
                    if (imagenes < limite) {
                        console.log(imagenes, limite)
                        saveImageToFile(
                            imageBuffer,
                            `streetview_${latitude}_${longitude}.jpg`
                        );
                    }



                })
                .catch(error => {
                    console.error(`Error al descargar imagen de Street View para coordenadas (${latitude}, ${longitude}):`, error);
                });
        });
    })
    .catch(error => {
        console.error('Error al parsear el archivo GPX:', error);
    });

// Función para guardar una imagen en disco
function saveImageToFile(imageBuffer, filename) {
    const fs = require('fs');
    fs.writeFileSync("imagenes/" + filename, imageBuffer);
    console.log(`Imagen guardada como ${filename}`);
}
