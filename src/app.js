'use strict';

var labels = document.getElementsByTagName('label');

// Enables the user to click on the words or the box in order to check it.
for( let i = 0; i < labels.length; i++){
    labels[i].addEventListener('click', e => {
        // Grab the input tag off the target.
        let checkbox = e.target.children[0];

        //Toggle check box when you click on any part of the .
        checkbox.checked = !checkbox.checked;
    });
}
