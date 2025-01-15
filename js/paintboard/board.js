/** Andrés Fernández Burón
 *  November of 2021
 * 
 *  Copyright © All rights reserved
 * 
 *  Paint board as web application.
 *  Wrote with HTML, CSS, and vanilla JavaScript, using the W3C event model.
 * 
 *  File with functions to create, initialize and set the HTML Paint board.
 * 
 */
"use strict";

/* -------------- GLOBAL VARS --------------------- */

// El número de filas y columnas de la pizarra
var numFilas = 80;
var numColumnas = 80;

// El color de fondo seleccionado
var backgroundColor = '#000000';
//var backgroundColor = 'rgb(0, 0, 0)';

// El número de píxeles por punto de la pizarra
var pixelesPorPunto = 5;

/* -------------- FUNCTIONS ----------------------- */

// INICIALIZO LA PIZARRA
function initPaintboard() {
    setDefaultValues();
    createPaintboard();
    addListenersToPaintboard();
    
    seleccionarColor();
    updatePixelsPerPoint();
}

// DEFINO EN LOS INPUT DEL HTML, LOS VALORES POR DEFECTO
function setDefaultValues() {
    document.getElementById('color').value = color;
    document.getElementById('filas').value = numFilas;
    document.getElementById('columnas').value = numColumnas;
    document.getElementById('pixelesPorPunto').value = pixelesPorPunto;
    document.getElementById('fondo').value = backgroundColor;
}

// AÑADO LA TABLE DE LA PIZARRA AL HTML
function createPaintboard() {
    document.getElementById('pizarra').innerHTML = '';

    // Las filas
    for(let i=0 ; i<numFilas ; i++) {
        let fila = document.createElement('tr');
        
        // Las columnas
        for(let j=0 ; j<numColumnas ; j++) {
            fila.appendChild( document.createElement('td') );
        }

        document.getElementById('pizarra').appendChild( fila );
    }
}

// AÑADO LOS LISTENERS A LA PIZARRA 
function addListenersToPaintboard() {
    let all = document.querySelectorAll('#pizarra td');
    
    for( let i=0 ; i<all.length ; i++ ) {
        all[i].addEventListener('click', cambiarEstado);
        all[i].addEventListener('dblclick', seleccionar );
        all[i].addEventListener('mousemove', actuar);

        all[i].style.height = pixelesPorPunto + 'px';
        all[i].style.width = pixelesPorPunto + 'px';

        all[i].style.backgroundColor = backgroundColor;
    }
}

// ACTUALIZO EL COLOR DE FONDO DE LA PIZARRA
function updateBackgroundColor( newColor ) {

    let all = document.querySelectorAll('#pizarra td');
    for(let i=0 ; i<all.length ; i++) {

        let cellColor = all[i].style.backgroundColor;

        if( cellColor.indexOf('#') ) {
            cellColor = parseRgbToHex( cellColor );
        }

        if( cellColor == backgroundColor ) {
            all[i].style.backgroundColor = newColor;
        }

    }

    backgroundColor = newColor;
}

// DEVUELVO BOOL, EN FUNCION DE SI ES UNA RESOLUCIÓN VÁLIDA O NO
function esResolucionValida(alto, ancho, pixelesPorPunto) {

    if( alto*pixelesPorPunto > window.innerHeight*0.9 ) {
        return false;
    }
    if( ancho*pixelesPorPunto > window.innerWidth*0.9 ) {
        return false;
    }
    
    return true;
}

// ACTUALIZO EL TAMAÑO DE LOS PUNTOS QUE COMPONEN LA PIZARRA
function updatePixelsPerPoint() {
    cerrarMenuOpciones();
    
    if( esResolucionValida(numFilas, numColumnas, pixelesPorPunto) ) { 
        let all = document.querySelectorAll('#pizarra td');
        for(let i=0 ; i<all.length ; i++) {
            all[i].style.height = document.getElementById('pixelesPorPunto').value + 'px';
            all[i].style.width = document.getElementById('pixelesPorPunto').value + 'px';
        }
    } else {
        let msg = '<p>'+pixelesPorPunto+'px no es una resolución valida para este tamaño</p>';
        msg += '<p>('+numFilas+'*'+numColumnas+').</p>';
        PopUp.showError(msg);
    }
}
