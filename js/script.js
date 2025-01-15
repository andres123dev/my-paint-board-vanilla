/** Andrés Fernández Burón
 *  November of 2021
 * 
 *  Copyright © All rights reserved
 * 
 *  Paint board as web application.
 *  Wrote with HTML, CSS, and vanilla JavaScript, using the W3C event model.
 * 
 *  File with the main script of the Paint board.
 * 
 */
"use strict";

/* -------------- THE SCRIPT ---------------------- */

// Cuándo se ha terminado de cargar el documento HTML y el DOM
window.onload = function() {

    // LISTENERS FOR MENU BUTTONS:

    // Añado el listener al evento CLICK de los BUTTON para Pintar, Borrar, etc
    document.getElementById('btnPintar').addEventListener('click', seleccionarColor);
    document.getElementById('btnBorrar').addEventListener('click', seleccionarBorrador);

    // Añado el listener al evento CLICK del BUTTON para mostrar/ocultar el panel de Opciones
    document.getElementById('btnOpciones').addEventListener('click', alternarMenuOpciones);

    // Añado el listener al evento CLICK del BUTTON para mostrar/ocultar el popup de Ayuda
    document.getElementById('btnAyuda').addEventListener('click', mostrarPopupAyuda);

    // LISTENERS FOR APP OPTIONS:

    // Añado el listener al evento CHANGE del INPUT:COLOR para seleccionar el color del pincel
    document.getElementById('color').addEventListener('input', seleccionarColor);

    // Añado el listener al evento CHANGE del INPUT:COLOR para seleccionar el color de fondo de la pizarra
    document.getElementById('fondo').addEventListener('input', function( evt ) {

        let newColor = document.getElementById('fondo').value;

        updateBackgroundColor( newColor );

        cerrarMenuOpciones();
    });

    // Añado el listener al evento CHANGE del INPUT:NUMBER para seleccionar el número de píxeles por punto
    document.getElementById('pixelesPorPunto').addEventListener('change', updatePixelsPerPoint);

    // THE SCRIPT STARTS:
    
    // Actualizo el año de Copyright
    document.getElementById('this-year').innerText = getStrYear();

    // Defino los colores iniciales
    document.getElementById('color').style.color = color;
    document.getElementById('fondo').style.color = backgroundColor;

    // Creo e Inicializo la pizarra
    initPaintboard();

    // Muestro el panel de ayuda
    mostrarPopupAyuda();

};
