/** Andrés Fernández Burón
 *  November of 2021
 * 
 *  Copyright © All rights reserved
 * 
 *  Paint board as web application.
 *  Wrote with HTML, CSS, and vanilla JavaScript, using the W3C event model.
 * 
 *  File with util functions to handle the Paint board menu an options.
 * 
 */
"use strict";

/* -------------- FUNCTIONS ----------------------- */

// OCULTO EL PANEL DE OPCIONES
function cerrarMenuOpciones() {
    document.getElementById('opciones').style.display = 'none';
}

// MUESTRO U OCULTO EL PANEL DE OPCIONES
function alternarMenuOpciones() {
    let panel = document.getElementById('opciones');
    
    panel.style.display = panel.style.display=='none' ? 'inherit': 'none';

    if( panel.style.display=='inherit' ) {
        document.getElementById('app').addEventListener('click', cerrarMenuOpciones,  {once:true} );
    }
}

/* -------------- MENU----- ----------------------- */

// MUESTRO EL POP-UP DE AYUDA
function mostrarPopupAyuda() {
    let message = `
        <p>Para alternar entre pintar y borrar, haz click en los botones PINTAR y BORRAR.</p>

        <br><p>Para pintar, haz click en la pizarra y arrastra el cursor.
        <br>Para dejar de pintar, vuelve a hacer click en la pizarra.</p>

        <br><p>Para pintar un solo punto, haz doble click a lenta velocidad en la pizarra.</p>
        
        <br><p>Para cambiar el color del pincel, el color del fondo de la pizarra o el número de píxeles por punto, utiliza el menú.</p>
        
        <br><p>Para volver a ver este mensaje, haz click en el botón AYUDA.</p>
    `;
    PopUp.show( message);    
}

