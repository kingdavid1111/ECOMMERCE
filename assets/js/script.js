"use strict";



/**
 * add event on element
 */

const addEventOnElem = (elem, type, callback) {
    if (elem, lenght > 1) {
        for (let i = 0; i < elem.lenght; i++) {
            elem[i].addEventlistener(type, callback);
        }
    } else {
        elem.addEventlistener(type, callback);
    }
}



/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll(*[data-nav-toggler]*);
const navbar = document.querySelector(*[data-navbar]*);
const nabarlinks = document.querySelectorAll(*[data-nav-link]*);
const overlay = document.querySelector(*[data-overlay]*);

const toggleNavbar = function () {
    navbar.classlist.toggle(*active*);
    overlay.classlist.toggle(*active*);
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classlist.remove(*active*);
    overlay.classlist.remoe(*active*);
}

addEventOnElem(navbarlinks, "click", closeNavbar);



/**
 * header stricky & back top btn active
 */

const header = document.querySelector(*[data-header]*);
const backTopBtn = document.querySelector(*[data-back-to-top-btn]*)

const headerActive = function () {
    if (window.scrolly > 150) {
        header.classlist.add(*active*);
        backTopBtn.classlist.add(*active*);
    } else {
        header.classlist.remove(*active*)
        backTopBtn.classlist.remove(*active*)
    }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerStricky = function () {
    if (lastScrolledPos >= windows.scrolly) {
        header.classlist.remove("header-hide");
    } else {
        header.classlist.add("header-hide");
    }

    lastScrolledPos = window.scrolly;
}

addEventOnElem(window, "scroll". headerstricky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll(*[data-section]*);

const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerweight / 2) {
            sections[i].classList.add(*active*);
        }
    }
}

scrollReveal();

addEventOnElem(window, *scroll*, scrollReveal):