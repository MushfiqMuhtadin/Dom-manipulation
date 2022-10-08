const bluebutton = document.getElementById('blue');
bluebutton.onclick = makeblue;

function makeblue() {
    document.body.style.backgroundColor = 'blue';
}


const redbutton = document.getElementById('red')

redbutton.onclick = makered;

function makered() {
    document.body.style.backgroundColor = 'red';
}



const greenbutton = document.getElementById('greenbutton')

greenbutton.onclick = makegreen;

function makegreen() {
    document.body.style.backgroundColor = 'green';
}

const hagucolor = document.getElementById('hagucolor');

hagucolor.onclick = makehagu;


function makehagu() {
    document.body.style.backgroundColor = 'brown';
}


//eventlistener

const pinkevent = document.getElementById('pinkcolor');
pinkevent.addEventListener('click', function makepink(){
    document.body.style.backgroundColor = 'pink';
})
