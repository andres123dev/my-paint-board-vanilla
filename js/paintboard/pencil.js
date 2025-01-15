/** Andrés Fernández Burón
 *  November of 2021
 * 
 *  Copyright © All rights reserved
 * 
 *  Paint board as web application.
 *  Wrote with HTML, CSS, and vanilla JavaScript, using the W3C event model.
 * 
 *  File with functions to handle the pencil (paint, erase, etc).
 * 
 */
"use strict";

/* -------------- GLOBAL VARS --------------------- */

// El color seleccionado
var color = '#ffffff';
//var color = 'rgb(255, 255, 255)';

// Bandera para saber si estoy actuando (pintar, borrar, etc)
var amPainting = false;

// Acción actual
var accion = 'PINTAR';

/* -------------- FUNCTIONS ----------------------- */

// DEFINO PARA EL PINCEL, EL COLOR SELECCIONADO EN EL INPUT:COLOR
function seleccionarColor() {
    
    // Defino la acción actual
    accion = 'PINTAR';
    
    // Actualizo la bandera
    amPainting = false;

    // Recogo el color del input
    let newColor = document.getElementById('color').value;

    // Actualizo el color en la variable global
    color = newColor;
}

// DEFINO PARA EL PINCEL, EL COLOR DE FONDO DE LA PIZARRA
function seleccionarBorrador() {
    
    // Defino la acción actual
    accion = 'BORRAR';

    // Actualizo la bandera
    amPainting = false;
}

// CAMBIO EL ESTADO DE LA BANDERA (actuando o no)
function cambiarEstado( self ) {

    // Actualizo el valor de las variables globales
    amPainting = ! amPainting;
    
    actuar( (self==undefined) ? this : self );
}

// SELECCIONO UN PUNTO DE LA TABLA (Doble click)
function seleccionar() {
    cambiarEstado(this);
    cambiarEstado(this);
}

// ACTÚO SOBRE UN PUNTO DE LA PIZARRA (si estoy actuando)
function actuar( self ) {

    if( amPainting ) {

        let point = null;
        if( this!=undefined && this.style!=undefined ) {
            point = this;
        } 
        else if( self!=undefined && self.style!=undefined ) {
            point = self;
        } 
        else if( self.target!=undefined && self.target.style!=undefined ) {
            point = self.target;
        }
        
        switch( accion ) {
            case 'PINTAR':
                point.style.backgroundColor = color;
                break;
            case 'BORRAR':
                point.style.backgroundColor = backgroundColor;
                break;
        }
    }
}
