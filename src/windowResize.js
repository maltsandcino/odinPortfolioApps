function windowResize(event) {
    
    let pane = document.getElementById(`${event.target.dataset.window}`);
    let initialWidth = pane.offsetWidth;
    let initialHeight = pane.offsetHeight;
    let initialX = event.clientX;
    let initialY = event.clientY;


    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);
    

    function resize(event) {
        // Made need to handle minimum sizes here

        let newWidth = initialWidth + (event.clientX - initialX);
        let newHeight = initialHeight - (event.clientY - initialY);

        pane.style.left = ""
        pane.style.right = event.clientX + "px";
        pane.style.top = event.clientY + "px";        
        pane.style.width = newWidth + "px";
        pane.style.height = newHeight + "px";
        pane.dataset.width = newWidth + "px";
        pane.dataset.height = newHeight + "px"
        
    }

    function stopResize() {
        
        window.removeEventListener("mousemove", resize);
        window.removeEventListener("mouseup", stopResize);
    }
  }
  
  export default windowResize;