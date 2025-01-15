/** Andrés Fernández Burón
 *  November of 2021
 * 
 *  Copyright © All rights reserved
 * 
 *  Paint board as web application.
 *  Wrote with HTML, CSS, and vanilla JavaScript, using the W3C event model.
 * 
 *  File with util functions for the program.
 * 
 */
"use strict";

/* -------------- FUNCTIONS ----------------------- */

// RETURN CURRENT YEAR
function getStrYear() {
    return (new Date()).getFullYear();
}


// RETURN HEX COLOR FROM RGB COLOR
function parseRgbToHex( rgbColor ) {
    
    let preformated = rgbColor.replace('rgb(', '');
    preformated = preformated.replace(')', '');

    let parts = preformated.split(', ')

    let hexColor = "#";
    for(let i=0 ; i<3 ; i++) {
        let dec = parseInt(parts[i]).toString(16);
        if( dec.length === 1 ) {
            hexColor += "0" + dec;
        } else {
            hexColor += dec;
        }
    }

    return hexColor;
}
