import _ from 'lodash';


/*
let sections = document.querySelectorAll('.section');

let currentSection = 0;

function scrollHandler(event) {
    console.log(event)
    if(event.deltaY > 0 && currentSection < sections.length -1) {
         pageUp();
        currentSection++;
    }
 }

function pageUp(){
    sections[currentSection].classList.add('pageUp');
    
    setTimeout(function (){
        sections[currentSection].classList.remove('pageUp');
    }, 1000);
    
        
  
}

document.addEventListener('wheel', _.throttle(scrollHandler, 1000));

*/