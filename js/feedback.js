/** Andrés Fernández Burón
 *  November of 2021
 * 
 *  Copyright © All rights reserved
 * 
 *  Paint board as web application.
 *  Wrote with HTML, CSS, and vanilla JavaScript, using the W3C event model.
 * 
 *  File with the static class PopUp.
 *  This class has functions to handle pop-up messages.
 * 
 */
"use strict";

/* ---- STATIC CLASS POPUP --------------------------------------------------------- */
class PopUp {

    // APPEND A POP-UP MESSAGE TO THE DOM
    static create( message, cssClass='' ) {

        // Text in a P
        let parrafo = document.createElement('p');
        if(cssClass!='')    parrafo.className = cssClass;
        parrafo.innerHTML = message;
        
        // Close button in a BUTTON
        let btnCerrar = document.createElement('button');
        btnCerrar.id = 'btnCerrarDialogo';
        btnCerrar.innerText = 'ACEPTAR';
        btnCerrar.addEventListener('click', PopUp.close, {once:true});

        let feedback = document.createElement('div');
        feedback.id = 'feedback';
        feedback.appendChild(parrafo);
        feedback.appendChild(btnCerrar);

        document.querySelector('body').appendChild(feedback);

        ////document.querySelector('body').addEventListener('click', PopUp.close() );
        ////document.getElementById('app').addEventListener('click',  PopUp.close);
    }

    // CREATE & SHOW A POP-UP MESSAGE
    static show( message, cssClass='' ) {
        PopUp.close();
        PopUp.create( message, cssClass );
    }

    // SHOW ERROR POP-UP MESSAGE
    static showError( message ) {
        PopUp.show( message, 'error' );
    }

    // CLOSE A POP-UP MESSAGE
    static close() {
        if( ! document.getElementById('feedback') ) {
            return;
        }
        document.getElementById('feedback').remove();
    }

}
