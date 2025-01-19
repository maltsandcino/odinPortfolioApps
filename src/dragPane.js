function dragPane(event) {
  const el = event.target;
  let id = el.dataset.id;
  const element = document.getElementById(`windowPane${id}`);
  console.log(event.target);
  console.log(event.target.id);
  if (event.target.classList.contains(`pB`)) {
    return 0;
  }
  console.log(element);
  const container = document.getElementsByTagName("content")[0];
  let offsetX, offsetY;

  console.log("Break1");
  offsetX = event.clientX - element.getBoundingClientRect().left;
  offsetY = event.clientY - element.getBoundingClientRect().top;
  element.style.cursor = "grabbing";

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(e) {
    console.log("Break2");
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
      element.style.cursor = "grab";
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
  }
}

export default dragPane;
