import _ from 'lodash'
import Lion, * as utilities from "./utilities";

console.log(utilities.square(9));
console.log(utilities.NAME);
console.log(Lion.say());

function component() {
    const element = document.createElement('div');
    const array = ['Hello', 'webpack', '!!!'];
    element.innerHTML = _.join(array, '! ');
    return element;
}

document.body.appendChild(component());
