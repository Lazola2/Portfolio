/**
 * in this script:
 *  - use js to place the different sections on correct positions
 *  - when the links in the header are clicked
 */

'use strict'

// declaring the different sections
const resume = document.querySelector('#resume');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');

// declaring the links
const resumeLink = document.querySelector('#link-2');
const projectsLink = document.querySelector('#link-3');
const contactLink = document.querySelector('#link-4');

resumeLink.addEventListener('click',()=>{
    resume.style.paddingTop = "15vh";
})