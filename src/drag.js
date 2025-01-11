import makeWindow from './makeWindow.js';

function enableDrag() {const draggables = document.querySelectorAll('.draggable');
const container = document.getElementsByTagName("content")[0];

let offsetX, offsetY, currentDraggable;

document.addEventListener('DOMContentLoaded', () => {
    setInitialPositions(); 
    makeAbsolute();})
//Below finds the icons based on where they are in the grid layout. This is necessary to make it actually open properly.
//add event listener to open icon

function setInitialPositions(){
    draggables.forEach(draggable => {
    draggable.addEventListener('dblclick', () => makeWindow(draggable.id))
    const rect = draggable.getBoundingClientRect();
    draggable.style.left = `${rect.left}px`;
    draggable.style.top = `${rect.top}px`;
    console.log(draggable.style.left)
    console.log(draggable.style.top)
})
}
//After we get their locations set above, we can make them have absolute positioning, which is required to mov them.
function makeAbsolute(){
    draggables.forEach(draggable => {
    draggable.style.position = "absolute"
    })
}

//Adding event listeners to each element in content.
draggables.forEach(draggable => {
    draggable.addEventListener('mousedown', onMouseDown);
});

//Initial click
function onMouseDown(e) {
    currentDraggable = e.target;
    // currentDraggable.style.position = 'absolute';
    offsetX = e.clientX - currentDraggable.getBoundingClientRect().left;
    offsetY = e.clientY - currentDraggable.getBoundingClientRect().top;
    currentDraggable.style.cursor = 'grabbing';

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

};

//actual dragging
function onMouseMove(e) {
    //getting dimensions of container
    const containerRect = container.getBoundingClientRect();
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;
    if (newX >= 0 && newX <= containerRect.width - currentDraggable.offsetWidth) {
        currentDraggable.style.left = `${newX}px`;
    }
    if (newY >= 0 && newY <= containerRect.height - currentDraggable.offsetHeight) {
        currentDraggable.style.top = `${newY}px`;
    }
    
}

//Letting go
function onMouseUp() {
    if (currentDraggable){
    currentDraggable.style.cursor = 'grab';
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    
    currentDraggable = null;}
}
}

export default enableDrag;