function dragPane(event) {
    const element = document.getElementById("windowPane");
    const container = document.getElementsByTagName("content")[0];
    let offsetX, offsetY;

    offsetX = event.clientX - element.getBoundingClientRect().left;
    offsetY = event.clientY - element.getBoundingClientRect().top;
    element.style.cursor = 'grabbing';

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(e) {
        const containerRect = container.getBoundingClientRect();

        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;

        if (newX >= 0 && newX <= containerRect.width - element.offsetWidth) {
            element.style.left = `${newX}px`;
        }
        if (newY >= 0 && newY <= containerRect.height - element.offsetHeight) {
            element.style.top = `${newY}px`;
        }
    }

    function onMouseUp() {
        if (element) {
            element.style.cursor = 'grab';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    }
}

export default dragPane;
