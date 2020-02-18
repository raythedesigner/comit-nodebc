/*
window.onload = function() {
    let allBgRedElements = document.querySelectorAll('p');
    let allBgRedElements = document.querySelectorAll('.bg-red');
    console.log(allBgRedElements.attributes);
}
*/

window.onload = function() { 
    let elements = document.querySelector('p');
    console.log(elements.attributes)

    // for (var i = 0; i < elements.attributes.length; i++) {
    //     console.log(elements.attributes[i].name)
    //     console.log(elements.attributes[i].value)
    // }

    // console.log(elements.getAttribute('class'))
    console.log(elements.getAttribute('nodebc'))
}