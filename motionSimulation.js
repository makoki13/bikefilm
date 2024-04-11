/*
 * motionSimulation.js
 * 
 * Descripción: Este módulo se encarga de simular el movimiento de un vehículo a lo largo de un
 *              trayecto definido, calculando la duración de cada imagen en función de la velocidad
 *              del vehículo y la distancia entre las coordenadas.
 * 
 * Autor: Makoki
 * Versión: 1.0
 * Fecha de última modificación: 20240411
 * 
 * Dependencias: ninguna
 * 
 * Uso:
 *   Este módulo puede ser utilizado para simular el movimiento de un vehículo en una película. Para
 *   ello, se debe llamar a la función simulateMotion() pasando como argumentos la lista de coordenadas
 *   del trayecto y la velocidad del vehículo. Esta función devolverá una lista de objetos que contienen
 *   la coordenada y la duración de cada imagen en la película.
 * 
 * Ejemplo de uso:
 *   const motionSimulation = require('./motionSimulation');
 *   const durationList = motionSimulation.simulateMotion(coordinateList, vehicleSpeed);
 *   // Hacer algo con la lista de duraciones generada...
 * 
 * Notas:
 *   - La velocidad del vehículo se debe proporcionar en unidades de distancia por unidad de tiempo
 *     (por ejemplo, kilómetros por hora).
 *   - La precisión y exactitud de la simulación pueden variar dependiendo de la calidad y resolución
 *     de las coordenadas proporcionadas, así como de la velocidad del vehículo.
 *   - Se recomienda ajustar adecuadamente la velocidad del vehículo y la resolución de las coordenadas
 *     para lograr una simulación realista del movimiento en la película generada.
 */
